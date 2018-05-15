import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, BaseRequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//data
import { Deck } from '../../data/deck';

@Injectable()
export class DecksProvider {
  private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: Http) {}

  public getByUserId(token: string) {
    return Observable.create(observer => {
        let add_headers = new Headers();
        add_headers.append('Authorization', token);
        add_headers.append('Accept', 'application/json');
        add_headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        add_headers.append('Access-Control-Allow-Origin', '*');
        add_headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        let options = new RequestOptions({ headers: add_headers });
        this.http.get(this.apiUrl + "deck/", options)
          .toPromise()
          .then(res => {
            let results = res.json();
            console.log(results);
            if (results['decks'] != undefined) {
                observer.next(results['decks']);
            } else {
                observer.next([]);
            }
            observer.complete();
          });
    });
  }

  public create(deck: Deck, token) {
    return Observable.create(observer => {
      let access = false;
      let add_headers = new Headers();
      add_headers.append('Authorization', token);

      let datas = {
        hero_id: deck.Hero_id.toString(),
        name: deck.Name.toString(),
        deck: [deck.Card_1_id, deck.Card_2_id, deck.Card_3_id, deck.Card_4_id, deck.Card_5_id,
        deck.Card_6_id, deck.Card_7_id, deck.Card_8_id, deck.Card_9_id, deck.Card_10_id,
        deck.Card_11_id, deck.Card_12_id, deck.Card_13_id, deck.Card_14_id, deck.Card_15_id,
        deck.Card_16_id, deck.Card_17_id, deck.Card_18_id, deck.Card_19_id, deck.Card_20_id]
      }

      let options = new RequestOptions();
      options.headers = add_headers;
      this.http.post(this.apiUrl + 'deck/create', datas, options)
        .toPromise()
        .then(
          res => {
            res = res.json();
            console.log(res);
            if (res['results']['status'] === 201) {
              observer.next('ok');
            } else if (res['results']['status'] === 403) {
              observer.next(res['results']['error']);
            }
            observer.complete();
          }
        );
    })
  }

  public modify(id: Number, deck: Deck, token) {
    return Observable.create(observer => {
      let access = false;
      let add_headers = new Headers();
      add_headers.append('Authorization', token);

      let datas = {
        hero_id: deck.Hero_id.toString(),
        name: deck.Name.toString(),
        deck: [deck.Card_1_id, deck.Card_2_id, deck.Card_3_id, deck.Card_4_id, deck.Card_5_id,
        deck.Card_6_id, deck.Card_7_id, deck.Card_8_id, deck.Card_9_id, deck.Card_10_id,
        deck.Card_11_id, deck.Card_12_id, deck.Card_13_id, deck.Card_14_id, deck.Card_15_id,
        deck.Card_16_id, deck.Card_17_id, deck.Card_18_id, deck.Card_19_id, deck.Card_20_id]
      }

      let options = new RequestOptions();
      options.headers = add_headers;
      this.http.put(this.apiUrl + 'deck/' + id.toString() + '/update', datas, options)
        .toPromise()
        .then(
          res => {
            res = res.json();
            console.log(res);
            if (res['results']['status'] === 201) {
              observer.next('ok');
            } else if (res['results']['status'] === 403) {
              observer.next(res['results']['error']);
            }
            observer.complete();
          }
        );
    })
  }

  public delete() {
    
  }
}
