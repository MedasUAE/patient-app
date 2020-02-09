import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoctorDetailsPage } from './doctor-details';

@NgModule({
  declarations: [
    DoctorDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DoctorDetailsPage),
  ],
})
export class DoctorDetailsPageModule {}
