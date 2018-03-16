import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  topic: Topic;

  constructor(private newsProvider: NewsProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.newsProvider.getById(this.navParams.get('id'))
      .subscribe(
      topic => {
        this.topic = topic;
        console.log(this.topic);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
