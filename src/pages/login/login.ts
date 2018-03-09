import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage } from 'ionic-angular';

// Pages
import { HomePage } from '../home/home';
import { SubscribePage } from '../subscribe/subscribe';
// Providers
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(private nav: NavController, private auth: AuthProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.setRoot(HomePage);
      } else {
        this.showError("L'email et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers. Veuillez vérifier et réessayer.");
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

  registrationEvent() {
        this.nav.push(SubscribePage);
    }
}
