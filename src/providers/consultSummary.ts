import { Injectable } from '@angular/core';
import { HttpApiProvider } from "../providers/http-api/http-api";
/*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class ConsultSummaryProvider {
  constructor(private httpApi: HttpApiProvider){}
  consultSummary(consult_id){
    let consult_Summary = {present_complaint:"",icd_desc:"",diagnosis_category:"P","type":"F"};
    return new Promise((resolve, reject) => {
      this.httpApi.getConsultSummary(consult_id)
        .subscribe((result:any)=>{
          let cs = JSON.parse(result._body)
          if(cs.data.diagnosisResult.length)
            cs.data.diagnosisResult.forEach(diagnosis => {
              consult_Summary.icd_desc = consult_Summary.icd_desc + diagnosis.icd_desc;
            });
          if(cs.data.complaintResult.length)
            cs.data.complaintResult.forEach(complaint => {
              consult_Summary.present_complaint = consult_Summary.present_complaint + complaint.present_complaint;
            });
          resolve(consult_Summary);
        },error=>{
          console.log(error);
          resolve(consult_Summary);
        })
        
    });
  }

  vitalSigns(consult_id){
    let vitalsigns = [];
    return new Promise((resolve, reject) => {
      this.httpApi.getVitalSigns(consult_id)
        .subscribe((result:any)=>{
          vitalsigns = JSON.parse(result._body).data;
          resolve(vitalsigns)
        },error=>{
          console.log(error);
          reject(vitalsigns)
        });
    });
  }

  labResults(consult_id, office_id) {
    let result = {
      labResult: [],
      radiologyResult: []
    };
    return new Promise((resolve, reject) => {
      this.httpApi.getLabResult(consult_id,office_id)
      .subscribe((response:any)=>{
        result = JSON.parse(response._body).data;
        resolve(result)
      },error=>{
        reject(result)
        console.log(error);
      });
      // this.httpApi.getVitalSigns(consult_id)
      //   .subscribe((result:any)=>{
      //     vitalsigns = JSON.parse(result._body).data;
      //     resolve(vitalsigns)
      //   },error=>{
      //     console.log(error);
      //     reject(vitalsigns)
      //   });
    });
  }

  prescription(consult_id) {
    let result = [];
    return new Promise((resolve, reject) => {
      this.httpApi.getPrescription(consult_id)
      .subscribe((response:any)=>{
        result = JSON.parse(response._body).data;
        resolve(result)
      },error=>{
        reject(result)
        console.log(error);
      });
    });
  }

  patientDetails(){
    let profile: any = localStorage.getItem('profile')
    if(!profile) return;

    profile = JSON.parse(profile);
    return { mobile: parseInt(profile.mobile), patient_name: profile.patient_name  }
  }
}
