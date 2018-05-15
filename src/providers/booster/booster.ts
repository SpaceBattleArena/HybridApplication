import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//data
import { Card } from '../../data/card';

@Injectable()
export class BoosterProvider {
  private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: Http) {}

  public buy(token: string) {
    return Observable.create(observer => {
        let add_headers = new Headers();
        add_headers.append('Authorization', token);
        let options = new RequestOptions({ headers: add_headers });
        this.http.post(this.apiUrl + "booster/buy", null, options)
            .toPromise()
            .then(
                res => {
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
                },
                error => {
                    console.log(error);
                    observer.next(null);
                    observer.complete();
                }
            );
    });
  }
}
