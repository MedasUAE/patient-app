import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { DoctorsProvider } from '../../providers/doctors';
// import { HttpApiProvider } from '../../providers/http-api/http-api';


/**
 * Generated class for the InsurancesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insurances',
  templateUrl: 'insurances.html',
  providers: [DoctorsProvider]
})
export class InsurancesPage {
  insurances;
  offices;
  constructor(private doctorProvider: DoctorsProvider) {}

  ionViewDidLoad() {
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    document.getElementById("scroll").style.height = window.innerHeight - document.getElementsByClassName("fullCard")[0].clientHeight - document.getElementsByName("officeSelect")[0].clientHeight + "px";
    
    this.doctorProvider.getInsurances()
      .then((result:any)=>{
        this.insurances = result;
      },error=>{
        console.log(error);
      })
    
    this.doctorProvider.getOffices()
      .then((result:any)=>{
        this.offices = result;
      },error=>{
        console.log(error);
      });
  }

  onChangeOffice(office){
    this.insurances = this.doctorProvider.filterOffices(office.office_Id);
  }

}
