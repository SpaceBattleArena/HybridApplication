import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';

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
  public isDisplayed: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public events: Events) {
    events.subscribe('menu:hide', () => {
      this.isDisplayed = false;
    });
    events.subscribe('menu:display', () => {
      this.isDisplayed = true;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  public openMenu() {
    this.menuCtrl.open();
  }

  public closeMenu() {
    this.menuCtrl.close();
  }

}
