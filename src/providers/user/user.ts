import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserProvider {
  private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: Http) {}

  public getInformationsAccess(token: string) {
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

  public getInformations(token: string) {
    if (token === null) {
      return Observable.throw("An Error occured when reconnecting");
    } else {
      return Observable.create(observer => {
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
                    observer.next(results['data'][0]);
                } else {
                  observer.next([]);
                }
              }
              observer.complete();
            },
            error => {
              console.log(error);
              observer.next([]);
              observer.complete();
            }
          )
      });
    }
  }
}
