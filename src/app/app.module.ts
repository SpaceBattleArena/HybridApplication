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
import { CardsListPage } from '../pages/cards-list/cards-list';
import { CardPage } from '../pages/card/card';
import { DecksListPage } from '../pages/decks-list/decks-list';
import { CreateModifyDeckPage } from '../pages/create-modify-deck/create-modify-deck';

// Providers
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { NewsProvider } from '../providers/news/news';
import { CardsProvider } from '../providers/cards/cards';
import { DecksProvider } from '../providers/deck/deck';
import { HerosProvider } from '../providers/heros/heros';
import { BoosterProvider } from '../providers/booster/booster';

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
    NewsPage,
    CardsListPage,
    CardPage,
    DecksListPage,
    CreateModifyDeckPage
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
    NewsPage,
    CardsListPage,
    CardPage,
    DecksListPage,
    CreateModifyDeckPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    UserProvider,
    NewsProvider,
    CardsProvider,
    DecksProvider,
    HerosProvider,
    BoosterProvider
  ]
})
export class AppModule {}
