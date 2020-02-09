import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultlistPage } from './consultlist';

@NgModule({
  declarations: [
    ConsultlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultlistPage),
  ],
})
export class ConsultlistPageModule {}
