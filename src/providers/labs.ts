import { Injectable } from '@angular/core';
import { HttpApiProvider } from "./http-api/http-api";
/*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class LabProvider {
  constructor(private httpApi: HttpApiProvider){}

  reportFile(consult_id) {
    let result = [];
    return new Promise(resolve => {
      this.httpApi.getReportFiles(consult_id)
        .subscribe((response:any) => {
          result = JSON.parse(response._body).data;
          resolve(result)
        },error=>{
          resolve(result)
          console.log(error);
        })

    });
  }

  download(file_name) {
    return new Promise(resolve => {
      this.httpApi.getDownloadFile(file_name)
        .subscribe((response:any) => {
          resolve(response)
        },error=>{
          resolve()
          console.log(error);
        })

    });
  }

  labOrder(op_number) {
    let result = [];
    return new Promise(resolve => {
      this.httpApi.getLabOrder(op_number)
        .subscribe((response:any) => {
          result = JSON.parse(response._body).data;
          resolve(result)
        },error=>{
          resolve(result)
          console.log(error);
        })

    });
  }

  labResults(consult_id, office_id, profile_type, test_id) {
    let result = {
      labResult: [],
      radiologyResult: []
    };
    return new Promise((resolve, reject) => {
      this.httpApi.getLabResult(consult_id,office_id, profile_type, test_id)
      .subscribe((response:any)=>{
        result = JSON.parse(response._body).data;
        resolve(result)
      },error=>{
        reject(result)
        console.log(error);
      });
    });
  }
}
