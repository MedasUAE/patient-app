import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { MastersProvider } from '../../providers/masters'
/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html',
  providers: [MastersProvider]
})
export class AboutUsPage {
  aboutus = {title:"", details: "", title_ar: "", details_ar: ""};
  constructor(private masterProvider: MastersProvider){}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutUsPage');
    this.masterProvider.getAboutUs()
      .then((result:any) => {
        this.aboutus = result;
      })
  }

  call(){
    console.log("call");
  }
}
