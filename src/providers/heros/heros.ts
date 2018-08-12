import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, BaseRequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//data
import { Hero } from '../../data/hero';

@Injectable()
export class HerosProvider {
  private apiUrl = 'http://ec2-13-59-89-177.us-east-2.compute.amazonaws.com:3000/';

  constructor(private http: Http) {}

  public getAll() {
      return [
          new Hero(1, 1, 'Human', this.apiUrl + 'articles/hero_icon1.png'),
          new Hero(2, 2, 'Rebel', this.apiUrl + 'articles/hero_icon2.png'),
          new Hero(3, 1, 'Cyborg', this.apiUrl + 'articles/hero_icon3.png'),
      ]
  }
}
