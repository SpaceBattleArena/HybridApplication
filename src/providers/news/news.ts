import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/Rx"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsProvider {
    private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';
    constructor(private http: Http) {}

    getAll() {
        return Observable.create(observer => {
            this.http.get(this.apiUrl + "article/getAll")
                .toPromise()
                .then(res => {
                    let results = res.json();
                    if (results['results'] != undefined) {
                        results = results['results'];
                    }
                    if (results['data'] != undefined) {
                        observer.next(results['data']);
                    } else {
                        observer.next([]);
                    }
                    observer.complete();
                });
        });
    }

    getById(id: number) {
        return Observable.create(observer => {
            this.http.get(this.apiUrl + "article/"+id.toString())
                .toPromise()
                .then(res => {
                    let results = res.json();
                    if (results['results'] != undefined) {
                        results = results['results'];
                    }
                    if (results['data'] != undefined) {
                        observer.next(results['data'][0]);
                    } else {
                        observer.next([]);
                    }
                    observer.complete();
                });
        });
    }

}
