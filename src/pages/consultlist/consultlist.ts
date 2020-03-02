import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { SummaryPage } from '../summary/summary';
import { HttpApiProvider } from "../../providers/http-api/http-api";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ConsultlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultlist',
  templateUrl: 'consultlist.html',
  providers: [HttpApiProvider]
})
export class ConsultlistPage {
  load:any;
  list;
  op_number;
  MY_CONSULTATION: string;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loader: LoadingController,
    public translate: TranslateService, 
    private httpApi: HttpApiProvider) {
      this.op_number = localStorage.getItem('op_number');
  }

  visitSummary(obj){
    this.navCtrl.push(SummaryPage,{
      consult_id: obj.consult_id,
      office_id:obj.office_id,
      doctor_name:obj.doctors_name
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultlistPage');
    this._initialiseTranslation()
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Consults!'});
    this.load.present()
      .then(()=>{
      this.httpApi.getConsultList(this.op_number)
        .subscribe((result:any)=>{
          this.list = JSON.parse(result._body).data;
          this.load.dismiss();
        },error=>{
          console.log(error);
          this.load.dismiss();
        })});
  }

  private _initialiseTranslation() : void {
    this.MY_CONSULTATION = this.translate.instant("MY_CONSULTATION");
  }

}
