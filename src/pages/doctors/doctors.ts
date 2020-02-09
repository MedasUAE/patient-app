import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorsProvider } from '../../providers/doctors';
import { DoctorDetailsPage } from '../../pages/doctor-details/doctor-details';
/**
 * Generated class for the DoctorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctors',
  templateUrl: 'doctors.html',
  providers: [DoctorsProvider]
})
export class DoctorsPage {
  doctors = [];
  slots = [];
  offices = []
  constructor(
    public navCtrl: NavController, 
    private doctorProvider: DoctorsProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scroll").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight - document.getElementsByName("officeSelect")[0].clientHeight + "px";
    this.doctorProvider.getDoctors("")
    .then((result:any)=>{
        this.doctors = result;
      },error=>{
        console.log(error);
      });
    
      this.doctorProvider.getOffices()
        .then((result:any)=>{
          this.offices = result;
        },error=>{
          console.log(error);
        });
  }

  detail(obj){
    this.navCtrl.push(DoctorDetailsPage,{doctor: obj});
  }

  onChangeOffice(office){
    this.doctors = this.doctorProvider.filterDoctors(office.office_Id);
  }

}
