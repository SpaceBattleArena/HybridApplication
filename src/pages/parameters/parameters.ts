import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl:LoadingController) {
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
          this.navCtrl.setRoot(LoginPage);
          this.navCtrl.push(LoginPage);
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
}
