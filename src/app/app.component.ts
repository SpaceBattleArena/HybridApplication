import { Component } from '@angular/core';
import { Platform, Events, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Pages
import { LoginPage } from '../pages/login/login';

// Providers
import { UserProvider } from '../providers/user/user';
import { AuthProvider } from '../providers/auth/auth';

//data
import { User } from '../data/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  currentUser: User;
  userInformations: any = [];

  constructor(public appCtrl: App, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events, private auth: AuthProvider, private UserProvider: UserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.initMenu();
    });
    events.subscribe('user:login', () => {
      this.initMenu();
    });
  }

  ngOnInit() {
    this.initMenu();
  }

  public initMenu() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser === null) {
      return;
    }
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

  public disconnectEvent() {
    this.auth.logout().subscribe(
      allowed => {
        if (allowed) {
          this.appCtrl.getRootNav().setRoot(LoginPage);
        }
      }
    );
  }
}
