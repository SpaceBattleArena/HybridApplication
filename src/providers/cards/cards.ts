import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//data
import { Card } from '../../data/card';

@Injectable()
export class CardsProvider {
  private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: Http) {}

  public getCardsPlayer(token: string) {
    return Observable.create(observer => {
        let add_headers = new Headers();
        add_headers.append('Authorization', token);
        let options = new RequestOptions({ headers: add_headers });
        this.http.get(this.apiUrl + "cards/", options)
            .toPromise()
            .then(
                res => {
                    let results = res.json();
                    if (results['results'] != undefined) {
                        results = results['results'];
                        if (results['cards'] != undefined) {
                            observer.next(results['cards']);
                        } else {
                            observer.next([]);
                        }
                    } else {
                        observer.next([]);
                    }
                    observer.complete();
                },
                error => {
                    console.log(error);
                    observer.next([]);
                    observer.complete();
                }
            );
    });
  }

  public getAll() {
      return Observable.create(observer => {
          this.http.get(this.apiUrl + "cards/getAll")
            .toPromise()
            .then(
                res => {
                    let results = res.json();
                    if (results['results'] != undefined) {
                        results = results['results'];
                        if (results['data'] != undefined) {
                            observer.next(results['data']);
                        } else {
                            observer.next([]);
                        }
                    } else {
                        observer.next([]);
                    }
                    observer.complete();
                },
                error => {
                    console.log(error);
                    observer.next([]);
                    observer.complete();
                }
            );
      });
  }
}
