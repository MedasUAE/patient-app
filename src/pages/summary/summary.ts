import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ConsultSummaryProvider } from '../../providers/consultSummary'

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
  providers: [ConsultSummaryProvider]
})
export class SummaryPage {
  workbench = 'casesheet';
  consult_id;office_id;doctor_name;
  vitalsigns = [{"name":"","parameters":[{"name":"BP(Systolic)","value":"120","unit":"mmHg","range":"110-120","abnormal":false},{"name":"BP(Diastolic)","value":"90","unit":"mmHg","range":"70-80","abnormal":true},{"name":"Pulse","value":"77","unit":"BPM","range":"60-100","abnormal":false},{"name":"Height","value":"145","unit":"cm","range":"-","abnormal":false},{"name":"Weight","value":"69","unit":"kg","range":"-","abnormal":false},{"name":"BMI","value":"24.7","unit":"-","range":"18.5-24.9","abnormal":false},{"name":"Temp","value":"98.4","unit":"C","range":"-","abnormal":false}]}];
  labresult = [{"name":"LIPID PROFILE","parameters":[{"name":"LDL","value":"150","unit":"mg/dL","range":"100-169","abnormal":false},{"name":"HDL","value":"75","unit":"mg/dL","range":"40-59","abnormal":true},{"name":"Total Cholesterol","value":"250","unit":"mg/dL","range":"200-239","abnormal":true},{"name":"Triglycerides","value":"303","unit":"mg/dL","range":"150-499","abnormal":false}]},{"name":"URINE ANALYSIS","parameters":[{"name":"Pus cells","value":"4.33","unit":"/HPF","range":"0-5","abnormal":true},{"name":"Protein","value":"Negative","unit":"-","range":"Negative","abnormal":false},{"name":"RBCs","value":"1.74","unit":"/HPF","range":"0-2","abnormal":false},{"name":"Bacteria","value":"Absent","unit":"/HPF","range":"Absent","abnormal":false},{"name":"Glucose","value":"Trace","unit":"-","range":"Negative","abnormal":false}]}]
  radiologyresult = [];
  consultsummary = {"present_complaint":"-","icd_desc":"-","diagnosis_category":"P","type":"F"};
  load:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private consultSummary: ConsultSummaryProvider,
      public loader: LoadingController) {
        this.consult_id = this.navParams.get('consult_id');
        this.office_id = this.navParams.get('office_id');
        this.doctor_name = this.navParams.get('doctor_name');
      }

  ionViewDidLoad() {
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    
    document.getElementById("scroll").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + "px";
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Details!'});
    this.load.present()
      .then(()=>{
        this.consultSummary.consultSummary(this.consult_id)
          .then( (result:any) => {
            this.consultsummary.present_complaint = result.present_complaint;
            this.consultsummary.icd_desc = result.icd_desc;
            this.load.dismiss();
          })
          .catch(error=>{})
        this.consultSummary.vitalSigns(this.consult_id)
          .then((result:any) => {
            
            this.vitalsigns = result;
            console.log(result);
            // this.load.dismiss();
          })
          .catch(error=>{});  
        this.consultSummary.labResults(this.consult_id,this.office_id)
          .then((result:any) => {
            this.labresult = result.labResult;
            this.radiologyresult = result.radiologyResult;
          })       
      })
      .catch(error=>{})
  }

}
