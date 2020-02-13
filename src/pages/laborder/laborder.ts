import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabResultPage } from '../labresult/labresult';
import { LabProvider } from "../../providers/labs";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LabOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laborder',
  templateUrl: 'laborder.html',
  providers: [LabProvider]
})
export class LabOrderPage {
  load: any;
  // list =  [{"apt_date":"12-July-2018","doctor":"Dr. Jacob Abraham","clinic":"Deira Clinic","modules":[{"type":"lab","action":"lab","icon":"water","color":"danger"},{"type":"Examination","action":"examination","icon":"paper","color":"secondary"},{"type":"vital","action":"vital","icon":"heart","color":"danger"}]},{"apt_date":"01-June-2018","doctor":"Dr. Omar Abdullah","clinic":"Deira Clinic","modules":[{"type":"lab","action":"lab","icon":"water","color":"danger"},{"type":"Examination","action":"examination","icon":"paper","color":"secondary"},{"type":"vital","action":"vital","icon":"heart","color":"danger"}]},{"apt_date":"13-March-2018","doctor":"Dr. Omar Abdullah","clinic":"Naif Clinic","modules":[{"type":"lab","action":"lab","icon":"water","color":"danger"},{"type":"Examination","action":"examination","icon":"paper","color":"light"},{"type":"vital","action":"vital","icon":"heart","color":"danger"}]},{"apt_date":"01-Jan-2018","doctor":"Dr. Ammara Amber","clinic":"Al Rigga Clinic","modules":[{"type":"lab","action":"lab","icon":"water","color":"danger"},{"type":"Examination","action":"examination","icon":"paper","color":"light"},{"type":"vital","action":"vital","icon":"heart","color":"danger"}]}];
  list;
  op_number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoadingController,
    private labProvider: LabProvider) {
    this.op_number = localStorage.getItem('op_number');
  }

  labresult(obj) {
    this.navCtrl.push(LabResultPage, obj)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabOrderPage');
    this.load = this.loader.create({ spinner: 'dots', content: 'Loading Reports!' });
    this.load.present()
      .then(() => {
        this.labProvider.labOrder(this.op_number)
          .then((result: any) => {
            this.list = result;
            this.load.dismiss();
          });
      })
  }

}
