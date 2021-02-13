import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { MastersProvider } from '../../providers/masters';

/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
  providers: [MastersProvider]
})
export class ServicesPage {
  services;
  profiles;
  result = [];
  type = 'profile';
  constructor(private masterProvider: MastersProvider) {
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServicesPage");
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scrollService").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + document.getElementById("searchBar").clientHeight + "px";
    this.getList()
  }
  
  onInput(searchText) {
    if (this.type == 'service') 
      this.result = this.masterProvider.filterService(searchText.srcElement.value)
    else if (this.type == 'profile') 
      this.result = this.masterProvider.filterProfile(searchText.srcElement.value)
  }

  showList() {
    (this.type == 'service') ? this.result = this.services : this.result = this.profiles;
  }
  
  private getList() {
    this.masterProvider.getServices("")
      .then((result:any)=>{
          this.services = result;
        }).catch(error=>{
          console.log(error);
      });
    
    this.masterProvider.getProfile("")
      .then((result:any)=>{
          this.profiles = result;
          this.result = result;
        }).catch(error=>{
          console.log(error);
      });
  }

}
