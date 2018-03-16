import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Pages
import { ParametersPage } from '../parameters/parameters';

// Providers
import { HomeProvider } from '../../providers/home/home';
import { UserProvider } from '../../providers/user/user';

// data
import { Topic } from '../../data/topic';
import { User } from '../../data/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isReadonly() {
    return this.isReadonly;   //return true/false
  }

  public topics: Topic[];
  public currentUser: User;

  constructor(
    private HomeProvider: HomeProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  // Event to access the parameters page
  parametersEvent() {
    this.navCtrl.push(ParametersPage);
  }

  // Event to access the detail of the clicked topic
  topicEvent() {
    console.log('ionViewDidLoad TopicPage');
  }

  // When the page is loaded, the data are updated
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.HomeProvider.getAll()
      .subscribe(
      topics => {
        this.topics = topics;
        console.log(this.topics);
      });
  }
}
