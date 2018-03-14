import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';
import * as EmailValidator from 'email-validator';

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
    if (EmailValidator.validate(this.registerCredentials.email)) {
      let reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
      if (reg.test(this.registerCredentials.password)) {
        this.auth.register(this.registerCredentials).subscribe(allowed => {
          if (allowed) {
            this.nav.setRoot(LoginPage);
          } else {
            this.showError("Email address or username are already taken");
          }
        },
          error => {
            this.showError(error);
          });
      } else {
        this.showError("Your password must contains minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
      }
    } else {
      this.showError("Email address is not valid");
    }
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
