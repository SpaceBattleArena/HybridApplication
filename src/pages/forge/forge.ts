import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//jquery
import * as $ from 'jquery';

@Component({
  selector: 'page-forge',
  templateUrl: 'forge.html',
})
export class ForgePage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgePage');
      console.log(document.getElementById('footer-forge'));
      $('#footer-forge').addClass("active");
      console.log(document.getElementById('footer-forge'));
  }

}
