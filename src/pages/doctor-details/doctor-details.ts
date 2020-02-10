import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { HttpApiProvider } from '../../providers/http-api/http-api';

import { getCurrentDate } from "../../providers/system.constants";
// import { BookingDetailsPage } from "../booking-details/booking-details";
import { HomePage } from '../home/home';

import { DoctorsProvider } from '../../providers/doctors';
import { ConsultSummaryProvider } from '../../providers/consultSummary';
import { AlertProvider } from '../../providers/alert';


/**
 * Generated class for the DoctorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-details',
  templateUrl: 'doctor-details.html',
  providers: [HttpApiProvider, DoctorsProvider, AlertProvider, ConsultSummaryProvider]
})
export class DoctorDetailsPage {
  doctor;
  slots;
  patientname: string;
  mobile: number;
  constructor(
    public navCtrl: NavController, 
    private navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public doctorProvider: DoctorsProvider,
    public consultProvider: ConsultSummaryProvider,
    public alertProvider: AlertProvider,
    private httpApi: HttpApiProvider) {
      this.doctor = this.navParams.get('doctor');
  }

  ionViewDidLoad(){
    
    // (this.navParams.get('doctor').doctors_name) ? this.doctors_name = this.navParams.get('doctor').doctors_name : "";
    // this.doctors_id = this.navParams.get('doctor').doctors_id;
    console.log('ionViewDidLoad DoctorDetailsPage');
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scroll-doctor").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + "px";
    
    //getting patient details if already login
    const patientDetails = this.consultProvider.patientDetails();
    if(patientDetails){
      this.patientname = patientDetails.patient_name;
      this.mobile = patientDetails.mobile;
    }

    this.httpApi.getDoctorSlot(this.doctor.doctors_id, getCurrentDate(), getCurrentDate())
      .subscribe((result:any)=>{
          this.slots = JSON.parse(result._body).data;
        },error=>{
          console.log(error);
        });
  }

  requestapt(){
    if(!this.patientname || !this.mobile){
      this.alertProvider.create('Alert', `Please fill name and mobile.`);
      return;
    }

    this.doctorProvider.requestApt(this.doctor.doctors_id, this.patientname, this.mobile, this.doctor.office_Id)
      .then(()=>{
        this.alertProvider.create('Thank you.', `We will call you back to confirm your appointment request with Dr. ${this.doctor.doctors_name}`);
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
      })
      .catch(error=>{
        this.alertProvider.create('Alert', `Something went wrong from our end, please call us for the appointment request or try again later.`)
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
      });
  }

}
