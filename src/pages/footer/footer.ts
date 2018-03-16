import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//jquery
import * as $ from 'jquery';

// Pages
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { ForgePage } from '../forge/forge';
import { RankingPage } from '../ranking/ranking';

@IonicPage()
@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html',
})
export class FooterPage implements OnInit {
  linkActive = "home";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    let currentPage = this.navCtrl.getActive().component.name;
    if (currentPage === "ForgePage") {
      this.linkActive = 'forge';
    } else if (currentPage === "ShopPage") {
      this.linkActive = 'shop';
    } else if (currentPage === "RankingPage") {
      this.linkActive = 'rank';
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FooterPage');
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
    this.navCtrl.push(RankingPage);
  }

}
