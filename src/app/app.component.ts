import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialSharing } from '@ionic-native/social-sharing';

import { HomePage } from '../pages/home/home';
import { LocationsPage } from '../pages/location/locations';
import { AboutUsPage } from '../pages/about-us/about-us';
import { appVersion } from '../providers/system.constants'
// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  version: string;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    private menuCtrl: MenuController,
    private socialSharing: SocialSharing,
    public splashScreen: SplashScreen) {
      this.initializeApp();
      this.version = appVersion;
      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage }
      ];

  }

  locations(){
    this.rootPage = LocationsPage
    this.menuCtrl.close();
  }

  aboutus(){
    this.rootPage = AboutUsPage
    this.menuCtrl.close();
  }

  shareApp(){
    this.socialSharing.share("Share the App", null, null, "https://play.google.com/store/apps/details?id=medas.app.daweni")
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = HomePage
      // (localStorage.getItem('profile') && localStorage.getItem('token')) ? this.rootPage = HomePage : this.rootPage = LoginPage;
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}
