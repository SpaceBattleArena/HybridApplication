import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, Events, MenuController } from 'ionic-angular';

// Pages
import { MainPage } from '../main/main';
import { SubscribePage } from '../subscribe/subscribe';
// Providers
import { AuthProvider } from '../../providers/auth/auth';
import { UserProvider } from '../../providers/user/user';
// Model
import { User } from '../../data/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  currentUser: User;

  constructor(private nav: NavController, private auth: AuthProvider, public events: Events, private menuCtrl: MenuController, private userProvider: UserProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser != null) {
      this.getInformations();
    }
  }

  private getInformations() {
    if (this.currentUser.token != undefined && this.currentUser.token != null && this.currentUser.token != "") {
      this.userProvider.getInformationsAccess(this.currentUser.token)
        .subscribe(
          allowed => {
            if (allowed) {
              this.nav.setRoot(MainPage);
            } else {
              this.registerCredentials.email = this.currentUser.email;
            }
          },
          error => {
            this.showError("You have been disconnect. Please reconnect to access to your profile");
          }
        );
    } else {
      this.registerCredentials.email = this.currentUser.email;
    }
  }

  public login() {
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.events.publish('user:login');
        this.nav.setRoot(MainPage);
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

  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
