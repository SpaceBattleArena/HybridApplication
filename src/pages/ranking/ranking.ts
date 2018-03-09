import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { ForgePage } from '../forge/forge';

@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  // Event to access the store page
  shopEvent() {
    this.navCtrl.push(ShopPage);
  }

  // Event to access the forge page
  forgeEvent() {
    this.navCtrl.push(ForgePage);
  }

  // Event to access the home page
  homeEvent() {
    this.navCtrl.push(HomePage);
  }

  // Event to access the ranking page
  rankingEvent() {
    // this.navCtrl.push(RankingPage);
  }

}
