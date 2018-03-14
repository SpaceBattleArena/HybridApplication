import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/Rx"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeProvider {
    private apiUrl = 'http://localhost:3000/';
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

    // Get the data from the json file
    getById(id: number) {
        // Put the file in the repo www
        return this.http.get('./data/json/home-page.json')
            .toPromise()
            .then(res => res.json());
    }

}
