import { Injectable } from '@angular/core';
import { HttpApiProvider } from "./http-api/http-api";
/*
  Generated class for the MastersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MastersProvider {
  aboutus: any; 
  locations: any; 
  constructor(private httpApi: HttpApiProvider){}
  
  getAboutUs(){
    return new Promise((resolve, reject) => {
      this.httpApi.getAboutUs()
        .subscribe((result:any)=>{
          this.aboutus = JSON.parse(result._body).data;
          resolve(this.aboutus);
        },error=>{
          console.log(error);
          resolve(this.aboutus);
        })
        
    });
  }

  getLocations(){
    return new Promise((resolve, reject) => {
      this.httpApi.getLocations()
        .subscribe((result:any)=>{
          this.locations = JSON.parse(result._body).data;
          resolve(this.locations);
        },error=>{
          console.log(error);
          resolve(this.locations);
        });
    });
  }
}
