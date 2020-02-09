import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LongHeaderPage } from './long-header';

@NgModule({
  declarations: [
    LongHeaderPage,
  ],
  imports: [
    IonicPageModule.forChild(LongHeaderPage),
  ],
})
export class LongHeaderPageModule {}
