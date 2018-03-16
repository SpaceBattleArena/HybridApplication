webpackJsonp([6],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsProvider = (function () {
    function NewsProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/';
    }
    NewsProvider.prototype.getAll = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.apiUrl + "article/getAll")
                .toPromise()
                .then(function (res) {
                var results = res.json();
                if (results['results'] != undefined) {
                    results = results['results'];
                }
                if (results['data'] != undefined) {
                    observer.next(results['data']);
                }
                else {
                    observer.next([]);
                }
                observer.complete();
            });
        });
    };
    NewsProvider.prototype.getById = function (id) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.apiUrl + "article/getById/" + id.toString())
                .toPromise()
                .then(function (res) {
                var results = res.json();
                if (results['results'] != undefined) {
                    results = results['results'];
                }
                if (results['data'] != undefined) {
                    observer.next(results['data'][0]);
                }
                else {
                    observer.next([]);
                }
                observer.complete();
            });
        });
    };
    return NewsProvider;
}());
NewsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], NewsProvider);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserProvider = (function () {
    function UserProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/';
    }
    UserProvider.prototype.getInformationsAccess = function (token) {
        var _this = this;
        if (token === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("An Error occured when reconnecting");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var access = false;
                var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                add_headers.append('Authorization', token);
                add_headers.append('Accept', 'application/json');
                add_headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
                add_headers.append('Access-Control-Allow-Origin', '*');
                add_headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: add_headers });
                _this.http.get(_this.apiUrl + "player/getInformation", options)
                    .toPromise()
                    .then(function (res) {
                    var results = res.json();
                    if (results['results'] != null) {
                        results = results['results'];
                        if (results['status'] === 200) {
                            access = true;
                        }
                    }
                    observer.next(access);
                    observer.complete();
                }, function (error) {
                    console.log(error);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    UserProvider.prototype.getInformations = function (token) {
        var _this = this;
        if (token === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("An Error occured when reconnecting");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                add_headers.append('Authorization', token);
                add_headers.append('Accept', 'application/json');
                add_headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
                add_headers.append('Access-Control-Allow-Origin', '*');
                add_headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
                var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: add_headers });
                _this.http.get(_this.apiUrl + "player/getInformation", options)
                    .toPromise()
                    .then(function (res) {
                    var results = res.json();
                    if (results['results'] != null) {
                        results = results['results'];
                        if (results['status'] === 200) {
                            observer.next(results['data'][0]);
                        }
                        else {
                            observer.next([]);
                        }
                    }
                    observer.complete();
                }, function (error) {
                    console.log(error);
                    observer.next([]);
                    observer.complete();
                });
            });
        }
    };
    return UserProvider;
}());
UserProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], UserProvider);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_shop__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forge_forge__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//pages




var MainPage = (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.shop = __WEBPACK_IMPORTED_MODULE_3__shop_shop__["a" /* ShopPage */];
        this.forge = __WEBPACK_IMPORTED_MODULE_4__forge_forge__["a" /* ForgePage */];
        this.rank = __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__["a" /* RankingPage */];
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/main/main.html"*/'<ion-tabs class="tabs-icon">\n    <ion-tab tabIcon="home" [root]="home"></ion-tab>\n    <ion-tab tabIcon="hammer" [root]="forge"></ion-tab>\n    <ion-tab tabIcon="cart" [root]="shop"></ion-tab>\n    <ion-tab tabIcon="podium" [root]="rank"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modify_profile_modify_profile__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Providers

var ParametersPage = (function () {
    function ParametersPage(appCtrl, tabs, auth, navCtrl, navParams, loadingCtrl) {
        this.appCtrl = appCtrl;
        this.tabs = tabs;
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
    }
    ParametersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParametersPage');
    };
    // Event to access the modification of the profile
    ParametersPage.prototype.modifyProfileEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__modify_profile_modify_profile__["a" /* ModifyProfilePage */]);
    };
    // Event to disconnect
    ParametersPage.prototype.disconnectEvent = function () {
        var _this = this;
        this.auth.logout().subscribe(function (allowed) {
            if (allowed) {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
        });
    };
    ParametersPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Veuillez patienter...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
        this.disconnectEvent();
    };
    ParametersPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.tabs.setTabbarHidden(true);
    };
    ParametersPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.tabs.setTabbarHidden(false);
    };
    return ParametersPage;
}());
ParametersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-parameters',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/parameters/parameters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Réglages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg">\n  <ion-list inset>\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n    </ion-item>\n\n    <button margin-top ion-button (tap)="modifyProfileEvent()" full color="white">Modifier profil</button>\n\n    <button margin-top ion-button full color="white">Centre de connaissance</button>\n    <button ion-button full color="white">Aide & Assistance</button>\n    <button ion-button full color="white">Contactez-nous</button>\n\n    <button margin-top ion-button full color="white">Conditions d\'utilisation</button>\n    <button ion-button full color="white">Politique de confidentialité</button>\n    <button ion-button full color="white">Mentions légales</button>\n    <button ion-button full color="white">Remerciements</button>\n\n    <button margin-top ion-button (tap)="presentLoading()" full color="white">Se déconnecter</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/parameters/parameters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], ParametersPage);

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModifyProfilePage = (function () {
    function ModifyProfilePage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ModifyProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModifyProfilePage');
    };
    ModifyProfilePage.prototype.showPromptUsername = function () {
        var prompt = this.alertCtrl.create({
            title: 'Nom d\'utilisateur',
            message: "Entrez un nouveau nom d'utilisateur",
            inputs: [
                {
                    name: 'username',
                    placeholder: 'Nom d\'utilisateur'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sauvegarder',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ModifyProfilePage.prototype.showPromptEmail = function () {
        var prompt = this.alertCtrl.create({
            title: 'E-mail',
            message: "Entrez une nouvelle addresse e-mail",
            inputs: [
                {
                    name: 'username',
                    placeholder: 'E-mail'
                },
            ],
            buttons: [
                {
                    text: 'Annuler',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Sauvegarder',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return ModifyProfilePage;
}());
ModifyProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modify-profile',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/modify-profile/modify-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Modifier Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n<ion-list>\n  <ion-item>\n    <ion-label (tap)="showPromptUsername()">Jdoe</ion-label>\n  </ion-item>\n  <ion-item margin-top>\n    <ion-label (tap)="showPromptEmail()">jdoe@gmail.com</ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/modify-profile/modify-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModifyProfilePage);

//# sourceMappingURL=modify-profile.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_news_news__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Providers

var NewsPage = (function () {
    function NewsPage(newsProvider, navCtrl, navParams) {
        this.newsProvider = newsProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewsPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.navParams.get('id'));
        this.newsProvider.getById(this.navParams.get('id'))
            .subscribe(function (topic) {
            _this.topic = topic;
            console.log(_this.topic);
        });
    };
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    return NewsPage;
}());
NewsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-news',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/news/news.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>news</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/news/news.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_news_news__["a" /* NewsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_email_validator__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Pages

// Providers

var SubscribePage = (function () {
    function SubscribePage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { username: '', email: '', password: '' };
    }
    SubscribePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribePage');
    };
    SubscribePage.prototype.subscribe = function () {
        var _this = this;
        this.showLoading();
        if (__WEBPACK_IMPORTED_MODULE_2_email_validator__["validate"](this.registerCredentials.email)) {
            var reg = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$");
            if (reg.test(this.registerCredentials.password)) {
                this.auth.register(this.registerCredentials).subscribe(function (allowed) {
                    if (allowed) {
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                    }
                    else {
                        _this.showError("Email address or username are already taken");
                    }
                }, function (error) {
                    _this.showError(error);
                });
            }
            else {
                this.showError("Your password must contains minimum eight characters, at least one uppercase letter, one lowercase letter and one number");
            }
        }
        else {
            this.showError("Email address is not valid");
        }
    };
    SubscribePage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Veuillez patienter...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    SubscribePage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Identifiants incorrects',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    SubscribePage.prototype.showErrorForgottenId = function () {
        var alert = this.alertCtrl.create({
            title: 'Identifiants oubliés',
            subTitle: 'Veuillez renseignez votre adresse email',
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    return SubscribePage;
}());
SubscribePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subscribe',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/subscribe/subscribe.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Inscription</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg">\n    <ion-card>\n        <ion-card-header>\n            Space Battle Arena\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <form #registerForm="ngForm" (ngSubmit)="subscribe(registerForm.form.value)" novalidate>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Nom d\'utilisateur" name="username" [(ngModel)]="registerCredentials.username" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="password" placeholder="Mot de passe" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                    </ion-item>\n                    <button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Inscription</button>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/subscribe/subscribe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SubscribePage);

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		583,
		5
	],
	"../pages/main/main.module": [
		584,
		4
	],
	"../pages/modify-profile/modify-profile.module": [
		585,
		3
	],
	"../pages/news/news.module": [
		586,
		2
	],
	"../pages/parameters/parameters.module": [
		587,
		1
	],
	"../pages/subscribe/subscribe.module": [
		588,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameters_parameters__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_news_news__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Pages


// Providers


var HomePage = (function () {
    function HomePage(NewsProvider, UserProvider, navCtrl, navParams) {
        this.NewsProvider = NewsProvider;
        this.UserProvider = UserProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pushNews = __WEBPACK_IMPORTED_MODULE_3__news_news__["a" /* NewsPage */];
        this.params = [];
        this.userInformations = [];
    }
    HomePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false
    };
    // Event to access the parameters page
    HomePage.prototype.parametersEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__parameters_parameters__["a" /* ParametersPage */]);
    };
    // When the page is loaded, the data are updated
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.NewsProvider.getAll()
            .subscribe(function (topics) {
            _this.topics = topics;
            for (var i = 0; i < _this.topics.length; i++) {
                _this.params.push({ 'id': _this.topics[i].ID });
            }
        });
        this.UserProvider.getInformations(this.currentUser.token)
            .subscribe(function (userInformations) {
            _this.userInformations = userInformations;
        }, function (error) {
            console.log(error);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/home/home.html"*/'<ion-content class="bg">\n    <div class="bgHeader" style="margin-bottom:200px">\n        <ion-grid>\n            <ion-row>\n                <ion-col>\n                    <ion-label style="text-align: left" *ngIf="userInformations != []">\n                        <ion-icon name="star">&nbsp;&nbsp;&nbsp;</ion-icon>\n                        Niveau {{userInformations.Part}}\n                    </ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label style="text-align: right" *ngIf="userInformations != []">\n                        <ion-icon name="logo-usd">&nbsp;</ion-icon>\n                        {{userInformations.Gold}}\n                    </ion-label>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <ion-label style="text-align: left" *ngIf="currentUser != undefined && currentUser != null && currentUser.name != undefined">\n                        <ion-icon name="person">&nbsp;&nbsp;&nbsp;</ion-icon>{{ currentUser.name }}\n                    </ion-label>\n                </ion-col>\n                <ion-col>\n                    <ion-label style="text-align: center">\n                        <ion-icon name="trophy">&nbsp;</ion-icon>5</ion-label>\n                </ion-col>\n                <ion-col>\n                    <button ion-button icon-only clear (click)="parametersEvent()" id="settings" style="text-align: right"><ion-icon name="settings"></ion-icon></button>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </div>\n    <div class="news-card" *ngIf="params != []">\n        <ion-card responsive-sm wrap *ngFor="let item of topics; let i = index" [navPush]="pushNews" [navParams]="params[i]">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <img src="http://localhost:3000/{{item.Slug}}">\n                        <ion-card-content>\n                            <ion-card-title>{{ item.Title }}</ion-card-title>\n                            <p>{{ item.Description }}</p>\n                        </ion-card-content>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_news_news__["a" /* NewsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopPage = (function () {
    function ShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopPage');
    };
    return ShopPage;
}());
ShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shop',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/shop/shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-title>shop</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/shop/shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ShopPage);

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgePage = (function () {
    function ForgePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgePage.prototype.ngOnInit = function () {
    };
    ForgePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgePage');
    };
    return ForgePage;
}());
ForgePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forge',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/forge/forge.html"*/'<!--\n  Generated template for the ForgePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-title>forge</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/forge/forge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ForgePage);

//# sourceMappingURL=forge.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RankingPage = (function () {
    function RankingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingPage');
    };
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ranking',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/ranking/ranking.html"*/'<!--\n  Generated template for the RankingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar>\n        <ion-title>ranking</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/ranking/ranking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(272);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_subscribe_subscribe__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_parameters_parameters__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_shop_shop__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forge_forge__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modify_profile_modify_profile__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_user_user__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_news_news__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pages










// Providers



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_subscribe_subscribe__["a" /* SubscribePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_forge_forge__["a" /* ForgePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_modify_profile_modify_profile__["a" /* ModifyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-profile/modify-profile.module#ModifyProfilePageModule', name: 'ModifyProfilePage', segment: 'modify-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parameters/parameters.module#ParametersPageModule', name: 'ParametersPage', segment: 'parameters', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subscribe/subscribe.module#SubscribePageModule', name: 'SubscribePage', segment: 'subscribe', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_subscribe_subscribe__["a" /* SubscribePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_forge_forge__["a" /* ForgePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_modify_profile_modify_profile__["a" /* ModifyProfilePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_news_news__["a" /* NewsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Pages


// Providers


var LoginPage = (function () {
    function LoginPage(nav, auth, userProvider, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.userProvider = userProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser != null) {
            this.getInformations();
        }
    };
    LoginPage.prototype.getInformations = function () {
        var _this = this;
        if (this.currentUser.token != undefined && this.currentUser.token != null && this.currentUser.token != "") {
            this.userProvider.getInformationsAccess(this.currentUser.token)
                .subscribe(function (allowed) {
                if (allowed) {
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
                }
                else {
                    _this.registerCredentials.email = _this.currentUser.email;
                }
            }, function (error) {
                _this.showError("You have been disconnect. Please reconnect to access to your profile");
            });
        }
        else {
            this.registerCredentials.email = this.currentUser.email;
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__main_main__["a" /* MainPage */]);
            }
            else {
                _this.showError("L'email et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers. Veuillez vérifier et réessayer.");
            }
        }, function (error) {
            _this.showError(error);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Veuillez patienter...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Identifiants incorrects',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    LoginPage.prototype.showErrorForgottenId = function () {
        var alert = this.alertCtrl.create({
            title: 'Identifiants oubliés',
            subTitle: 'Veuillez renseignez votre adresse email',
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    LoginPage.prototype.registrationEvent = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__["a" /* SubscribePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/login/login.html"*/'<ion-content class="bg">\n  <ion-card>\n    <ion-card-header>\n      Space Battle Arena\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <form #registerForm="ngForm" (ngSubmit)="login(registerForm.form.value)" novalidate>\n          <ion-item>\n            <ion-input type="text" placeholder="Nom d\'utilisateur" name="username" [(ngModel)]="registerCredentials.email" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Mot de passe" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n          </ion-item>\n          <button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Connexion</button>\n          <button ion-button (click)="showErrorForgottenId()" clear full color="light">Mot de passe oublié ?</button>\n        </form>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" id="subscribeButton" (click)="registrationEvent()" ion-button clear color="light">Pas de compte ? Inscrivez-vous</button>\n</ion-content>\n'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Pages

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var User = (function () {
    function User(id, name, email, token) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.token = token;
    }
    return User;
}());

var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000/';
    }
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var access = false;
                var datas = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                datas.append("email", credentials.email);
                datas.append("password", credentials.password);
                _this.http.post(_this.apiUrl + 'signin', datas)
                    .toPromise()
                    .then(function (res) {
                    var results = res.json();
                    if (results['results'] != undefined && results['results'] != null) {
                        results = results['results'];
                        if (results != null) {
                            access = (results['token'] != undefined &&
                                results['token'] != null &&
                                results['user'] != undefined &&
                                results['user'] != null);
                            if (access) {
                                _this.currentUser = new User(results['user']['Id'], results['user']['Name'], results['user']['Email'], results['token']);
                                localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
                            }
                        }
                    }
                    observer.next(access);
                    observer.complete();
                }, function (error) {
                    console.log(error);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    AuthProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthProvider.prototype.register = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                var access = false;
                var datas = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* URLSearchParams */]();
                datas.append("email", credentials.email);
                datas.append("password", credentials.password);
                datas.append("first_name", credentials.username);
                datas.append("last_name", credentials.username);
                _this.http.post(_this.apiUrl + 'signup', datas)
                    .toPromise()
                    .then(function (res) {
                    var results = res.json();
                    if (results['message'] != undefined && results['message'] === "Your account has been created successfully") {
                        access = true;
                    }
                    observer.next(access);
                    observer.complete();
                }, function (error) {
                    console.log(error);
                    observer.next(false);
                    observer.complete();
                });
            });
        }
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            _this.currentUser.token = "";
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
            observer.next(true);
            observer.complete();
        });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map