import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

import { DoctorsProvider } from '../../providers/doctors';

/**
 * Generated class for the PagesBookingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'booking-details',
  templateUrl: 'booking-details.html',
  providers: [DoctorsProvider]
})
export class BookingDetailsPage {
  doctor: any;
  patientname: "";
  mobile: "";
  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController, 
    public doctorProvider: DoctorsProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
      this.doctor = this.navParams.data;
      console.log(this.navParams.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PagesBookingDetailsPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  request() {
    //console.log(this.patientname,this.mobile);
    if(!this.patientname || !this.mobile){
      this.alertMethod('Alert', `Please fill details.`);
      return;
    }

    // this.doctorProvider.requestApt(this.doctor.doctors_id, this.patientname, this.mobile)
    //   .then(()=>{
    //     this.alertMethod('Thank you.', `We will call you back to confirm your appointment request with Dr. ${this.doctor.doctors_name}`);
    //     this.viewCtrl.dismiss();
    //   })
    //   .catch(error=>{
    //     this.alertMethod('Alert', `Something went wrong from our end, please call us for the appointment request or try again later.`)
    //     this.viewCtrl.dismiss();
    //   })
  }

  alertMethod(title, subTitle){
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
