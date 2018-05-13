import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

// Pages
import { ParametersPage } from '../parameters/parameters';
import { NewsPage } from '../news/news';

// Providers
import { UserProvider } from '../../providers/user/user';
import { NewsProvider } from '../../providers/news/news';

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
  public pushNews = NewsPage;
  public params = [];
  public userInformations: any = [];

  constructor(
    private NewsProvider: NewsProvider,
    private UserProvider: UserProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {
  }

  // Event to access the parameters page
  parametersEvent() {
    this.navCtrl.push(ParametersPage);
  }

  // When the page is loaded, the data are updated
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.NewsProvider.getAll()
      .subscribe(
      topics => {
        this.topics = topics;
        this.topics.reverse();
        for (let i = 0; i < this.topics.length; i++) {
          this.params.push({'id':this.topics[i].ID});
        }
      });
    this.UserProvider.getInformations(this.currentUser.token)
        .subscribe(
          userInformations => {
            this.userInformations = userInformations;
          },
          error => {
            console.log(error);
          }
        );
  }
}
