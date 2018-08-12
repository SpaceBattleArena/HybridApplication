import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs, MenuController, Events } from 'ionic-angular';

// Providers
import { NewsProvider } from '../../providers/news/news';

// data
import { Topic } from '../../data/topic';

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage implements OnInit{
  topic: Topic = null;

  constructor(private newsProvider: NewsProvider,public navCtrl: NavController, public navParams: NavParams, public tabs: Tabs, public events: Events, private menuCtrl: MenuController) {
  }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.newsProvider.getById(this.navParams.get('id'))
      .subscribe(
      topic => {
        this.topic = topic;
        console.log(this.topic);
      });
      this.tabs.setTabbarHidden(true);
      this.events.publish('menu:hide');
      this.menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
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

}
