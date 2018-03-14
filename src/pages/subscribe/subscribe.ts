import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';

// Pages
import { LoginPage } from '../login/login';
// Providers
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-subscribe',
  templateUrl: 'subscribe.html',
})
export class SubscribePage {
  loading: Loading;
  registerCredentials = { username: '', email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubscribePage');
  }

  public subscribe() {
    this.showLoading();
    this.auth.register(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.setRoot(LoginPage);
      } else {
        this.showError("");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Veuillez patienter...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Identifiants incorrects',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  showErrorForgottenId() {
    let alert = this.alertCtrl.create({
      title: 'Identifiants oubliés',
      subTitle: 'Veuillez renseignez votre adresse email',
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
