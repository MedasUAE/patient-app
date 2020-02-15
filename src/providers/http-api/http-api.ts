import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { urls } from "../../providers/system.constants";
/*
  Generated class for the HttpApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpApiProvider {
  headers;
  constructor(public http: Http) {
    console.log('Hello HttpApiProvider Provider');
    
    this.headers = new Headers();
    this.headers.append('Content-Type','application/json');
    this.headers.append('accept-version','1.0.0');
  }

  getConsultList(opnumber){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.consults + "/" + opnumber,{headers: this.headers})
  }

  getOffices(){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.offices, {headers: this.headers})
  }

  getConsultSummary(consultid){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.consultsummary + "/" + consultid,{headers: this.headers})
  }

  getVitalSigns(consultid){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.vitals + "/" + consultid,{headers: this.headers})
  }

  getLabOrder(opnumber){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.laborder + "/" + opnumber,{headers: this.headers})
  }

  getLabResult(consultid, officeid, profile_type, test_id){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.labresult + "?"+
      "consult_id=" + consultid + 
      "&office_id=" + officeid +
      "&profile_type=" + profile_type +
      "&test_id=" + test_id,
      {headers: this.headers})
  }

  getReportFiles(consultid){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.reportfiles + "/" + consultid,{headers: this.headers})
  }

  getDownloadFile(filename){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.download + "/" + filename,{headers: this.headers})
  }

  getDoctors(officeid){
    this.headers.set('accept-version','1.0.0');
    let url;
    if(officeid) //Branchwise doctor
      url = urls.doctors + "/" + officeid;
    else //for All doctors
      url = urls.doctors;
    return this.http.get(url,{headers: this.headers})
  }

  getDoctorSlot(doctorid, fromdate, todate){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.slots + "/" + doctorid + "/" + fromdate+ "/" + todate,{headers: this.headers})
  }

  getMyProfile(consultid){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.profile + "/" + consultid,{headers: this.headers})
  }

  getServices(officeid){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.services + "/" + officeid,{headers: this.headers})
  }

  getInsurars(){
    this.headers.set('accept-version','1.0.0');
    return this.http.get(urls.insurars,{headers: this.headers})
  }

  requestApt(doctorid, patientname, mobile, office_id){
    this.headers.set('accept-version','2.0.0');
    return this.http.get(urls.requestapt + "?doctors_id=" + doctorid + "&patient_name=" + patientname +"&mobile=" +mobile +"&office_id=" +office_id, {headers: this.headers})
  }

}
