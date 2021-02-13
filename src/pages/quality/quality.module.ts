import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QualityPage } from './quality';

@NgModule({
  declarations: [
    QualityPage,
  ],
  imports: [
    IonicPageModule.forChild(QualityPage),
  ],
})
export class QualityPageModule {}
