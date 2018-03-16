import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//pages
import { HomePage } from '../home/home';
import { ShopPage } from '../shop/shop';
import { ForgePage } from '../forge/forge';
import { RankingPage } from '../ranking/ranking';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  home:any = HomePage;
  shop:any = ShopPage;
  forge:any = ForgePage;
  rank:any = RankingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
