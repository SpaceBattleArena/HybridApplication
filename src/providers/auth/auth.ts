import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  id: number;
  name: string;
  email: string;
  token: string;

  constructor(id: number, name: string, email: string, token: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
  }
}

@Injectable()
export class AuthProvider {
  currentUser: User;
  private apiUrl = 'http://localhost:3000/';

  constructor(private http: Http) {}

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = false;
        let datas = new URLSearchParams();
        datas.append("email", credentials.email);
        datas.append("password", credentials.password);
        this.http.post(this.apiUrl + 'signin', datas)
          .toPromise()
          .then(
            res => {
              let results = res.json();
              if (results['results'] != undefined && results['results'] != null) {
                results = results['results'];
                if (results != null) {
                  access = (results['token'] != undefined &&
                            results['token'] != null &&
                            results['user'] != undefined &&
                            results['user'] != null);
                  if (access) {
                    this.currentUser = new User(results['user']['Id'],
                                                results['user']['Name'],
                                                results['user']['Email'],
                                                results['token']);
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                  }
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

  public getUserInfo() : User {
    return this.currentUser;
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = false;
        let datas = new URLSearchParams();
        datas.append("email", credentials.email);
        datas.append("password", credentials.password);
        datas.append("first_name", credentials.username);
        datas.append("last_name", credentials.username);
        this.http.post(this.apiUrl + 'signup', datas)
          .toPromise()
          .then(
            res => {
              let results = res.json();
              if (results['message'] != undefined && results['message'] === "Your account has been created successfully") {
                access = true;
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

  public logout() {
    return Observable.create(observer => {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser.token = "";
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      observer.next(true);
      observer.complete();
    });
  }
}
