import { Component } from '@angular/core';
import { App, LoadingController, IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { ModifyProfilePage } from '../modify-profile/modify-profile';
import { LoginPage } from '../login/login';

// Providers
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-parameters',
  templateUrl: 'parameters.html',
})
export class ParametersPage {

  constructor(public appCtrl: App, public tabs: Tabs, public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametersPage');
  }

  // Event to access the modification of the profile
  modifyProfileEvent() {
    this.navCtrl.push(ModifyProfilePage);
  }

  // Event to disconnect
  disconnectEvent() {
    this.auth.logout().subscribe(
      allowed => {
        if (allowed) {
          this.appCtrl.getRootNav().setRoot(LoginPage);
        }
      }
    );
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Veuillez patienter...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
    this.disconnectEvent();
  }

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.tabs.setTabbarHidden(true);
  }

  ionViewWillLeave() {
    // enable the root left menu when leaving the tutorial page
    this.tabs.setTabbarHidden(false);
  }
}
