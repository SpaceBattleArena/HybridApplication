webpackJsonp([4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modify_profile_modify_profile__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ParametersPage = (function () {
    function ParametersPage(navCtrl, navParams, loadingCtrl) {
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    ParametersPage.prototype.presentLoading = function () {
        this.loadingCtrl.create({
            content: 'Veuillez patienter...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
        this.disconnectEvent();
    };
    return ParametersPage;
}());
ParametersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-parameters',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\parameters\parameters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Réglages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg">\n  <ion-list inset>\n    <ion-item>\n      <ion-label>Notifications</ion-label>\n      <ion-toggle value="foo" checked="true"></ion-toggle>\n    </ion-item>\n\n    <button margin-top ion-button (tap)="modifyProfileEvent()" full color="white">Modifier profil</button>\n\n    <button margin-top ion-button full color="white">Centre de connaissance</button>\n    <button ion-button full color="white">Aide & Assistance</button>\n    <button ion-button full color="white">Contactez-nous</button>\n\n    <button margin-top ion-button full color="white">Conditions d\'utilisation</button>\n    <button ion-button full color="white">Politique de confidentialité</button>\n    <button ion-button full color="white">Mentions légales</button>\n    <button ion-button full color="white">Remerciements</button>\n\n    <button margin-top ion-button (tap)="presentLoading()" full color="white">Se déconnecter</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\parameters\parameters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], ParametersPage);

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
        selector: 'page-modify-profile',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\modify-profile\modify-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Modifier Profil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg">\n<ion-list>\n  <ion-item>\n    <ion-label (tap)="showPromptUsername()">Jdoe</ion-label>\n  </ion-item>\n  <ion-item margin-top>\n    <ion-label (tap)="showPromptEmail()">jdoe@gmail.com</ion-label>\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\modify-profile\modify-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModifyProfilePage);

//# sourceMappingURL=modify-profile.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubscribePage = (function () {
    function SubscribePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubscribePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SubscribePage');
    };
    return SubscribePage;
}());
SubscribePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-subscribe',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\subscribe\subscribe.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Inscription</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg">\n  <ion-card>\n    <ion-card-header>\n      Space Battle Arena\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="Email" name="email" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="Nom d\'utilisateur" name="username" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="password" placeholder="Mot de passe" name="password" required></ion-input>\n        </ion-item>\n        <button ion-button block outline color="light" type="submit">Inscription</button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\subscribe\subscribe.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SubscribePage);

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 146:
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
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		578,
		3
	],
	"../pages/modify-profile/modify-profile.module": [
		579,
		2
	],
	"../pages/parameters/parameters.module": [
		581,
		1
	],
	"../pages/subscribe/subscribe.module": [
		580,
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
webpackAsyncContext.id = 189;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeProvider = (function () {
    function HomeProvider(http) {
        this.http = http;
        this.url = "http://localhost:8100"; // Web api URL
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    // Get the data from the json file
    HomeProvider.prototype.getTopic = function () {
        // Put the file in the repo www
        return this.http.get('./data/json/home-page.json')
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    return HomeProvider;
}());
HomeProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HomeProvider);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var User = (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());

var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw("Please insert credentials");
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                // TODO : Request to backend
                var access = (credentials.password === "pass" && credentials.email === "jdoe@gmail.com");
                _this.currentUser = new User('JohnDoe', 'john@doe.com');
                observer.next(access);
                observer.complete();
            });
        }
    };
    AuthProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this.currentUser = null;
            observer.next(true);
            observer.complete();
        });
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(267);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_parameters_parameters__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_shop_shop__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_forge_forge__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modify_profile_modify_profile__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_home_home__ = __webpack_require__(190);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__["a" /* SubscribePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_forge_forge__["a" /* ForgePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modify_profile_modify_profile__["a" /* ModifyProfilePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-profile/modify-profile.module#ModifyProfilePageModule', name: 'ModifyProfilePage', segment: 'modify-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subscribe/subscribe.module#SubscribePageModule', name: 'SubscribePage', segment: 'subscribe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parameters/parameters.module#ParametersPageModule', name: 'ParametersPage', segment: 'parameters', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_subscribe_subscribe__["a" /* SubscribePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_parameters_parameters__["a" /* ParametersPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_shop_shop__["a" /* ShopPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_forge_forge__["a" /* ForgePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_ranking_ranking__["a" /* RankingPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modify_profile_modify_profile__["a" /* ModifyProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_15__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_home_home__["a" /* HomeProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameters_parameters__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_shop__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forge_forge__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_home_home__ = __webpack_require__(190);
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
    function HomePage(HomeProvider, navCtrl, navParams) {
        this.HomeProvider = HomeProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.isReadonly = function () {
        return this.isReadonly; //return true/false
    };
    // Event to access the parameters page
    HomePage.prototype.parametersEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__parameters_parameters__["a" /* ParametersPage */]);
    };
    // Event to access the store page
    HomePage.prototype.shopEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shop_shop__["a" /* ShopPage */]);
    };
    // Event to access the forge page
    HomePage.prototype.forgeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forge_forge__["a" /* ForgePage */]);
    };
    // Event to access the home page
    HomePage.prototype.homeEvent = function () {
        // this.navCtrl.push(HomePage);
    };
    // Event to access the ranking page
    HomePage.prototype.rankingEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__ranking_ranking__["a" /* RankingPage */]);
    };
    // Event to access the detail of the clicked topic
    HomePage.prototype.topicEvent = function () {
        console.log('ionViewDidLoad TopicPage');
    };
    // When the page is loaded, the data are updated
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.HomeProvider.getTopic()
            .then(function (topics) {
            _this.topics = topics;
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\home\home.html"*/'<ion-content class="bg">\n  <div class="bgHeader" style="margin-bottom:200px">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-label style="text-align: left">\n            <ion-icon name="star">&nbsp;&nbsp;&nbsp;</ion-icon>Niveau 42</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label style="text-align: right">\n            <ion-icon name="logo-usd">&nbsp;</ion-icon>42</ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-label style="text-align: left">\n            <ion-icon name="person">&nbsp;&nbsp;&nbsp;</ion-icon>John Doe</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-label style="text-align: center">\n            <ion-icon name="trophy">&nbsp;</ion-icon>5</ion-label>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="parametersEvent()" id="settings" style="text-align: right"><ion-icon name="settings"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div class="news-card">\n    <ion-card responsive-sm wrap *ngFor="let item of topics?.topic">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <img src="data/img/{{item.picture}}.jpg">\n            <ion-card-content (click)="topicEvent()">\n              <ion-card-title>{{ item.title }}</ion-card-title>\n              <p>{{ item.main }}</p>\n            </ion-card-content>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only clear (click)="shopEvent()"><ion-icon name="cart" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="forgeEvent()"><ion-icon name="hammer" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="homeEvent()"><ion-icon name="home" class="active"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="rankingEvent()"><ion-icon name="podium" class="unactive"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_home_home__["a" /* HomeProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(80);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ranking_ranking__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forge_forge__ = __webpack_require__(70);
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



var ShopPage = (function () {
    function ShopPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopPage');
    };
    // Event to access the store page
    ShopPage.prototype.shopEvent = function () {
        // this.navCtrl.push(ShopPage);
    };
    // Event to access the forge page
    ShopPage.prototype.forgeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forge_forge__["a" /* ForgePage */]);
    };
    // Event to access the home page
    ShopPage.prototype.homeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // Event to access the ranking page
    ShopPage.prototype.rankingEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__ranking_ranking__["a" /* RankingPage */]);
    };
    return ShopPage;
}());
ShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shop',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\shop\shop.html"*/'<!--\n  Generated template for the ShopPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>shop</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-toolbar class="footer-toolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only clear (click)="shopEvent()"><ion-icon name="cart" class="active"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="forgeEvent()"><ion-icon name="hammer" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="homeEvent()"><ion-icon name="home" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="rankingEvent()"><ion-icon name="podium" class="unactive"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\shop\shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ShopPage);

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_shop__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forge_forge__ = __webpack_require__(70);
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



var RankingPage = (function () {
    function RankingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RankingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RankingPage');
    };
    // Event to access the store page
    RankingPage.prototype.shopEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shop_shop__["a" /* ShopPage */]);
    };
    // Event to access the forge page
    RankingPage.prototype.forgeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__forge_forge__["a" /* ForgePage */]);
    };
    // Event to access the home page
    RankingPage.prototype.homeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // Event to access the ranking page
    RankingPage.prototype.rankingEvent = function () {
        // this.navCtrl.push(RankingPage);
    };
    return RankingPage;
}());
RankingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ranking',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\ranking\ranking.html"*/'<!--\n  Generated template for the RankingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>ranking</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-toolbar class="footer-toolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only clear (click)="shopEvent()"><ion-icon name="cart" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="forgeEvent()"><ion-icon name="hammer" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="homeEvent()"><ion-icon name="home" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="rankingEvent()"><ion-icon name="podium" class="active"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\ranking\ranking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_shop__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ranking_ranking__ = __webpack_require__(69);
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



var ForgePage = (function () {
    function ForgePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgePage');
    };
    // Event to access the store page
    ForgePage.prototype.shopEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__shop_shop__["a" /* ShopPage */]);
    };
    // Event to access the forge page
    ForgePage.prototype.forgeEvent = function () {
        // this.navCtrl.push(ForgePage);
    };
    // Event to access the home page
    ForgePage.prototype.homeEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    // Event to access the ranking page
    ForgePage.prototype.rankingEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ranking_ranking__["a" /* RankingPage */]);
    };
    return ForgePage;
}());
ForgePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forge',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\forge\forge.html"*/'<!--\n  Generated template for the ForgePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar>\n    <ion-title>forge</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-toolbar class="footer-toolbar">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button icon-only clear (click)="shopEvent()"><ion-icon name="cart" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="forgeEvent()"><ion-icon name="hammer" class="active"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="homeEvent()"><ion-icon name="home" class="unactive"></ion-icon></button>\n        </ion-col>\n        <ion-col>\n          <button ion-button icon-only clear (click)="rankingEvent()"><ion-icon name="podium" class="unactive"></ion-icon></button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\forge\forge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ForgePage);

//# sourceMappingURL=forge.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(218);
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
    function LoginPage(nav, auth, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.auth.login(this.registerCredentials).subscribe(function (allowed) {
            if (allowed) {
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\login\login.html"*/'<ion-content class="bg">\n  <ion-card>\n    <ion-card-header>\n      Space Battle Arena\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <form #registerForm="ngForm" (ngSubmit)="login(registerForm.form.value)" novalidate>\n          <ion-item>\n            <ion-input type="text" placeholder="Nom d\'utilisateur" name="username" [(ngModel)]="registerCredentials.email" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input type="password" placeholder="Mot de passe" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n          </ion-item>\n          <button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Connexion</button>\n          <button ion-button (click)="showErrorForgottenId()" clear full color="light">Mot de passe oublié ?</button>\n        </form>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <button class="bottom" id="subscribeButton" (click)="registrationEvent()" ion-button clear color="light">Pas de compte ? Inscrivez-vous</button>\n</ion-content>\n'/*ion-inline-end:"D:\work\Epitech\EIP\App smartphone\sbaApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[262]);
//# sourceMappingURL=main.js.map