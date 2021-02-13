import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { RegistrationsPage } from '../../pages/registrations/registrations';
import { urls } from "../../providers/system.constants";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username:string;
  password:string;
  error:string;
  load:any;
  header: any;
  constructor(
    public navCtrl: NavController, 
    public http: Http,
    public loader: LoadingController) {

      this.header = new Headers();
      this.header.append('Content-Type','application/json');
      this.header.append('accept-version','2.0.0');
  }
  formSubmit(){
    if(this.username && this.password) this.loginApi();
    
  }

  loginApi(){
    if(!this.username && !this.password) return;
    const postData = {
      username: this.username,
      password: this.password
    }
    
    this.load = this.loader.create({
      spinner: 'dots',
      content : 'Please Wait ..'
    });
    this.load.present()
      .then(()=>{
        this.apiCall(postData);
      })
    
  }

  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goRegister(){
    this.navCtrl.setRoot(RegistrationsPage);
  }


  apiCall(postData){
    // console.log(urls.login);
    this.http.post(urls.login, postData,{headers: this.header}) 
    .subscribe((res:any)=>{
      const result = JSON.parse(res._body)
      localStorage.setItem('profile', JSON.stringify(result.data));
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('op_number', result.data.op_number);
      this.load.dismiss();
      this.navCtrl.setRoot(HomePage);
    },error=>{
      //this.navCtrl.setRoot(HomePage);
      this.error = "Please check username/password"
      this.load.dismiss();
    })
  }
}
