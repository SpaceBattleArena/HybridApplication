import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Topic } from "../../data/topic";

import "rxjs/Rx"
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeProvider {
    private url = "http://localhost:8100";  // Web api URL
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {}

    // Get the data from the json file
    getTopic(): Promise<Topic[]> {
        // Put the file in the repo www
        return this.http.get('./data/json/home-page.json')
            .toPromise()
            .then(res => <Topic[]>res.json());
    }

}
