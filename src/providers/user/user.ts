import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: Http) {}

  public getInformations(token: string) {
    if (token === null) {
      return Observable.throw("An Error occured when reconnecting");
    } else {
      return Observable.create(observer => {
        let access = false;
        let add_headers = new Headers();
        add_headers.append('Authorization', token);
        add_headers.append('Accept', 'application/json');
        add_headers.append('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
        add_headers.append('Access-Control-Allow-Origin', '*');
        add_headers.append('Access-Control-Allow-Headers', "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
        let options = new RequestOptions({ headers: add_headers });
        this.http.get(this.apiUrl + "player/getInformation", options)
          .toPromise()
          .then(
            res => {
              let results = res.json();
              if (results['results'] != null) {
                results = results['results'];
                if (results['status'] === 200) {
                    access = true;
                }
              }
              observer.next(access);
              observer.complete();
            },
            error => {
              console.log(error);
              observer.next(false);
              observer.complete();
            }
          )
      });
    }
  }
}
