import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HerosDeckPage } from './heros-deck';

@NgModule({
  declarations: [
    HerosDeckPage,
  ],
  imports: [
    IonicPageModule.forChild(HerosDeckPage),
  ],
})
export class HerosDeckPageModule {}
