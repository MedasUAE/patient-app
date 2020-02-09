import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
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
  constructor(
    private httpApi: HttpApiProvider,
    public loader: LoadingController) {
      this.profile = {};
      this.op_number = localStorage.getItem('op_number');
  }

  ionViewDidLoad(){
    console.log("Loading profile!");
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Profile!'});
    this.load.present()
      .then(()=>{
      this.httpApi.getMyProfile(this.op_number)
        .subscribe((result:any)=>{
          let res = JSON.parse(result._body).data;
          console.log(res[0]);
          if(res.length) this.profile = res[0];
          this.load.dismiss();
        },error=>{
          console.log(error);
          this.load.dismiss();
        })});
  }

}
