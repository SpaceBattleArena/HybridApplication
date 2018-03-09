import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { HomePage } from '../home/home';
import { RankingPage } from '../ranking/ranking';
import { ForgePage } from '../forge/forge';

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  // Event to access the store page
  shopEvent() {
    // this.navCtrl.push(ShopPage);
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
    this.navCtrl.push(RankingPage);
  }
}
