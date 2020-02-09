import { Injectable } from '@angular/core';
import { HttpApiProvider } from "./http-api/http-api";
/*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class DoctorsProvider {
  doctors: Array<any> = []; 
  insurances: Array<any> = []; 
  constructor(private httpApi: HttpApiProvider){}
  
  getDoctors(office_id){
    return new Promise((resolve, reject) => {
      this.httpApi.getDoctors("")
        .subscribe((result:any)=>{
          this.doctors = JSON.parse(result._body).data;
          resolve(this.doctors);
        },error=>{
          console.log(error);
          resolve(this.doctors);
        })
        
    });
  }

  getOffices(){
    let offices = [];
    return new Promise((resolve, reject) => {
      this.httpApi.getOffices()
        .subscribe((result:any)=>{
          offices = JSON.parse(result._body).data;
          resolve(offices);
        },error=>{
          console.log(error);
          resolve(offices);
        });
    });
  }

  getInsurances(){
    return new Promise((resolve, reject) => {
      this.httpApi.getInsurars()
        .subscribe((result:any)=>{
            this.insurances = JSON.parse(result._body).data;
            resolve(this.insurances)
          },error=>{
            console.log(error);
            resolve(this.insurances)
          });
    })
  }

  filterDoctors(office_id){
    return this.doctors.filter((doctor:any)=>(doctor.office_Id == office_id))
  }

  filterOffices(office_id){
    return this.insurances.filter((insurance:any)=>(insurance.office_id == office_id))
  }

  requestApt(doctors_id, patient_name, mobile, office_id){
    return new Promise((resolve, reject)=>{
      this.httpApi.requestApt(doctors_id,patient_name, mobile, office_id)
      .subscribe(result=>{
          resolve(result)
      },error=>{
        console.log(error);
        reject(error)
      })
    });
  }
}
