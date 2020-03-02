import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

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
  providers: [TranslateService]
})
export class HomePage {

  // private translate: TranslateService;
  dashboardLayout;
  profile;
  BOOK_APPOINTMENT: string;
  BOOK_APPOINTMENT_DOCTOR: string;
  MY_PROFILE: string;
  MRN: string;
  DOB: string;
  INSURANCE: string;
  AVAILABLE_INSURANCE: string;
  MY_CONSULTATION: string;
  VIEW_MEDICAL_HISTORY: string;
  MY_REPORT: string;
  VIEW_REPORT: string;
  SERVICES: string;
  SERVICES_AVAILABLE:  string;
  ABOUT_US:  string;
  KNOW_MORE:  string;
  LOCATION:  string;
  FIND_LOCATION:  string;
  language: string;
  constructor(
    public navCtrl: NavController,
    public translate: TranslateService, 
  ) {
      // this.translate = translate;
      // this.translate.use('ar');
      this.profile = JSON.parse(localStorage.getItem('profile'));
      (!this.profile) ? this.profile = {} : this.profile;
      // this.dashboardLayout = {"type":"tiles","callnumber":"+971581241954","buttons":{"button_1":{"heading":"MY APPOINTMENTS","dataUrl":"","icon":"calendar","modal":"appointment","avatar":"true","action":"appointment"},"button_2":{"heading":"DOCTORS","dataUrl":"getdoctors","icon":"people","modal":"Card","overlay":true,"action":"navigation"},"button_3":{"heading":"INSURANCES","dataUrl":"getinsurances","icon":"list-box","modal":"List","avatar":true,"action":"list"},"button_4":{"heading":"SERVICES","dataUrl":"getfacilities","icon":"medkit","modal":"Card","avatar":true,"action":"list"},"button_5":{"heading":"MY PROFILE","dataUrl":"getdoctors","icon":"person","modal":"Details","avatar":true,"action":"list"},"button_6":{"heading":"NEWS EVENTS","dataUrl":"getnews","icon":"megaphone","modal":"Card","avatar":true,"action":"list"},"button_7":{"heading":"ABOUT US","dataUrl":"getaboutus","icon":"medical","modal":"Card","avatar":true,"action":"list"}}};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("homescroll").style.height = window.innerHeight - height - document.getElementsByName("profile")[0].clientHeight - document.getElementsByName("logo")[0].clientHeight + "px";
    console.log(document.getElementById("homescroll").style.height);
    this._initialiseTranslation();
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

  private _initialiseTranslation() : void
  {
    setTimeout(() => 
    {
      this.language = this.translate.getDefaultLang()
      this.BOOK_APPOINTMENT = this.translate.instant("BOOK_APPOINTMENT");
      this.BOOK_APPOINTMENT_DOCTOR = this.translate.instant("BOOK_APPOINTMENT_DOCTOR");
      this.MY_PROFILE = this.translate.instant("MY_PROFILE");
      this.DOB = this.translate.instant("DOB");
      this.MRN = this.translate.instant("MRN");
      this.MY_CONSULTATION = this.translate.instant("MY_CONSULTATION");
      this.VIEW_MEDICAL_HISTORY = this.translate.instant("VIEW_MEDICAL_HISTORY");
      this.MY_REPORT = this.translate.instant("MY_REPORT");
      this.VIEW_REPORT = this.translate.instant("VIEW_REPORT");
      this.SERVICES = this.translate.instant("SERVICES");
      this.SERVICES_AVAILABLE = this.translate.instant("SERVICES_AVAILABLE");
      this.INSURANCE = this.translate.instant("INSURANCE");
      this.AVAILABLE_INSURANCE = this.translate.instant("AVAILABLE_INSURANCE");
      this.ABOUT_US = this.translate.instant("ABOUT_US");
      this.KNOW_MORE = this.translate.instant("KNOW_MORE");
      this.LOCATION = this.translate.instant("LOCATION");
      this.FIND_LOCATION = this.translate.instant("FIND_LOCATION");
     }, 250);
  }

  changeLanguage(){
    (this.translate.getDefaultLang() == 'en') ? this.translate.setDefaultLang('ar') : this.translate.setDefaultLang('en');
    this._initialiseTranslation();
  }
  
}
