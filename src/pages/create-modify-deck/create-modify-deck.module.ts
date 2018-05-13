import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateModifyDeckPage } from './create-modify-deck';

@NgModule({
  declarations: [
    CreateModifyDeckPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateModifyDeckPage),
  ],
})
export class CreateModifyDeckPageModule {}
