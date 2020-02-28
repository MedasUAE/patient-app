import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

/**
 * Generated class for the FeedbackPage.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'feedback',
  templateUrl: 'feedback.html',
  providers: []
})
export class FeedbackPage {
  selected = "";
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  done(){
    this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
  }

  active(type) {
    this.selected = type;
  }
}
