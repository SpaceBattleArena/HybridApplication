import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DecksListPage } from './decks-list';

@NgModule({
  declarations: [
    DecksListPage,
  ],
  imports: [
    IonicPageModule.forChild(DecksListPage),
  ],
})
export class DecksListPageModule {}
