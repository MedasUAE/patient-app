import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class AlertProvider {
  constructor(public alertCtrl: AlertController){}


  create(title, subTitle){
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
