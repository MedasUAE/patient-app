import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabOrderPage } from './laborder';

@NgModule({
  declarations: [
    LabOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(LabOrderPage),
  ],
})
export class LabOrderPageModule {}
