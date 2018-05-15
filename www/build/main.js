webpackJsonp([11],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
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




var DecksProvider = (function () {
    function DecksProvider(http) {
        this.http = http;
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
    }
    DecksProvider.prototype.getByUserId = function (token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            add_headers.append('Authorization', token);
            add_headers.append('Accept', 'application/json');
            add_headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
            add_headers.append('Access-Control-Allow-Origin', '*');
            add_headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: add_headers });
            _this.http.get(_this.apiUrl + "deck/", options)
                .toPromise()
                .then(function (res) {
                var results = res.json();
                console.log(results);
                if (results['decks'] != undefined) {
                    observer.next(results['decks']);
                }
                else {
                    observer.next([]);
                }
                observer.complete();
            });
        });
    };
    DecksProvider.prototype.create = function (deck, token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var access = false;
            var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            add_headers.append('Authorization', token);
            var datas = {
                hero_id: deck.Hero_id.toString(),
                name: deck.Name.toString(),
                deck: [deck.Card_1_id, deck.Card_2_id, deck.Card_3_id, deck.Card_4_id, deck.Card_5_id,
                    deck.Card_6_id, deck.Card_7_id, deck.Card_8_id, deck.Card_9_id, deck.Card_10_id,
                    deck.Card_11_id, deck.Card_12_id, deck.Card_13_id, deck.Card_14_id, deck.Card_15_id,
                    deck.Card_16_id, deck.Card_17_id, deck.Card_18_id, deck.Card_19_id, deck.Card_20_id]
            };
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
            options.headers = add_headers;
            _this.http.post(_this.apiUrl + 'deck/create', datas, options)
                .toPromise()
                .then(function (res) {
                res = res.json();
                console.log(res);
                if (res['results']['status'] === 201) {
                    observer.next('ok');
                }
                else if (res['results']['status'] === 403) {
                    observer.next(res['results']['error']);
                }
                observer.complete();
            });
        });
    };
    DecksProvider.prototype.modify = function (id, deck, token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var access = false;
            var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            add_headers.append('Authorization', token);
            var datas = {
                hero_id: deck.Hero_id.toString(),
                name: deck.Name.toString(),
                deck: [deck.Card_1_id, deck.Card_2_id, deck.Card_3_id, deck.Card_4_id, deck.Card_5_id,
                    deck.Card_6_id, deck.Card_7_id, deck.Card_8_id, deck.Card_9_id, deck.Card_10_id,
                    deck.Card_11_id, deck.Card_12_id, deck.Card_13_id, deck.Card_14_id, deck.Card_15_id,
                    deck.Card_16_id, deck.Card_17_id, deck.Card_18_id, deck.Card_19_id, deck.Card_20_id]
            };
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]();
            options.headers = add_headers;
            _this.http.put(_this.apiUrl + 'deck/' + id.toString() + '/update', datas, options)
                .toPromise()
                .then(function (res) {
                res = res.json();
                console.log(res);
                if (res['results']['status'] === 201) {
                    observer.next('ok');
                }
                else if (res['results']['status'] === 403) {
                    observer.next(res['results']['error']);
                }
                observer.complete();
            });
        });
    };
    DecksProvider.prototype.delete = function () {
    };
    return DecksProvider;
}());
DecksProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DecksProvider);

//# sourceMappingURL=deck.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HerosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_hero__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//data

var HerosProvider = (function () {
    function HerosProvider(http) {
        this.http = http;
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
    }
    HerosProvider.prototype.getAll = function () {
        return [
            new __WEBPACK_IMPORTED_MODULE_3__data_hero__["a" /* Hero */](1, 1, 'Yugi', 'http://localhost:3000/articles/champ-1.png'),
            new __WEBPACK_IMPORTED_MODULE_3__data_hero__["a" /* Hero */](2, 2, 'Kaiba', 'http://localhost:3000/articles/champ-2.png'),
            new __WEBPACK_IMPORTED_MODULE_3__data_hero__["a" /* Hero */](3, 1, 'Jaden', 'http://localhost:3000/articles/champ-3.png'),
        ];
    };
    return HerosProvider;
}());
HerosProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], HerosProvider);

//# sourceMappingURL=heros.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(223);
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
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
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
            _this.http.get(_this.apiUrl + "article/" + id.toString())
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

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardPage = (function () {
    function CardPage(tabs, navCtrl, navParams, menuCtrl, events) {
        this.tabs = tabs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.events = events;
    }
    CardPage.prototype.ngOnInit = function () {
        this.card = this.navParams.get('card');
        console.log(this.card);
    };
    CardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardPage');
    };
    CardPage.prototype.ionViewDidEnter = function () {
        this.tabs.setTabbarHidden(true);
        this.events.publish('menu:hide');
        this.menuCtrl.enable(false);
    };
    return CardPage;
}());
CardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-card',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/card/card.html"*/'<!--\n  Generated template for the CardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>card</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <img src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/sprite2.png" alt="{{card.Name}}" />\n    <ion-row>\n        <ion-col>\n            <button ion-button full>-200G</button>\n        </ion-col>\n        <ion-col>\n            <button ion-button full>+150G</button>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/card/card.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], CardPage);

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cards_cards__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__card_card__ = __webpack_require__(138);
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

//Page

var CardsListPage = (function () {
    function CardsListPage(cardProvider, tabs, navCtrl, navParams, menuCtrl, events) {
        this.cardProvider = cardProvider;
        this.tabs = tabs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.cards_all = [];
        this.cards_user = [];
        this.cards_missing = [];
        this.display_cards = [];
        this.is_displayCard = false;
        this.is_possesses = true;
        this.is_missing = false;
        this.is_all = false;
        this.faction = 'Toutes';
        this.factions_list = [
            'Toutes',
            'Neutral',
            'Alliance'
        ];
        this.type = 'Tous';
        this.types_list = [
            'Tous',
            'Spatialship',
            'Equipement'
        ];
        this.cost = -1;
        this.rarity = 0;
        this.rarities_list = [
            'Toutes',
            'Commune',
            'Non commune',
            'Rare',
            'Epic',
            'Mythic'
        ];
    }
    CardsListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.is_displayCard = false;
        this.tabs.setTabbarHidden(true);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.cardProvider.getCardsPlayer(this.currentUser.token)
            .subscribe(function (cards) {
            _this.cards_user = cards;
            _this.cardProvider.getAll()
                .subscribe(function (cards) {
                _this.cards_all = cards;
                for (var i = 0; i < _this.cards_all.length; i += 1) {
                    if (_this.getIDs(_this.cards_user).indexOf(_this.cards_all[i].ID.valueOf()) === -1) {
                        _this.cards_missing.push(_this.cards_all[i]);
                    }
                }
            }, function (error) {
                console.log(error);
            });
            _this.only_possessed(_this.cards_user);
        }, function (error) {
            console.log(error);
        });
    };
    CardsListPage.prototype.displayCard = function (index) {
        this.is_displayCard = true;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__card_card__["a" /* CardPage */], { card: this.display_cards[index] });
    };
    CardsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CardsListPage');
    };
    CardsListPage.prototype.ionViewDidEnter = function () {
        this.is_displayCard = false;
        this.tabs.setTabbarHidden(true);
        this.events.publish('menu:hide');
        this.menuCtrl.enable(false);
    };
    CardsListPage.prototype.ionViewWillLeave = function () {
        if (!this.is_displayCard) {
            this.tabs.setTabbarHidden(false);
            this.events.publish('menu:display');
            this.menuCtrl.enable(true);
        }
    };
    CardsListPage.prototype.changeToPossesses = function () {
        this.is_possesses = true;
        this.is_missing = false;
        this.is_all = false;
        this.onChangeFilter(null);
    };
    CardsListPage.prototype.changeToMissing = function () {
        this.is_possesses = false;
        this.is_missing = true;
        this.is_all = false;
        this.onChangeFilter(null);
    };
    CardsListPage.prototype.changeToAll = function () {
        this.is_possesses = false;
        this.is_missing = false;
        this.is_all = true;
        this.onChangeFilter(null);
    };
    CardsListPage.prototype.onChangeFilter = function (event) {
        if (this.is_possesses) {
            this.only_possessed(this.cards_user);
        }
        else if (this.is_missing) {
            this.only_missing(this.cards_missing);
        }
        else {
            this.both(this.cards_all);
        }
        this.filterFaction();
        this.filterType();
        this.filterRarity();
        this.filterCost();
        console.log(this.display_cards);
    };
    CardsListPage.prototype.only_possessed = function (cards) {
        this.display_cards = [];
        for (var i = 0; i < cards.length; i += 1) {
            this.display_cards.push({ card: cards[i], value: 'possessed' });
        }
    };
    CardsListPage.prototype.only_missing = function (cards) {
        this.display_cards = [];
        for (var i = 0; i < cards.length; i += 1) {
            this.display_cards.push({ card: cards[i], value: 'missing' });
        }
    };
    CardsListPage.prototype.both = function (cards) {
        this.display_cards = [];
        for (var i = 0; i < cards.length; i += 1) {
            if (this.getIDs(this.cards_user).indexOf(cards[i].ID.valueOf()) != -1) {
                this.display_cards.push({ card: cards[i], value: 'possessed' });
            }
            else {
                this.display_cards.push({ card: cards[i], value: 'missing' });
            }
        }
    };
    CardsListPage.prototype.getIDs = function (cards) {
        var tab_id = [];
        for (var i = 0; i < cards.length; i += 1) {
            tab_id.push(cards[i].ID);
        }
        return tab_id;
    };
    CardsListPage.prototype.filterFaction = function () {
        var tmp = [];
        if (this.faction != 'Toutes') {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].card.Faction === this.faction) {
                    tmp.push(this.display_cards[i].card);
                }
            }
            this.both(tmp);
        }
    };
    CardsListPage.prototype.filterType = function () {
        var tmp = [];
        if (this.type != 'Tous') {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].card.Type === this.type) {
                    tmp.push(this.display_cards[i].card);
                }
            }
            this.both(tmp);
        }
    };
    CardsListPage.prototype.filterCost = function () {
        var tmp = [];
        if (this.cost != -1) {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].card.Cost == this.cost) {
                    tmp.push(this.display_cards[i].card);
                }
            }
            this.both(tmp);
        }
    };
    CardsListPage.prototype.filterRarity = function () {
        var tmp = [];
        if (this.rarity != 0) {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].card.Rarity_id.valueOf() == this.rarity) {
                    tmp.push(this.display_cards[i].card);
                }
            }
            this.both(tmp);
        }
    };
    CardsListPage.prototype.displayFilters = function () {
        var filters_container = document.getElementById("filters");
        filters_container.classList.add("show");
        var filters_black_screen = document.getElementById("filter-black-screen");
        filters_black_screen.classList.add("show");
    };
    CardsListPage.prototype.hideFilters = function () {
        var filters_container = document.getElementById("filters");
        filters_container.classList.remove("show");
        var filters_black_screen = document.getElementById("filter-black-screen");
        filters_black_screen.classList.remove("show");
    };
    return CardsListPage;
}());
CardsListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards-list',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/cards-list/cards-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>cards_list</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-row class="cards-filter">\n        <ion-col class="content-button">\n            <button *ngIf="is_possesses; else noPossesses" ion-button full class="button-filter select">Possédé</button>\n            <ng-template #noPossesses>\n                <button ion-button full class="button-filter" (click)="changeToPossesses()">Possédé</button>\n            </ng-template>\n        </ion-col>\n        <ion-col class="content-button">\n            <button *ngIf="is_missing; else noMissing" ion-button full class="button-filter select">Manquante</button>\n            <ng-template #noMissing>\n                <button ion-button full class="button-filter" (click)="changeToMissing()">Manquante</button>\n            </ng-template>\n        </ion-col>\n        <ion-col class="content-button">\n            <button *ngIf="is_all; else noAll" ion-button full class="button-filter select">Toutes</button>\n            <ng-template #noAll>\n                <button ion-button full class="button-filter" (click)="changeToAll()">Toutes</button>\n            </ng-template>\n        </ion-col>\n    </ion-row>\n    <div class="add-filter">\n        <button ion-button full (click)="displayFilters()">Ajouter des filtres</button>\n    </div>\n    <div *ngIf="display_cards.length == 0; else CardsListBlock">\n        <p style="text-align: center;">Vous n\'avez pas de cartes correspondant à ces critères</p>\n    </div>\n    <ng-template #CardsListBlock>\n        <ion-row>\n            <ion-col *ngFor="let card of display_cards; let i = index" col-2 (click)="displayCard(i)">\n                <img *ngIf="card.value === \'possessed\'; else MissingCardBlock" src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/sprite2.png" alt="{{card.card.Name}}" />\n                <ng-template #MissingCardBlock>\n                    <img src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/sprite2.png" alt="{{card.card.Name}}" style="-webkit-filter: grayscale(100%);filter: grayscale(100%);" />\n                </ng-template>\n            </ion-col>\n        </ion-row>\n        <!--<ion-card *ngFor="let card of cards">\n            <ion-row>\n                <ion-col>\n                    <h2>{{card.Name}}</h2>\n                </ion-col>\n                <ion-col>\n                    <div>{{card.Cost}}</div>\n                </ion-col>\n            </ion-row>\n            <img src="{{card.Sprite}}" />\n            <ion-row>\n                <ion-col>\n                    <div>{{card.Type}}</div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <div>{{card.ATK}}</div>\n                </ion-col>\n                <ion-col>\n                    <div>{{card.HP}}</div>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                    <div>{{card.Faction}}</div>\n                </ion-col>\n            </ion-row>\n        </ion-card>-->\n    </ng-template>\n    <div class="filter-black-screen" id="filter-black-screen" (click)="hideFilters()"></div>\n    <div class="filter-container" id="filters">\n        <h2 class="filters-title">Filtres</h2>\n        <ion-list>\n            <ion-item>\n                <ion-label>Faction</ion-label>\n                <ion-select [(ngModel)]="faction" (ionChange)="onChangeFilter($event)">\n                    <ion-option *ngFor="let value of factions_list" value="{{value}}">{{value}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item>\n                <ion-label>Type</ion-label>\n                <ion-select [(ngModel)]="type" (ionChange)="onChangeFilter($event)">\n                    <ion-option *ngFor="let value of types_list" value="{{value}}">{{value}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item>\n                <ion-label>Rareté</ion-label>\n                <ion-select [(ngModel)]="rarity" (ionChange)="onChangeFilter($event)">\n                    <ion-option *ngFor="let rar of rarities_list; let i = index" value="{{i}}">{{rar}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item>\n                <ion-label>Coût</ion-label>\n                <ion-select [(ngModel)]="cost" (ionChange)="onChangeFilter($event)">\n                    <ion-option value="-1">Tous</ion-option>\n                    <ion-option *ngFor="let val of [0, 100, 200, 300, 400, 500, 600, 700, 800]" value="{{val}}">{{val}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button ion-button full (click)="hideFilters()">Fermer</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/cards-list/cards-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_cards_cards__["a" /* CardsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], CardsListPage);

//# sourceMappingURL=cards-list.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateModifyDeckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cards_cards__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_deck_deck__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_heros_heros__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_deck__ = __webpack_require__(301);
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



//data

var CreateModifyDeckPage = (function () {
    function CreateModifyDeckPage(navCtrl, navParams, events, tabs, menuCtrl, cardProvider, deckProvider, herosProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.tabs = tabs;
        this.menuCtrl = menuCtrl;
        this.cardProvider = cardProvider;
        this.deckProvider = deckProvider;
        this.herosProvider = herosProvider;
        this.cardsListDeck = [];
        this.cards_all = [];
        this.display_cards = [];
        this.faction = 'Toutes';
        this.factions_list = [
            'Toutes',
            'Neutral',
            'Alliance'
        ];
        this.type = 'Tous';
        this.types_list = [
            'Tous',
            'Spatialship',
            'Equipement'
        ];
        this.cost = -1;
        this.rarity = 0;
        this.rarities_list = [
            'Toutes',
            'Commune',
            'Non commune',
            'Rare',
            'Epic',
            'Mythic'
        ];
        this.heros = [];
        this.is_hero_display = false;
        this.factions = [
            { ID: 1, Name: 'Neutral' },
            { ID: 2, Name: 'Alliance' },
            { ID: 3, Name: 'Horde' }
        ];
    }
    CreateModifyDeckPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateModifyDeckPage');
    };
    CreateModifyDeckPage.prototype.ionViewDidEnter = function () {
        this.tabs.setTabbarHidden(true);
        this.events.publish('menu:hide');
        this.menuCtrl.enable(false);
    };
    CreateModifyDeckPage.prototype.ionViewWillLeave = function () {
        this.tabs.setTabbarHidden(false);
        this.events.publish('menu:display');
        this.menuCtrl.enable(true);
    };
    CreateModifyDeckPage.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.deck = this.navParams.get('deck');
        this.hero = this.navParams.get('hero');
        //to modify -----------------------------
        this.heros = this.herosProvider.getAll();
        //---------------------------------------
        this.getAllCards();
    };
    CreateModifyDeckPage.prototype.getCardById = function (id) {
        for (var i = 0; i < this.cards_all.length; i += 1) {
            if (this.cards_all[i].ID === id) {
                return this.cards_all[i];
            }
        }
        return null;
    };
    CreateModifyDeckPage.prototype.getAllCards = function () {
        var _this = this;
        this.cardProvider.getCardsPlayer(this.currentUser.token)
            .subscribe(function (cards) {
            _this.cards_all = cards;
            if (_this.deck === null) {
                console.log(_this.hero);
                _this.deck = new __WEBPACK_IMPORTED_MODULE_5__data_deck__["a" /* Deck */](-1, _this.currentUser.id, 0, _this.hero.ID, 'New', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                var i = 0;
                while (i < 20) {
                    _this.cardsListDeck.push(null);
                    i += 1;
                }
                _this.displaySelectChamp();
            }
            else {
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_1_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_2_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_3_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_4_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_5_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_6_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_7_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_8_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_9_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_10_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_11_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_12_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_13_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_14_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_15_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_16_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_17_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_18_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_19_id));
                _this.cardsListDeck.push(_this.getCardById(_this.deck.Card_20_id));
            }
            for (var i = 0; i < _this.cards_all.length; i += 1) {
                if (_this.cards_all[i].Faction === _this.getFaction(_this.hero) || _this.cards_all[i].Faction === "Neutral") {
                    _this.display_cards.push(_this.cards_all[i]);
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    CreateModifyDeckPage.prototype.getFaction = function (hero) {
        for (var i = 0; i < this.factions.length; i += 1) {
            if (this.factions[i].ID === hero.Faction_id) {
                return this.factions[i].Name;
            }
        }
        return null;
    };
    CreateModifyDeckPage.prototype.displaySelectChamp = function () {
        this.is_hero_display = true;
    };
    CreateModifyDeckPage.prototype.allowDrop = function (ev) {
        ev.preventDefault();
    };
    CreateModifyDeckPage.prototype.drag = function (ev, card, index) {
        ev.dataTransfer.setData("card", JSON.stringify(card));
    };
    CreateModifyDeckPage.prototype.dropInDeck = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("card");
        for (var i = 0; i < this.cardsListDeck.length; i += 1) {
            if (this.cardsListDeck[i] === null) {
                this.cardsListDeck[i] = JSON.parse(data);
                return;
            }
        }
        console.log("it's full");
    };
    CreateModifyDeckPage.prototype.dropInCardsList = function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("card");
        var index = ev.dataTransfer.getData("index");
        this.cardsListDeck[Number(index)] = null;
        for (var i = Number(index); i < this.cardsListDeck.length; i += 1) {
            if (i + 1 === this.cardsListDeck.length) {
                this.cardsListDeck[i] = null;
            }
            else {
                this.cardsListDeck[i] = this.cardsListDeck[i + 1];
            }
        }
    };
    CreateModifyDeckPage.prototype.displayFilters = function () {
        var filters_container = document.getElementById("filters");
        filters_container.classList.add("show");
        var filters_black_screen = document.getElementById("filter-black-screen");
        filters_black_screen.classList.add("show");
    };
    CreateModifyDeckPage.prototype.hideFilters = function () {
        var filters_container = document.getElementById("filters");
        filters_container.classList.remove("show");
        var filters_black_screen = document.getElementById("filter-black-screen");
        filters_black_screen.classList.remove("show");
    };
    CreateModifyDeckPage.prototype.onChangeFilter = function (event) {
        this.display_cards = this.cards_all;
        this.filterFaction();
        this.filterType();
        this.filterRarity();
        this.filterCost();
    };
    CreateModifyDeckPage.prototype.filterFaction = function () {
        var tmp = [];
        for (var i = 0; i < this.display_cards.length; i += 1) {
            if (this.display_cards[i].Faction === this.hero.getFaction() || this.cards_all[i].Faction === "Neutral") {
                tmp.push(this.display_cards[i]);
            }
        }
        this.display_cards = tmp;
    };
    CreateModifyDeckPage.prototype.filterType = function () {
        var tmp = [];
        if (this.type != 'Tous') {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].Type === this.type) {
                    tmp.push(this.display_cards[i]);
                }
            }
            this.display_cards = tmp;
        }
    };
    CreateModifyDeckPage.prototype.filterCost = function () {
        var tmp = [];
        if (this.cost != -1) {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].Cost == this.cost) {
                    tmp.push(this.display_cards[i]);
                }
            }
            this.display_cards = tmp;
        }
    };
    CreateModifyDeckPage.prototype.filterRarity = function () {
        var tmp = [];
        if (this.rarity != 0) {
            for (var i = 0; i < this.display_cards.length; i += 1) {
                if (this.display_cards[i].Rarity_id.valueOf() == this.rarity) {
                    tmp.push(this.display_cards[i]);
                }
            }
            this.display_cards = tmp;
        }
    };
    CreateModifyDeckPage.prototype.saveDeck = function () {
        if (this.cardsListDeck[0] != null) {
            this.deck.Card_1_id = this.cardsListDeck[0].ID;
        }
        else {
            this.deck.Card_1_id = null;
        }
        if (this.cardsListDeck[1] != null) {
            this.deck.Card_2_id = this.cardsListDeck[1].ID;
        }
        else {
            this.deck.Card_2_id = null;
        }
        if (this.cardsListDeck[2] != null) {
            this.deck.Card_3_id = this.cardsListDeck[2].ID;
        }
        else {
            this.deck.Card_3_id = null;
        }
        if (this.cardsListDeck[3] != null) {
            this.deck.Card_4_id = this.cardsListDeck[3].ID;
        }
        else {
            this.deck.Card_4_id = null;
        }
        if (this.cardsListDeck[4] != null) {
            this.deck.Card_5_id = this.cardsListDeck[4].ID;
        }
        else {
            this.deck.Card_5_id = null;
        }
        if (this.cardsListDeck[5] != null) {
            this.deck.Card_6_id = this.cardsListDeck[5].ID;
        }
        else {
            this.deck.Card_6_id = null;
        }
        if (this.cardsListDeck[6] != null) {
            this.deck.Card_7_id = this.cardsListDeck[6].ID;
        }
        else {
            this.deck.Card_7_id = null;
        }
        if (this.cardsListDeck[7] != null) {
            this.deck.Card_8_id = this.cardsListDeck[7].ID;
        }
        else {
            this.deck.Card_8_id = null;
        }
        if (this.cardsListDeck[8] != null) {
            this.deck.Card_9_id = this.cardsListDeck[8].ID;
        }
        else {
            this.deck.Card_9_id = null;
        }
        if (this.cardsListDeck[9] != null) {
            this.deck.Card_10_id = this.cardsListDeck[9].ID;
        }
        else {
            this.deck.Card_10_id = null;
        }
        if (this.cardsListDeck[10] != null) {
            this.deck.Card_11_id = this.cardsListDeck[10].ID;
        }
        else {
            this.deck.Card_11_id = null;
        }
        if (this.cardsListDeck[11] != null) {
            this.deck.Card_12_id = this.cardsListDeck[11].ID;
        }
        else {
            this.deck.Card_12_id = null;
        }
        if (this.cardsListDeck[12] != null) {
            this.deck.Card_13_id = this.cardsListDeck[12].ID;
        }
        else {
            this.deck.Card_13_id = null;
        }
        if (this.cardsListDeck[13] != null) {
            this.deck.Card_14_id = this.cardsListDeck[13].ID;
        }
        else {
            this.deck.Card_14_id = null;
        }
        if (this.cardsListDeck[14] != null) {
            this.deck.Card_15_id = this.cardsListDeck[14].ID;
        }
        else {
            this.deck.Card_15_id = null;
        }
        if (this.cardsListDeck[15] != null) {
            this.deck.Card_16_id = this.cardsListDeck[15].ID;
        }
        else {
            this.deck.Card_16_id = null;
        }
        if (this.cardsListDeck[16] != null) {
            this.deck.Card_17_id = this.cardsListDeck[16].ID;
        }
        else {
            this.deck.Card_17_id = null;
        }
        if (this.cardsListDeck[17] != null) {
            this.deck.Card_18_id = this.cardsListDeck[17].ID;
        }
        else {
            this.deck.Card_18_id = null;
        }
        if (this.cardsListDeck[18] != null) {
            this.deck.Card_19_id = this.cardsListDeck[18].ID;
        }
        else {
            this.deck.Card_19_id = null;
        }
        if (this.cardsListDeck[19] != null) {
            this.deck.Card_20_id = this.cardsListDeck[19].ID;
        }
        else {
            this.deck.Card_20_id = null;
        }
        if (this.deck.ID === -1) {
            this.deckProvider.create(this.deck, this.currentUser.token)
                .subscribe(function (results) {
                if (results === 'ok') {
                    alert('Successfully created');
                }
                else {
                    alert(results);
                }
            });
        }
        else {
            this.deckProvider.modify(this.deck.ID, this.deck, this.currentUser.token)
                .subscribe(function (results) {
                if (results === 'ok') {
                    alert('Successfully modified');
                }
                else {
                    alert(results);
                }
            });
        }
    };
    return CreateModifyDeckPage;
}());
CreateModifyDeckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-modify-deck',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/create-modify-deck/create-modify-deck.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>create-modify-deck</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <button ion-button full color="danger">Supprimer</button>\n    <ion-row id="div1" (drop)="dropInDeck($event)" (dragover)="allowDrop($event)" class="deck">\n        <ion-col *ngFor="let card of cardsListDeck; let i = index" col-2>\n            <div *ngIf="card === null; else CardBlock">\n                <p>{{i+1}}</p>\n            </div>\n            <ng-template #CardBlock>\n                <img src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/sprite2.png" alt="" />\n            </ng-template>\n        </ion-col>\n    </ion-row>\n    <div class="add-filter">\n        <button ion-button full (click)="displayFilters()">Ajouter des filtres</button>\n    </div>\n    <ion-row id="div2" (drop)="dropInCardsList($event)" (dragover)="allowDrop($event)" class="list-cards">\n        <ion-col *ngFor="let card of display_cards; let i = index" col-2 draggable="true" (dragstart)="drag($event, card, i)" id="drag1">\n            <img src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/sprite2.png" alt="" />\n            <ion-badge color="secondary" item-end>{{card.Number}}</ion-badge>\n        </ion-col>\n    </ion-row>\n    <div class="add-filter">\n        <button ion-button full (click)="saveDeck()">Enregistrer</button>\n    </div>\n    <div class="filter-black-screen" id="filter-black-screen" (click)="hideFilters()"></div>\n    <div class="filter-container" id="filters">\n        <h2 class="filters-title">Filtres</h2>\n        <ion-list>\n            <ion-item>\n                <ion-label>Type</ion-label>\n                <ion-select [(ngModel)]="type" (ionChange)="onChangeFilter($event)">\n                    <ion-option *ngFor="let value of types_list" value="{{value}}">{{value}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item>\n                <ion-label>Rareté</ion-label>\n                <ion-select [(ngModel)]="rarity" (ionChange)="onChangeFilter($event)">\n                    <ion-option *ngFor="let rar of rarities_list; let i = index" value="{{i}}">{{rar}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <ion-list>\n            <ion-item>\n                <ion-label>Coût</ion-label>\n                <ion-select [(ngModel)]="cost" (ionChange)="onChangeFilter($event)">\n                    <ion-option value="-1">Tous</ion-option>\n                    <ion-option *ngFor="let val of [0, 100, 200, 300, 400, 500, 600, 700, 800]" value="{{val}}">{{val}}</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n        <button ion-button full (click)="hideFilters()">Fermer</button>\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/create-modify-deck/create-modify-deck.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_cards_cards__["a" /* CardsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_deck_deck__["a" /* DecksProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_heros_heros__["a" /* HerosProvider */]])
], CreateModifyDeckPage);

//# sourceMappingURL=create-modify-deck.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecksListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_modify_deck_create_modify_deck__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_deck_deck__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_heros_heros__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Page

// Providers


var DecksListPage = (function () {
    function DecksListPage(deckProvider, navCtrl, navParams, events, menuCtrl, tabs, herosProvider) {
        this.deckProvider = deckProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.menuCtrl = menuCtrl;
        this.tabs = tabs;
        this.herosProvider = herosProvider;
        this.decks = [];
        this.createModifyPush = __WEBPACK_IMPORTED_MODULE_2__create_modify_deck_create_modify_deck__["a" /* CreateModifyDeckPage */];
        this.ModifyParams = [];
        this.createParams = [];
        this.herosDeck = [];
        this.heros = [];
    }
    DecksListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DecksListPage');
    };
    DecksListPage.prototype.ngOnInit = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //to modify -----------------------------
        this.heros = this.herosProvider.getAll();
        //---------------------------------------
        if (this.currentUser != null) {
            this.getDecks();
        }
        for (var i = 0; i < this.heros.length; i += 1) {
            this.createParams.push({ deck: null, hero: this.heros[i] });
        }
    };
    DecksListPage.prototype.ionViewDidEnter = function () {
        this.tabs.setTabbarHidden(true);
        this.events.publish('menu:hide');
        this.menuCtrl.enable(false);
    };
    DecksListPage.prototype.ionViewWillLeave = function () {
        this.tabs.setTabbarHidden(false);
        this.events.publish('menu:display');
        this.menuCtrl.enable(true);
    };
    DecksListPage.prototype.getDecks = function () {
        var _this = this;
        if (this.currentUser.token != undefined && this.currentUser.token != null && this.currentUser.token != "") {
            this.deckProvider.getByUserId(this.currentUser.token)
                .subscribe(function (results) {
                _this.decks = results;
                for (var i = 0; i < _this.heros.length; i += 1) {
                    _this.herosDeck.push({
                        hero: _this.heros[i],
                        decks: []
                    });
                }
                for (var i = 0; i < _this.decks.length; i += 1) {
                    for (var j = 0; j < _this.herosDeck.length; j += 1) {
                        if (_this.herosDeck[j].hero.ID === _this.decks[i].Hero_id) {
                            _this.herosDeck[j].decks.push(_this.decks[i]);
                            _this.ModifyParams.push({ deck: _this.decks[i], hero: _this.herosDeck[j].hero });
                        }
                    }
                }
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('no current user');
        }
    };
    return DecksListPage;
}());
DecksListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-decks-list',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/decks-list/decks-list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>decks</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-row *ngFor="let hero_deck of herosDeck; let h = index">\n        <ion-col>\n            <img src="{{hero_deck.hero.Image}}" alt="{{hero_deck.hero.Name}}" />\n        </ion-col>\n        <ion-col>\n            <ion-row>\n                <ion-col *ngFor="let deck of hero_deck.decks; let i = index" [navPush]="createModifyPush" [navParams]="ModifyParams[i]">\n                    <p>{{deck.Name}}</p>\n                </ion-col>\n                <ion-col>\n                    <button ion-button primary [navPush]="createModifyPush" [navParams]="createParams[h]">+</button>\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/decks-list/decks-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_deck_deck__["a" /* DecksProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__providers_heros_heros__["a" /* HerosProvider */]])
], DecksListPage);

//# sourceMappingURL=decks-list.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shop_shop__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forge_forge__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__ = __webpack_require__(231);
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
    function MainPage(navCtrl, navParams, menuCtrl, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.events = events;
        this.home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.shop = __WEBPACK_IMPORTED_MODULE_3__shop_shop__["a" /* ShopPage */];
        this.forge = __WEBPACK_IMPORTED_MODULE_4__forge_forge__["a" /* ForgePage */];
        this.rank = __WEBPACK_IMPORTED_MODULE_5__ranking_ranking__["a" /* RankingPage */];
        this.isDisplayed = true;
        events.subscribe('menu:hide', function () {
            _this.isDisplayed = false;
        });
        events.subscribe('menu:display', function () {
            _this.isDisplayed = true;
        });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    MainPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    return MainPage;
}());
MainPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-main',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/main/main.html"*/'<ion-header class="main-header" *ngIf="isDisplayed">\n    <ion-navbar color="transparent" id="main_header">\n        <ion-title>\n            <button ion-button icon-only clear color="orange" (click)="openMenu()">\n                <ion-icon name="menu"></ion-icon>\n            </button>\n            <img alt="logo" height="40" src="../assets/imgs/logo_sc.png" class="logo" />\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-tabs class="tabs-icon">\n    <ion-tab tabIcon="home" [root]="home"></ion-tab>\n    <ion-tab tabIcon="hammer" [root]="forge"></ion-tab>\n    <ion-tab tabIcon="cart" [root]="shop"></ion-tab>\n    <ion-tab tabIcon="podium" [root]="rank"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/main/main.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], MainPage);

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modify_profile_modify_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(55);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], ParametersPage);

//# sourceMappingURL=parameters.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModifyProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ModifyProfilePage);

//# sourceMappingURL=modify-profile.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_email_validator__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_email_validator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_email_validator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(55);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SubscribePage);

//# sourceMappingURL=subscribe.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_news_news__ = __webpack_require__(109);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_news_news__["a" /* NewsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], NewsPage);

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/card/card.module": [
		593,
		10
	],
	"../pages/cards-list/cards-list.module": [
		594,
		9
	],
	"../pages/create-modify-deck/create-modify-deck.module": [
		595,
		8
	],
	"../pages/decks-list/decks-list.module": [
		596,
		7
	],
	"../pages/heros-deck/heros-deck.module": [
		598,
		0
	],
	"../pages/login/login.module": [
		603,
		6
	],
	"../pages/main/main.module": [
		597,
		5
	],
	"../pages/modify-profile/modify-profile.module": [
		599,
		4
	],
	"../pages/news/news.module": [
		600,
		3
	],
	"../pages/parameters/parameters.module": [
		601,
		2
	],
	"../pages/subscribe/subscribe.module": [
		602,
		1
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
webpackAsyncContext.id = 200;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameters_parameters__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_news_news__ = __webpack_require__(109);
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
    function HomePage(NewsProvider, UserProvider, navCtrl, navParams, menuCtrl) {
        this.NewsProvider = NewsProvider;
        this.UserProvider = UserProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
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
            _this.topics.reverse();
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
        selector: 'page-home',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/home/home.html"*/'<ion-content class="nomargin">\n    <div class="title">\n        <div class="orange-divider">\n            <div class="third upper">\n                <div class="tiny-orange-call-out">\n                </div>\n            </div>\n        </div>\n        <ion-title class="title-text">NEWS</ion-title>\n    </div>\n    <div class="news-card" *ngIf="params != []">\n        <ion-card responsive-sm wrap *ngFor="let item of topics; let i = index" [navPush]="pushNews" [navParams]="params[i]">\n            <div class="img-news"><img src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/{{item.Slug}}" /></div>\n            <div class="news-informations">\n                <ion-card-title>{{ item.Title }}</ion-card-title>\n                <p [innerHTML]="item.Description"></p>\n            </div>\n        </ion-card>\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_news_news__["a" /* NewsProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_booster_booster__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cards_cards__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//providers



var ShopPage = (function () {
    function ShopPage(navCtrl, navParams, tabs, UserProvider, boosterProvider, cardsProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabs = tabs;
        this.UserProvider = UserProvider;
        this.boosterProvider = boosterProvider;
        this.cardsProvider = cardsProvider;
        this.userInformations = [];
        this.extensions = [
            { name: "Terra", sprite: "../assets/imgs/testBooster.png" },
            { name: "Luna", sprite: "../assets/imgs/testBooster.png" },
            { name: "Black Hole", sprite: "../assets/imgs/testBooster.png" },
            { name: "Nova", sprite: "../assets/imgs/testBooster.png" },
            { name: "Star", sprite: "../assets/imgs/testBooster.png" },
            { name: "Glass Hole", sprite: "../assets/imgs/testBooster.png" },
            { name: "Centorius", sprite: "../assets/imgs/testBooster.png" },
        ];
        this.boosterPayment = "../assets/imgs/testBooster.png";
        this.namePayment = "Name";
    }
    ShopPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopPage');
    };
    ShopPage.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.cardsProvider.getAll()
            .subscribe(function (res) {
            _this.allCards = res;
        }, function (error) {
            console.log(error);
        });
        this.UserProvider.getInformations(this.currentUser.token)
            .subscribe(function (userInformations) {
            _this.userInformations = userInformations;
        }, function (error) {
            console.log(error);
        });
        this.boosterCards = [];
    };
    ShopPage.prototype.isConfirmPayment = function (index) {
        this.boosterPayment = this.extensions[index].sprite;
        this.namePayment = this.extensions[index].name;
        var booster = document.getElementById("booster_" + index.toString());
        var paymentBox = document.getElementById("confirm_payment");
        var box = document.getElementById("box");
        var nameBlock = document.getElementById("name_block");
        var cancelPayment = document.getElementById("cancelPayment");
        var validPayment = document.getElementById("validPayment");
        var boosterPayment = document.getElementById("booster_payment");
        var pos = booster.getBoundingClientRect();
        var paymentBoxHeight = pos.bottom - pos.top;
        var boxMarginTop = paymentBoxHeight / 2;
        paymentBox.style.top = pos.top.toString() + "px";
        paymentBox.style.left = pos.left.toString() + "px";
        paymentBox.style.width = (pos.right - pos.left).toString() + "px";
        box.style.height = (paymentBoxHeight / 2).toString() + "px";
        box.style.marginTop = boxMarginTop.toString() + "px";
        nameBlock.style.top = (boxMarginTop * 0.85).toString() + "px";
        var blackScreen = document.getElementById("confirm-black-screen");
        blackScreen.style.display = "block";
        paymentBox.style.display = "block";
        var posPayment = paymentBox.getBoundingClientRect();
        var paymentWidth = posPayment.right - posPayment.left;
        var diffWidth = (window.innerWidth * 0.5882) - paymentWidth;
        var diffTop = (window.innerHeight * 0.2564) - posPayment.top;
        var diffLeft = ((window.innerWidth - (window.innerWidth * 0.5882)) / 2) - posPayment.left;
        var value = 0;
        var idInterval = setInterval(frame, 1, paymentBox, paymentWidth, diffWidth, diffTop, diffLeft, posPayment, box, nameBlock, boosterPayment, cancelPayment, validPayment);
        function frame(paymentBox, paymentWidth, diffWidth, diffTop, diffLeft, posPayment, box, nameBlock, boosterPayment, cancelPayment, validPayment) {
            if (value <= 50) {
                value += 1;
                paymentBox.style.width = (paymentWidth + (value * 2 * (diffWidth / 100))).toString() + "px";
                if (diffTop < 0) {
                    paymentBox.style.top = (posPayment.top - (value * 2 * ((diffTop * (-1)) / 100))).toString() + "px";
                }
                else if (diffTop > 0) {
                    paymentBox.style.top = (posPayment.top + (value * 2 * (diffTop / 100))).toString() + "px";
                }
                if (diffLeft < 0) {
                    paymentBox.style.left = (posPayment.left - (value * 2 * ((diffLeft * (-1)) / 100))).toString() + "px";
                }
                else if (diffLeft > 0) {
                    paymentBox.style.left = (posPayment.left + (value * 2 * (diffLeft / 100))).toString() + "px";
                }
                paymentBox.style.height = boosterPayment.clientHeight.toString() + "px";
                box.style.height = (paymentBox.offsetHeight / 2).toString() + "px";
                box.style.marginTop = (paymentBox.offsetHeight / 4).toString() + "px";
                nameBlock.style.top = ((paymentBox.offsetHeight / 4) * 0.85).toString() + "px";
                cancelPayment.style.top = (paymentBox.offsetHeight * 0.7075).toString() + "px";
                validPayment.style.top = (paymentBox.offsetHeight * 0.7075).toString() + "px";
            }
            else {
                clearInterval(idInterval);
            }
        }
    };
    ShopPage.prototype.cancelPayment = function () {
        var paymentBox = document.getElementById("confirm_payment");
        paymentBox.style.display = "none";
        var blackScreen = document.getElementById("confirm-black-screen");
        blackScreen.style.display = "none";
    };
    ShopPage.prototype.buyBooster = function () {
        var _this = this;
        this.boosterProvider.buy(this.currentUser.token)
            .subscribe(function (res) {
            _this.openBooster(res);
        }, function (error) {
            console.log(error);
        });
        this.UserProvider.getInformations(this.currentUser.token)
            .subscribe(function (userInformations) {
            _this.userInformations = userInformations;
            console.log(_this.userInformations);
        }, function (error) {
            console.log(error);
        });
    };
    ShopPage.prototype.openBooster = function (booster) {
        this.boosterCards = [];
        for (var i = 0; i < booster.length; i += 1) {
            this.boosterCards.push(this.getCard(booster[i]));
        }
        this.boosterAppear();
    };
    ShopPage.prototype.getCard = function (card_id) {
        for (var i = 0; i < this.allCards.length; i += 1) {
            if (this.allCards[i].ID === card_id) {
                return this.allCards[i];
            }
        }
        return null;
    };
    ShopPage.prototype.boosterAppear = function () {
        this.tabs.setTabbarHidden(true);
        //to delete
        if (this.boosterCards.length === 0) {
            for (var i = 0; i < 6; i += 1) {
                this.boosterCards.push(this.getCard(1));
            }
        }
        //----------------------------------------------
        var paymentBox = document.getElementById("confirm_payment");
        var boosterBlock = document.getElementById("booster");
        boosterBlock.classList.add("show");
        boosterBlock.style.opacity = "1";
        var boosterImg = document.getElementById("booster-img");
        boosterImg.style.top = paymentBox.style.top;
        boosterImg.style.left = paymentBox.style.left;
        boosterImg.style.width = paymentBox.style.width;
        this.cancelPayment();
        this.drawLine();
    };
    ShopPage.prototype.drawLine = function () {
        var lineOpenBooster = document.getElementById("line_open_booster");
        var value = 0;
        var idInterval = setInterval(frame, 5, lineOpenBooster, this);
        function frame(lineOpenBooster, func) {
            if (value < 53) {
                value += 1;
                lineOpenBooster.style.width = value.toString() + '%';
            }
            else {
                clearInterval(idInterval);
                func.boosterDesappear();
            }
        }
    };
    ShopPage.prototype.boosterDesappear = function () {
        var boosterBlock = document.getElementById("booster");
        var value = 100;
        var idInterval = setInterval(frame, 10, boosterBlock, this);
        function frame(boosterBlock, func) {
            if (value > 0) {
                value -= 1;
                boosterBlock.style.opacity = (value / 100).toString();
            }
            else {
                clearInterval(idInterval);
                boosterBlock.classList.remove("show");
                var lineOpenBooster = document.getElementById("line_open_booster");
                lineOpenBooster.style.width = '0%';
                func.cardsAppear();
            }
        }
    };
    ShopPage.prototype.cardsAppear = function () {
        var cardsBlock = document.getElementById("cards_list");
        cardsBlock.classList.add("show");
        var buttonClose = document.getElementById("close-button-animation");
        buttonClose.style.display = "block";
        var value = 0;
        var idInterval = setInterval(frame, 10, cardsBlock, this);
        var cards0Block = document.getElementById("card_0");
        var cards1Block = document.getElementById("card_1");
        var cards2Block = document.getElementById("card_2");
        var cards3Block = document.getElementById("card_3");
        var cards4Block = document.getElementById("card_4");
        var cards5Block = document.getElementById("card_5");
        cards0Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        cards1Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        cards2Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        cards3Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        cards4Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        cards5Block.style.marginTop = (0.32 * window.innerHeight).toString() + "px";
        function frame(cardsBlock, func) {
            if (value <= 100) {
                value += 1;
                cardsBlock.style.opacity = (value / 100).toString();
            }
            else {
                clearInterval(idInterval);
                func.splitCards();
            }
        }
    };
    ShopPage.prototype.splitCards = function () {
        var screenHeight = window.innerHeight;
        var header = document.getElementById("main_header");
        var headerHeight = header.offsetHeight;
        var closeButton = document.getElementById("close-button-animation");
        var closeButtonHeight = closeButton.offsetHeight;
        var cardHeight = (screenHeight - (headerHeight + closeButtonHeight)) / 3;
        var initPos = (0.32 * window.innerHeight);
        var cards0Block = document.getElementById("card_0");
        var cards1Block = document.getElementById("card_1");
        var cards2Block = document.getElementById("card_2");
        var cards3Block = document.getElementById("card_3");
        var cards4Block = document.getElementById("card_4");
        var cards5Block = document.getElementById("card_5");
        var value = 0;
        var idInterval = setInterval(frame, 10, cards0Block, cards1Block, cards2Block, cards3Block, cards4Block, cards5Block, cardHeight, headerHeight, initPos);
        function frame(cards0Block, cards1Block, cards2Block, cards3Block, cards4Block, cards5Block, cardHeight, headerHeight, initPos) {
            if (value < 100) {
                value += 1;
                cards0Block.style.width = (48 - (value * 0.18)).toString() + '%';
                cards1Block.style.width = (48 - (value * 0.18)).toString() + '%';
                cards2Block.style.width = (48 - (value * 0.18)).toString() + '%';
                cards3Block.style.width = (48 - (value * 0.18)).toString() + '%';
                cards4Block.style.width = (48 - (value * 0.18)).toString() + '%';
                cards5Block.style.width = (48 - (value * 0.18)).toString() + '%';
                //top cards
                var diff = initPos - headerHeight - 10;
                //card 0
                cards0Block.style.marginLeft = (26 - (value * 0.16)).toString() + '%';
                cards0Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
                //card 1
                cards1Block.style.marginLeft = (26 + (value * 0.34)).toString() + '%';
                cards1Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
                //middle cards
                diff = initPos - (headerHeight + cardHeight + 10);
                //card 2
                cards2Block.style.marginLeft = (26 - (value * 0.16)).toString() + '%';
                cards2Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
                //card 3
                cards3Block.style.marginLeft = (26 + (value * 0.34)).toString() + '%';
                cards3Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
                //bottom cards
                diff = initPos - (headerHeight + (cardHeight * 2) + 10);
                //card 4
                cards4Block.style.marginLeft = (26 - (value * 0.16)).toString() + '%';
                cards4Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
                //card 5
                cards5Block.style.marginLeft = (26 + (value * 0.34)).toString() + '%';
                cards5Block.style.marginTop = (initPos - (value * (diff / 100))).toString() + "px";
            }
            else {
                clearInterval(idInterval);
            }
        }
    };
    ShopPage.prototype.rotateCard = function (num) {
        var cardsBlock = document.getElementById("card_" + num);
        var value = 0;
        var idInterval = setInterval(frame, 10, cardsBlock);
        function frame(cardsBlock, func) {
            if (value < 100) {
                value += 1;
                if (value === 50) {
                    cardsBlock.src = "http://localhost:3000/articles/sprite2.png";
                }
                if (value >= 50) {
                    cardsBlock.style.transform = 'rotateY(' + (180 - (value * 1.8)).toString() + 'deg)';
                }
                else {
                    cardsBlock.style.transform = 'rotateY(' + (value * 1.8).toString() + 'deg)';
                }
            }
            else {
                clearInterval(idInterval);
            }
        }
    };
    ShopPage.prototype.closeAnimation = function () {
        var cardsBlock = document.getElementById("cards_list");
        cardsBlock.classList.remove("show");
        var buttonClose = document.getElementById("close-button-animation");
        buttonClose.classList.remove("show");
        this.tabs.setTabbarHidden(false);
        var cards0Block = document.getElementById("card_0");
        var cards1Block = document.getElementById("card_1");
        var cards2Block = document.getElementById("card_2");
        var cards3Block = document.getElementById("card_3");
        var cards4Block = document.getElementById("card_4");
        var cards5Block = document.getElementById("card_5");
        cards0Block.style.transform = null;
        cards0Block.style.marginLeft = null;
        cards0Block.style.marginTop = null;
        cards0Block.style.width = null;
        cards0Block.src = "http://localhost:3000/articles/back.png";
        cards1Block.style.transform = null;
        cards1Block.style.marginLeft = null;
        cards1Block.style.marginTop = null;
        cards1Block.style.width = null;
        cards1Block.src = "http://localhost:3000/articles/back.png";
        cards2Block.style.transform = null;
        cards2Block.style.marginLeft = null;
        cards2Block.style.marginTop = null;
        cards2Block.style.width = null;
        cards2Block.src = "http://localhost:3000/articles/back.png";
        cards3Block.style.transform = null;
        cards3Block.style.marginLeft = null;
        cards3Block.style.marginTop = null;
        cards3Block.style.width = null;
        cards3Block.src = "http://localhost:3000/articles/back.png";
        cards4Block.style.transform = null;
        cards4Block.style.marginLeft = null;
        cards4Block.style.marginTop = null;
        cards4Block.style.width = null;
        cards4Block.src = "http://localhost:3000/articles/back.png";
        cards5Block.style.transform = null;
        cards5Block.style.marginLeft = null;
        cards5Block.style.marginTop = null;
        cards5Block.style.width = null;
        cards5Block.src = "http://localhost:3000/articles/back.png";
    };
    return ShopPage;
}());
ShopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shop',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/shop/shop.html"*/'<ion-content>\n    <div class="title">\n        <div class="orange-divider">\n            <div class="third upper">\n                <div class="tiny-orange-call-out">\n                </div>\n            </div>\n        </div>\n        <ion-title class="title-text">BOUTIQUE</ion-title>\n    </div>\n    <div class="gold-user">‡ {{userInformations.Gold}}</div>\n    <!--<button ion-button full (click)="buyBooster()" class="buy-button">Acheter</button>-->\n    <ion-row class="extension">\n        <ion-col col-4 class="item" *ngFor="let extension of extensions; let i = index" (click)="isConfirmPayment(i)">\n            <img src="{{extension.sprite}}" alt="booster" class="booster-img" id="booster_{{i}}" />\n            <div class="name-block">\n                <div class="name">{{extension.name}}</div>\n                <div class="corner-upper-left"></div>\n                <div class="corner-upper-right"></div>\n                <div class="corner-bottom-right"></div>\n                <div class="corner-bottom-left"></div>\n            </div>\n        </ion-col>\n    </ion-row>\n    <div class="confirm-black-screen" id="confirm-black-screen"></div>\n    <div class="confirm-payment" id="confirm_payment">\n        <img src="{{boosterPayment}}" alt="booster" class="booster-img" id="booster_payment" />\n        <div class="name-block" id="name_block">\n            <div class="name">{{namePayment}}</div>\n            <div class="corner-upper-left"></div>\n            <div class="corner-upper-right"></div>\n            <div class="corner-bottom-right"></div>\n            <div class="corner-bottom-left"></div>\n        </div>\n        <div class="box" id="box">\n            <div class="text">\n                <span>Voulez-vous acheter ce booster pour  ‡ 200?<br/>‡ {{userInformations.Gold}} → ‡ {{userInformations.Gold - 200}}</span>\n            </div>\n            <div class="foot">\n                <div class="name-block cancel" id="cancelPayment" (click)="cancelPayment()">\n                    <div class="name">Annuler</div>\n                    <div class="corner-upper-left"></div>\n                    <div class="corner-upper-right"></div>\n                    <div class="corner-bottom-right"></div>\n                    <div class="corner-bottom-left"></div>\n                </div>\n                <div class="name-block valid" id="validPayment" (click)="buyBooster()">\n                    <div class="name">Acheter</div>\n                    <div class="corner-upper-left"></div>\n                    <div class="corner-upper-right"></div>\n                    <div class="corner-bottom-right"></div>\n                    <div class="corner-bottom-left"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div id="booster" class="booster-block">\n        <img src="../assets/imgs/testBooster.png" alt="booster" class="booster-img" id="booster-img" />\n        <div class="line" id="line_open_booster"></div>\n    </div>\n    <div id="cards_list" class="cards-list">\n        <img *ngFor="let card of boosterCards; let i = index" src="http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/articles/back.png" alt="card-{{i}}" id="card_{{i}}" class="cards-booster" (click)="rotateCard(i)" />\n    </div>\n    <div class="name-block close-button-animation" id="close-button-animation" (click)="closeAnimation()">\n        <div class="name">Fermer</div>\n        <div class="corner-upper-left"></div>\n        <div class="corner-upper-right"></div>\n        <div class="corner-bottom-right"></div>\n        <div class="corner-bottom-left"></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/shop/shop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_booster_booster__["a" /* BoosterProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cards_cards__["a" /* CardsProvider */]])
], ShopPage);

//# sourceMappingURL=shop.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoosterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
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




var BoosterProvider = (function () {
    function BoosterProvider(http) {
        this.http = http;
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
    }
    BoosterProvider.prototype.buy = function (token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            add_headers.append('Authorization', token);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: add_headers });
            _this.http.post(_this.apiUrl + "booster/buy", null, options)
                .toPromise()
                .then(function (res) {
                res = res.json();
                console.log(res);
                if (res["results"] != undefined) {
                    res = res["results"];
                    observer.next(res["cards"]);
                }
                else {
                    observer.next(null);
                }
                observer.complete();
            }, function (error) {
                console.log(error);
                observer.next(null);
                observer.complete();
            });
        });
    };
    return BoosterProvider;
}());
BoosterProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], BoosterProvider);

//# sourceMappingURL=booster.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_list_cards_list__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decks_list_decks_list__ = __webpack_require__(141);
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
    function ForgePage(tabs, navCtrl, navParams) {
        this.tabs = tabs;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cardsPage = __WEBPACK_IMPORTED_MODULE_2__cards_list_cards_list__["a" /* CardsListPage */];
        this.decksPage = __WEBPACK_IMPORTED_MODULE_3__decks_list_decks_list__["a" /* DecksListPage */];
    }
    ForgePage.prototype.ngOnInit = function () {
    };
    ForgePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgePage');
    };
    ForgePage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.tabs.setTabbarHidden(false);
    };
    return ForgePage;
}());
ForgePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forge',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/forge/forge.html"*/'<ion-content>\n    <button ion-button full [navPush]="cardsPage" class="list-button cards">Liste des cartes</button>\n    <button ion-button full [navPush]="decksPage" class="list-button decks">Liste des decks</button>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/forge/forge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Tabs */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ForgePage);

//# sourceMappingURL=forge.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
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
        selector: 'page-ranking',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/ranking/ranking.html"*/'<ion-content padding>\n    <p style="color: white; width: 100%; text-align:center;">Cette page n\'est pas encore disponible. Nous vous informerons de sa disponibilité dès que possible.</p>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/ranking/ranking.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], RankingPage);

//# sourceMappingURL=ranking.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_subscribe_subscribe__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_parameters_parameters__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_shop_shop__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forge_forge__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_ranking_ranking__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_modify_profile_modify_profile__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_news_news__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cards_list_cards_list__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_card_card__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_decks_list_decks_list__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_create_modify_deck_create_modify_deck__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_user_user__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_news_news__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_cards_cards__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_deck_deck__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_heros_heros__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_booster_booster__ = __webpack_require__(229);
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
            __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cards_list_cards_list__["a" /* CardsListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_decks_list_decks_list__["a" /* DecksListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_modify_deck_create_modify_deck__["a" /* CreateModifyDeckPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {
                scrollAssist: false,
                autoFocusAssist: false
            }, {
                links: [
                    { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cards-list/cards-list.module#CardsListPageModule', name: 'CardsListPage', segment: 'cards-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/create-modify-deck/create-modify-deck.module#CreateModifyDeckPageModule', name: 'CreateModifyDeckPage', segment: 'create-modify-deck', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/decks-list/decks-list.module#DecksListPageModule', name: 'DecksListPage', segment: 'decks-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/heros-deck/heros-deck.module#HerosDeckPageModule', name: 'HerosDeckPage', segment: 'heros-deck', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/modify-profile/modify-profile.module#ModifyProfilePageModule', name: 'ModifyProfilePage', segment: 'modify-profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/parameters/parameters.module#ParametersPageModule', name: 'ParametersPage', segment: 'parameters', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/subscribe/subscribe.module#SubscribePageModule', name: 'SubscribePage', segment: 'subscribe', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
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
            __WEBPACK_IMPORTED_MODULE_17__pages_news_news__["a" /* NewsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_cards_list_cards_list__["a" /* CardsListPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_card_card__["a" /* CardPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_decks_list_decks_list__["a" /* DecksListPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_create_modify_deck_create_modify_deck__["a" /* CreateModifyDeckPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_24__providers_news_news__["a" /* NewsProvider */],
            __WEBPACK_IMPORTED_MODULE_25__providers_cards_cards__["a" /* CardsProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_deck_deck__["a" /* DecksProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_heros_heros__["a" /* HerosProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_booster_booster__["a" /* BoosterProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero(ID, Faction_id, Name, Image) {
        this.factions = [
            { ID: 1, Name: 'Neutral' },
            { ID: 2, Name: 'Alliance' },
            { ID: 3, Name: 'Horde' }
        ];
        this.ID = ID;
        this.Faction_id = Faction_id;
        this.Name = Name;
        this.Image = Image;
    }
    Hero.prototype.getFaction = function () {
        for (var i = 0; i < this.factions.length; i += 1) {
            if (this.factions[i].ID === this.Faction_id) {
                return this.factions[i].Name;
            }
        }
        return null;
    };
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deck; });
var Deck = (function () {
    function Deck(ID, Player_id, Deck_id, Hero_id, Name, Card_1_id, Card_2_id, Card_3_id, Card_4_id, Card_5_id, Card_6_id, Card_7_id, Card_8_id, Card_9_id, Card_10_id, Card_11_id, Card_12_id, Card_13_id, Card_14_id, Card_15_id, Card_16_id, Card_17_id, Card_18_id, Card_19_id, Card_20_id) {
        this.ID = ID;
        this.Player_id = Player_id;
        this.Deck_id = Deck_id;
        this.Hero_id = Hero_id;
        this.Name = Name;
        this.Card_1_id = Card_1_id;
        this.Card_2_id = Card_2_id;
        this.Card_3_id = Card_3_id;
        this.Card_4_id = Card_4_id;
        this.Card_5_id = Card_5_id;
        this.Card_6_id = Card_6_id;
        this.Card_7_id = Card_7_id;
        this.Card_8_id = Card_8_id;
        this.Card_9_id = Card_9_id;
        this.Card_10_id = Card_10_id;
        this.Card_11_id = Card_11_id;
        this.Card_12_id = Card_12_id;
        this.Card_13_id = Card_13_id;
        this.Card_14_id = Card_14_id;
        this.Card_15_id = Card_15_id;
        this.Card_16_id = Card_16_id;
        this.Card_17_id = Card_17_id;
        this.Card_18_id = Card_18_id;
        this.Card_19_id = Card_19_id;
        this.Card_20_id = Card_20_id;
    }
    return Deck;
}());

//# sourceMappingURL=deck.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
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
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
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

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
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
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
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

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(55);
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


var MyApp = (function () {
    function MyApp(appCtrl, platform, statusBar, splashScreen, events, auth, UserProvider) {
        var _this = this;
        this.appCtrl = appCtrl;
        this.events = events;
        this.auth = auth;
        this.UserProvider = UserProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.userInformations = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initMenu();
        });
        events.subscribe('user:login', function () {
            _this.initMenu();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        this.initMenu();
    };
    MyApp.prototype.initMenu = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser === null) {
            return;
        }
        this.UserProvider.getInformations(this.currentUser.token)
            .subscribe(function (userInformations) {
            _this.userInformations = userInformations;
        }, function (error) {
            console.log(error);
        });
    };
    MyApp.prototype.disconnectEvent = function () {
        var _this = this;
        this.auth.logout().subscribe(function (allowed) {
            if (allowed) {
                _this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/app/app.html"*/'<ion-menu [content]="content">\n\n    <ion-content class="menu">\n\n        <img src="assets/imgs/avatar.jpg" alt="avatar" class="avatar" />\n\n        <div class="username text" *ngIf="currentUser != null">{{currentUser.name}}</div>\n\n        <div class="lvl text" *ngIf="currentUser != null">LVL : {{userInformations.Part}}</div>\n\n        <ion-list>\n\n            <button margin-top ion-button clear full class="text">Modifier profil</button>\n\n\n\n            <button margin-top ion-button clear full class="text">Centre de connaissance</button>\n\n            <button ion-button clear full class="text">Aide & Assistance</button>\n\n            <button ion-button clear full class="text">Contactez-nous</button>\n\n\n\n            <button margin-top ion-button clear full class="text">Conditions d\'utilisation</button>\n\n            <button ion-button clear full class="text">Politique de confidentialité</button>\n\n            <button ion-button clear full class="text">Mentions légales</button>\n\n            <button ion-button clear full class="text">Remerciements</button>\n\n\n\n            <button ion-button margin-top clear class="text" (click)="disconnectEvent()" full>Déconnexion</button>\n\n        </ion-list>\n\n    </ion-content>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subscribe_subscribe__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(56);
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
    function LoginPage(nav, auth, events, menuCtrl, userProvider, alertCtrl, loadingCtrl) {
        this.nav = nav;
        this.auth = auth;
        this.events = events;
        this.menuCtrl = menuCtrl;
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
                _this.events.publish('user:login');
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
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menuCtrl.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menuCtrl.enable(true);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/login/login.html"*/'<ion-content class="bg">\n    <ion-card>\n        <ion-card-header>\n            Space Battle Arena\n        </ion-card-header>\n        <ion-card-content>\n            <ion-list>\n                <form #registerForm="ngForm" (ngSubmit)="login(registerForm.form.value)" novalidate>\n                    <ion-item>\n                        <ion-input type="text" placeholder="Nom d\'utilisateur" name="username" [(ngModel)]="registerCredentials.email" required></ion-input>\n                    </ion-item>\n                    <ion-item>\n                        <ion-input type="password" placeholder="Mot de passe" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                    </ion-item>\n                    <button ion-button block outline color="light" type="submit" [disabled]="!registerForm.form.valid">Connexion</button>\n                    <button ion-button (click)="showErrorForgottenId()" clear full color="light">Mot de passe oublié ?</button>\n                </form>\n            </ion-list>\n        </ion-card-content>\n    </ion-card>\n    <button class="bottom" id="subscribeButton" (click)="registrationEvent()" ion-button clear color="light">Pas de compte ? Inscrivez-vous</button>\n</ion-content>'/*ion-inline-end:"/mnt/d/EspaceDeTravail/Epitech/SBA_git/HybridApplication/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(44);
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




var CardsProvider = (function () {
    function CardsProvider(http) {
        this.http = http;
        this.apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
    }
    CardsProvider.prototype.getCardsPlayer = function (token) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            var add_headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            add_headers.append('Authorization', token);
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: add_headers });
            _this.http.get(_this.apiUrl + "cards/", options)
                .toPromise()
                .then(function (res) {
                var results = res.json();
                if (results['results'] != undefined) {
                    results = results['results'];
                    if (results['cards'] != undefined) {
                        observer.next(results['cards']);
                    }
                    else {
                        observer.next([]);
                    }
                }
                else {
                    observer.next([]);
                }
                observer.complete();
            }, function (error) {
                console.log(error);
                observer.next([]);
                observer.complete();
            });
        });
    };
    CardsProvider.prototype.getAll = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            _this.http.get(_this.apiUrl + "cards/getAll")
                .toPromise()
                .then(function (res) {
                var results = res.json();
                if (results['results'] != undefined) {
                    results = results['results'];
                    if (results['data'] != undefined) {
                        observer.next(results['data']);
                    }
                    else {
                        observer.next([]);
                    }
                }
                else {
                    observer.next([]);
                }
                observer.complete();
            }, function (error) {
                console.log(error);
                observer.next([]);
                observer.complete();
            });
        });
    };
    return CardsProvider;
}());
CardsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CardsProvider);

//# sourceMappingURL=cards.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.js.map