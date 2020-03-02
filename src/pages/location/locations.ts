import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { MastersProvider } from '../../providers/masters'
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
  LOCATION: string;
  constructor(
    public translate: TranslateService, 
    private  masterProvider: MastersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
    this._initialiseTranslation()
    this.masterProvider.getLocations()
      .then((result:any) => {
        this.locations = result;
      })
  }

  openmap(url){
    window.open(url)
  }

  private _initialiseTranslation() : void
  {
    this.LOCATION = this.translate.instant("LOCATION");
  }


}
