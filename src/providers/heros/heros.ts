import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, BaseRequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//data
import { Hero } from '../../data/hero';

@Injectable()
export class HerosProvider {
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: Http) {}

  public getAll() {
      return [
          new Hero(1, 1, 'Yugi', 'http://localhost:3000/articles/champ-1.png'),
          new Hero(2, 2, 'Kaiba', 'http://localhost:3000/articles/champ-2.png'),
          new Hero(3, 1, 'Jaden', 'http://localhost:3000/articles/champ-3.png'),
      ]
  }
}
