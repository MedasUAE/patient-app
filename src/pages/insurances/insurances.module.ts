import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InsurancesPage } from './insurances';

@NgModule({
  declarations: [
    InsurancesPage,
  ],
  imports: [
    IonicPageModule.forChild(InsurancesPage),
  ],
})
export class InsurancesPageModule {}
