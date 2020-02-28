import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MastersProvider } from '../../providers/masters';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
  providers: [MastersProvider]
})
export class EventsPage {
  promotions = [];

  constructor(public navCtrl: NavController, private masterProvider: MastersProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServicesPage");
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scrollPromotion").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + "px";
    this.masterProvider.getPromotions()
      .then((result:any) => {
        this.promotions = result;
      }).catch(()=>{
        console.log("error");
      })
  }
}
