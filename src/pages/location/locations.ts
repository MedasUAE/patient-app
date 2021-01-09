import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';

import { MastersProvider } from '../../providers/masters';
import { InAppBrowser } from "@ionic-native/in-app-browser";

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'locations.html',
  providers: [MastersProvider]
})
export class LocationsPage {
  locations: any;
  constructor(private  masterProvider: MastersProvider,private iab: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
    this.masterProvider.getLocations()
      .then((result:any) => {
        this.locations = result;
      })
  }

  openmap(url){
    this.iab.create(url, '_system');
  }
}
