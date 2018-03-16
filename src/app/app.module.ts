import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
// Pages
import { MainPage } from '../pages/main/main';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SubscribePage } from '../pages/subscribe/subscribe';
import { ParametersPage } from '../pages/parameters/parameters';
import { ShopPage } from '../pages/shop/shop';
import { ForgePage } from '../pages/forge/forge';
import { RankingPage } from '../pages/ranking/ranking';
import { ModifyProfilePage } from '../pages/modify-profile/modify-profile';
import { NewsPage } from '../pages/news/news';

// Providers
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    HomePage,
    SubscribePage,
    ParametersPage,
    ShopPage,
    ForgePage,
    RankingPage,
    ModifyProfilePage,
    NewsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    HomePage,
    SubscribePage,
    ParametersPage,
    ShopPage,
    ForgePage,
    RankingPage,
    ModifyProfilePage,
    NewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    NewsProvider
  ]
})
export class AppModule {}
