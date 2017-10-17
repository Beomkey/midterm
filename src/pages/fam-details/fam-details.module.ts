import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FamDetailsPage } from './fam-details';

@NgModule({
  declarations: [
    FamDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FamDetailsPage),
  ],
})
export class FamDetailsPageModule {}
