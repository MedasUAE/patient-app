import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { LoadingController } from 'ionic-angular';
import { LabProvider } from '../../providers/labs';
import { urls } from "../../providers/system.constants";
/**
 * Generated class for the LabResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-labresult',
  templateUrl: 'labresult.html',
  providers: [LabProvider, FileTransfer, File, FileOpener]
})
export class LabResultPage {
  workbench = 'lab';
  consult_id;
  office_id;
  test_name;
  test_id;
  profile_type;
  labresult = [{"name":"LIPID PROFILE","parameters":[{"name":"LDL","value":"150","unit":"mg/dL","range":"100-169","abnormal":false},{"name":"HDL","value":"75","unit":"mg/dL","range":"40-59","abnormal":true},{"name":"Total Cholesterol","value":"250","unit":"mg/dL","range":"200-239","abnormal":true},{"name":"Triglycerides","value":"303","unit":"mg/dL","range":"150-499","abnormal":false}]},{"name":"URINE ANALYSIS","parameters":[{"name":"Pus cells","value":"4.33","unit":"/HPF","range":"0-5","abnormal":true},{"name":"Protein","value":"Negative","unit":"-","range":"Negative","abnormal":false},{"name":"RBCs","value":"1.74","unit":"/HPF","range":"0-2","abnormal":false},{"name":"Bacteria","value":"Absent","unit":"/HPF","range":"Absent","abnormal":false},{"name":"Glucose","value":"Trace","unit":"-","range":"Negative","abnormal":false}]}]
  radiologyresult = [];
  reportfiles = [];
  load:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private labProvider: LabProvider,
      private transfer: FileTransfer, 
      private fileOpener: FileOpener,
      private file: File,
      public loader: LoadingController) {
        this.consult_id = this.navParams.get('consult_id');
        this.office_id = this.navParams.get('office_id');
        this.profile_type = this.navParams.get('profile_type');
        this.test_name = this.navParams.get('test_Name');
        this.test_id = this.navParams.get('labtest_id');
      }

  ionViewDidLoad() {
    const toolbars = document.getElementsByClassName('toolbar');
    let height = 0;
    for (let index = 0; index < toolbars.length; index++) {
      if(toolbars[index].clientHeight > 0 || toolbars[index].clientHeight > height)
      height = toolbars[index].clientHeight;
    }
    
    document.getElementById("scrollResult").style.height = window.innerHeight - height - document.getElementsByClassName("fullCard")[0].clientHeight + "px";
    this.load = this.loader.create({spinner: 'dots',content : 'Loading Details!'});
    this.load.present()
      .then(()=>{
        this.labProvider.labResults(this.consult_id,this.office_id, this.profile_type, this.test_id)
          .then((result:any) => {
            this.labresult = result.labResult;
            this.radiologyresult = result.radiologyResult;
            this.load.dismiss();
          });

        this.labProvider.reportFile(this.consult_id)
          .then((result:any) => {
            this.reportfiles = result;
          })      
      })
      .catch(error=>{})
  }

  

  download(file) {
    console.log(file);
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = urls.download + "/" + file.fileName;
    
    fileTransfer.download(url, this.file.dataDirectory + file.fileName).then((entry) => {
      this.fileOpener.open(entry.toURL(), 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
      }, (error) => {
        console.log(error);
        // handle error
    });
  }

}
