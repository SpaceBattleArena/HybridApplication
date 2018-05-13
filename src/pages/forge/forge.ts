import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

// Pages
import { CardsListPage } from '../cards-list/cards-list';
import { DecksListPage } from '../decks-list/decks-list';

@Component({
  selector: 'page-forge',
  templateUrl: 'forge.html',
})
export class ForgePage implements OnInit {
  cardsPage = CardsListPage;
  decksPage = DecksListPage;

  constructor(public tabs: Tabs, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgePage');
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.tabs.setTabbarHidden(false);
  }

}
