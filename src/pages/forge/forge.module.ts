import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgePage } from './forge';

@NgModule({
  declarations: [
    ForgePage,
  ],
  imports: [
    IonicPageModule.forChild(ForgePage),
  ],
})
export class ForgePageModule {}
