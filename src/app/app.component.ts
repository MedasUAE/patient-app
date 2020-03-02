import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { version } from '../providers/system.constants';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TranslateService } from '@ngx-translate/core';
// import { TitleCasePipe } from '@angular/common'; 
// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;
  version: string;
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public _translate: TranslateService,
    public splashScreen: SplashScreen) {
      this.initializeApp();
      this.version = version;
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'List', component: ListPage }
      ];

  }

  openURL(url){
    switch (url) {
      case 'facebook':
        window.open('https://www.facebook.com/Dawenimedicalclinics/')
        break;
      case 'twitter':
        window.open('https://www.twitter.com/daweni_medical/')
        break;
      case 'snapchat':
        window.open('https://www.snapchat.com/add/daweni_medical')
        break;
      case 'instagram':
        window.open('https://www.instagram.com/daweni_medical/');
        break;
      case 'aboutus':
          window.open('http://www.daweni.com.sa/')
          break;
      default:
        break;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this._initTranslate();
      this.rootPage = HomePage
      // (localStorage.getItem('profile') && localStorage.getItem('token')) ? this.rootPage = HomePage : this.rootPage = LoginPage;
    });

    
  }

  private _initTranslate() 
  {
     // Set the default language for translation strings, and the current language.
     this._translate.setDefaultLang('ar');


    //  if (this._translate.getBrowserLang() !== undefined) 
    //  {
    //      this._translate.use(this._translate.getBrowserLang());
    //  } 
    //  else 
    //  {
    //      this._translate.use('ar'); // Set your language here
    //  }
  }
}
