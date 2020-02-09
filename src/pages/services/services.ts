import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HttpApiProvider } from '../../providers/http-api/http-api';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  services;
  constructor(private httpApi: HttpApiProvider) {
    this.httpApi.getServices("")
      .subscribe((result:any)=>{
          this.services = JSON.parse(result._body).data;
        },error=>{
          console.log(error);
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServicesPage");
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scroll").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + "px";
  }

}
