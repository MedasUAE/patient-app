import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsPage {
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
  }

  call(){
    console.log("call");
  }
}
