import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, MenuController, Events } from 'ionic-angular';

//Page
import { CreateModifyDeckPage } from '../create-modify-deck/create-modify-deck';

// Providers
import { DecksProvider } from '../../providers/deck/deck';
import { HerosProvider } from '../../providers/heros/heros';

//data
import { User } from '../../data/user';
import { Deck } from '../../data/deck';
import { Hero } from '../../data/hero';

@IonicPage()
@Component({
  selector: 'page-decks-list',
  templateUrl: 'decks-list.html',
})
export class DecksListPage implements OnInit {
  private currentUser: User;
  public decks: Deck[] = [];
  public createModifyPush = CreateModifyDeckPage;
  public ModifyParams: any[] = [];
  public createParams: any [] = [];
  public herosDeck: any[] = [];
  public heros: Hero[] = [];

  constructor(public deckProvider: DecksProvider, public navCtrl: NavController, public navParams: NavParams, public events: Events, private menuCtrl: MenuController, public tabs: Tabs, private herosProvider: HerosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DecksListPage');
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //to modify -----------------------------
    this.heros = this.herosProvider.getAll();
    //---------------------------------------
    if (this.currentUser != null) {
      this.getDecks();
    }
    for (let i = 0; i < this.heros.length; i += 1) {
      this.createParams.push({deck: null, hero: this.heros[i]});
    }
  }

  ionViewDidEnter() {
    this.tabs.setTabbarHidden(true);
    this.events.publish('menu:hide');
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.tabs.setTabbarHidden(false);
    this.events.publish('menu:display');
    this.menuCtrl.enable(true);
  }

  private getDecks() {
    if (this.currentUser.token != undefined && this.currentUser.token != null && this.currentUser.token != "") {
      this.deckProvider.getByUserId(this.currentUser.token)
        .subscribe(
          results => {
            this.decks = results;
            for (let i = 0; i < this.heros.length; i += 1) {
              this.herosDeck.push({
                  hero: this.heros[i],
                  decks: []
                });
            }
            for (let i = 0; i < this.decks.length; i += 1) {
              for (let j = 0; j < this.herosDeck.length; j += 1) {
                if (this.herosDeck[j].hero.ID === this.decks[i].Hero_id) {
                  this.herosDeck[j].decks.push(this.decks[i]);
                  this.ModifyParams.push({deck: this.decks[i], hero: this.herosDeck[j].hero});
                }
              }
            }
          },
          error => {
            console.log(error);
          }
        );
    } else {
      console.log('no current user');
    }
  }

}
