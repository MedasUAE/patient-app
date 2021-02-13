import { Injectable } from '@angular/core';
import { HttpApiProvider } from "./http-api/http-api";
import { LoadingController } from 'ionic-angular';
/*
  Generated class for the MastersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MastersProvider {
  aboutus: any; 
  locations: any; 
  promotions: any;
  services = [];
  profiles = [];
  load: any;
  constructor(private httpApi: HttpApiProvider, private loader: LoadingController){
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Details!'});
  }
  
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

  getPromotions(){
    this.load.present()
    return new Promise((resolve, reject) => {
      this.httpApi.getPromotions()
        .subscribe((result:any)=>{
          this.promotions = JSON.parse(result._body).data;
          resolve(this.promotions);
          this.load.dismiss();
        },error=>{
          resolve(this.promotions);
          this.load.dismiss();
        });
    });
  }

  getServices(office_id){
    this.load.present()
    return new Promise((resolve, reject) => {
      this.httpApi.getServices(office_id,'service')
        .subscribe((result:any)=>{
            this.services = JSON.parse(result._body).data;
            resolve(this.services)
          },error=>{
            resolve(this.services);
          });
    })
  }

  getProfile(office_id){
    this.load.present()
    return new Promise((resolve, reject) => {
      this.httpApi.getServices(office_id,'profile')
        .subscribe((result:any)=>{
            this.profiles = JSON.parse(result._body).data;
            resolve(this.profiles)
            this.load.dismiss();
          },error=>{
            resolve(this.profiles);
            this.load.dismiss();
          });
    })
  }

  filterService(name){
    if(!name) return this.services;
    return this.services.filter((service:any)=>(service.name.toLowerCase().indexOf(name.toLowerCase()) >= 0))
  }

  filterProfile(name){
    if(!name) return this.profiles;
    return this.profiles.filter((profile:any)=>(profile.name.toLowerCase().indexOf(name.toLowerCase()) >= 0))
  }
} 
