import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PersonalDetailsPage} from '../personal-details/personal-details';
import { ConsultlistPage} from '../consultlist/consultlist';
import { DoctorsPage} from '../doctors/doctors';
import { ServicesPage} from '../services/services';
import { InsurancesPage} from '../insurances/insurances';
import { AboutUsPage} from '../about-us/about-us';
import { LocationsPage } from '../location/locations';
import { LabOrderPage } from '../laborder/laborder';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  // providers: [TranslateService]
})
export class HomePage {

  // private translate: TranslateService;
  dashboardLayout;
  profile;
  constructor(
    public navCtrl: NavController,
    // translate: TranslateService, 
  ) {
      // this.translate = translate;
      // this.translate.use('ar');
      this.profile = JSON.parse(localStorage.getItem('profile'));
      (!this.profile) ? this.profile = {} : this.profile;
      // this.dashboardLayout = {"type":"tiles","callnumber":"+971581241954","buttons":{"button_1":{"heading":"MY APPOINTMENTS","dataUrl":"","icon":"calendar","modal":"appointment","avatar":"true","action":"appointment"},"button_2":{"heading":"DOCTORS","dataUrl":"getdoctors","icon":"people","modal":"Card","overlay":true,"action":"navigation"},"button_3":{"heading":"INSURANCES","dataUrl":"getinsurances","icon":"list-box","modal":"List","avatar":true,"action":"list"},"button_4":{"heading":"SERVICES","dataUrl":"getfacilities","icon":"medkit","modal":"Card","avatar":true,"action":"list"},"button_5":{"heading":"MY PROFILE","dataUrl":"getdoctors","icon":"person","modal":"Details","avatar":true,"action":"list"},"button_6":{"heading":"NEWS EVENTS","dataUrl":"getnews","icon":"megaphone","modal":"Card","avatar":true,"action":"list"},"button_7":{"heading":"ABOUT US","dataUrl":"getaboutus","icon":"medical","modal":"Card","avatar":true,"action":"list"}}};
  }

  ionViewDidLoad() {
    // console.log("ionViewDidLoad HomePage");
    // const toolbars = document.getElementsByClassName('toolbar');
    // let height = 0;
    // for (let index = 0; index < toolbars.length; index++) {
    //   if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
    //   height = toolbars[index].clientHeight;
    // }
    // document.getElementById("homescroll").style.height = window.innerHeight - height - document.getElementsByName("profile")[0].clientHeight - document.getElementsByName("logo")[0].clientHeight + "px";
    // console.log(document.getElementById("homescroll").style.height);
  }
  

  myconsultation(){
    if(!this.profile.patient_name) {
      this.navCtrl.push(LoginPage);
      return;
    }
    this.navCtrl.push(ConsultlistPage)
  }

  myprofile(){
    this.navCtrl.push(PersonalDetailsPage);
  }

  doctors(){
    this.navCtrl.push(DoctorsPage);
  }

  services(){
    this.navCtrl.push(ServicesPage);
  }

  insurance(){
    this.navCtrl.push(InsurancesPage);
  }

  aboutus(){
    this.navCtrl.push(AboutUsPage);
  }
  
  locations(){
    this.navCtrl.push(LocationsPage);
  }

  laborder(){
    if(!this.profile.patient_name) {
      this.navCtrl.push(LoginPage);
      return;
    }
    this.navCtrl.push(LabOrderPage);
  }

  logout(){
    localStorage.clear();
    this.navCtrl.setRoot(LoginPage);
  }

  login(){
    this.navCtrl.push(LoginPage);
  }
  
}
