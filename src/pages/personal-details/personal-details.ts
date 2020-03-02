import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { HttpApiProvider } from '../../providers/http-api/http-api';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the PersonalDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
  providers: [HttpApiProvider]
})
export class PersonalDetailsPage {
  profile;
  op_number;
  load;

  MRN: string;
  GENDER: string;
  DOB: string;
  NATIONALID: string;
  MOBILE: string;
  REGISTRATION_DATE: string;
  INSURANCE: string;

  constructor(
    private httpApi: HttpApiProvider,
    public translate: TranslateService, 
    public loader: LoadingController) {
      this.profile = {};
      this.op_number = localStorage.getItem('op_number');
  }

  ionViewDidLoad(){
    console.log("Loading profile!");
    this._initialiseTranslation();
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Profile!'});
    this.load.present()
      .then(()=>{
      this.httpApi.getMyProfile(this.op_number)
        .subscribe((result:any)=>{
          let res = JSON.parse(result._body).data;
          if(res.length) this.profile = res[0];
          this.load.dismiss();
        },error=>{
          console.log(error);
          this.load.dismiss();
        })});
  }

  private _initialiseTranslation() : void {
    this.MRN = this.translate.instant("MRN");
    this.MOBILE = this.translate.instant("MOBILE");
    this.GENDER = this.translate.instant("GENDER");
    this.DOB = this.translate.instant("DOB");
    this.NATIONALID = this.translate.instant("NATIONALID");
    this.REGISTRATION_DATE = this.translate.instant("REGISTRATION_DATE");
    this.INSURANCE = this.translate.instant("INSURANCE");
  }

}
