import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

/**
 * Generated class for the RegistrationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrations',
  templateUrl: 'registrations.html',
})
export class RegistrationsPage {
	
	name:any;
	email:any;
	mobile:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationsPage');
  }
	goHome(){
		this.navCtrl.setRoot(HomePage);
	  }
	  
	async signUP(){
		
		if(this.name==undefined)
		{
			document.getElementById('span_name').style.display='block';
			document.getElementById('span_email').style.display='none';
			document.getElementById('span_number').style.display='none';
			return;
		}
		
		if(this.email==undefined)
		{
			document.getElementById('span_email').style.display='block';
			document.getElementById('span_name').style.display='none';
			document.getElementById('span_number').style.display='none';
			return;
		}
		
		if(this.email!=undefined)
		{
		  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		  if(!re.test(this.email)) {
			document.getElementById('span_email').style.display='block';
			document.getElementById('span_name').style.display='none';
			document.getElementById('span_number').style.display='none';
			return;
		  }
		}
		 
		if(this.mobile==undefined)
		{
			document.getElementById('span_email').style.display='none';
			document.getElementById('span_name').style.display='none';
			document.getElementById('span_number').style.display='block';
			return;
		}
		console.log(this.name);
		console.log(this.email);
		console.log(this.mobile);
	}
	
}
