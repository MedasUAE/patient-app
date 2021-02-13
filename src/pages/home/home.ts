import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PersonalDetailsPage} from '../personal-details/personal-details';
import { ConsultlistPage} from '../consultlist/consultlist';
import { FeedbackPage} from '../feedback/feedback';
import { ServicesPage} from '../services/services';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { AboutUsPage} from '../about-us/about-us';
import { LocationsPage } from '../location/locations';
import { LabOrderPage } from '../laborder/laborder';
import { EventsPage } from '../events/events';
import { QualityPage } from '../quality/quality';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dashboardLayout;
  profile;
  promotions = [];
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
  ) {
      this.profile = JSON.parse(localStorage.getItem('profile'));
      (!this.profile) ? this.profile = {} : this.profile;

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

  feedback(){
    this.navCtrl.push(FeedbackPage);
  }

  services(){
    this.navCtrl.push(ServicesPage);
  }

  events(){
    this.navCtrl.push(EventsPage);
  }

  aboutus(){
    this.navCtrl.push(AboutUsPage);
  }
  
  locations(){
    this.navCtrl.push(LocationsPage);
  }

  quality(){
    this.navCtrl.push(QualityPage);
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

  shareApp(){
    this.socialSharing.share("Share the App", null, null, "https://play.google.com/store/apps/details?id=medas.farabi")
  }

  openUrl(url) {
    switch (url) {
      case 'facebook':
        this.iab.create('https://www.facebook.com/pages/category/Medical-Center/%D9%85%D8%AE%D8%AA%D8%A8%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%81%D8%A7%D8%B1%D8%A7%D8%A8%D9%8A-%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%A9-227223914350910/', '_system');
        break;
      case 'twitter':
        this.iab.create('https://mobile.twitter.com/Farabilabs', '_system')
        break;
      case 'instagram':
        this.iab.create('https://instagram.com/alfarabilabs?igshid=pgj0oopv0dqb', '_system')
        break;
      case 'snapchat':
        this.iab.create('https://www.snapchat.com/add/alfarabilab', '_system')
        break;
      default:
        break;
    }
  }
  
}
