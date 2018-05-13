import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, MenuController, Events } from 'ionic-angular';

//data
import { Card } from '../../data/card';

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage implements OnInit {
  card: Card;

  constructor(public tabs: Tabs, public navCtrl: NavController, public navParams: NavParams, private menuCtrl: MenuController, public events: Events) {
  }

  ngOnInit() {
    this.card = this.navParams.get('card');
    console.log(this.card);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

  ionViewDidEnter() {
    this.tabs.setTabbarHidden(true);
    this.events.publish('menu:hide');
    this.menuCtrl.enable(false);
  }

}
