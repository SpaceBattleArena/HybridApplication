import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { ParametersPage } from '../parameters/parameters';
import { ShopPage } from '../shop/shop';
import { ForgePage } from '../forge/forge';
import { RankingPage } from '../ranking/ranking';

// Providers
import { HomeProvider } from '../../providers/home/home';

// data
import { Topic } from '../../data/topic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  public topics: Topic[];

  constructor(
    private HomeProvider: HomeProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  // Event to access the parameters page
  parametersEvent() {
    this.navCtrl.push(ParametersPage);
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
    // this.navCtrl.push(HomePage);
  }

  // Event to access the ranking page
  rankingEvent() {
    this.navCtrl.push(RankingPage);
  }

  // Event to access the detail of the clicked topic
  topicEvent() {
    console.log('ionViewDidLoad TopicPage');
  }

  // When the page is loaded, the data are updated
  ngOnInit(): void {
    this.HomeProvider.getTopic()
      .then(
      topics => {
        this.topics = topics;
      });
  }
}
