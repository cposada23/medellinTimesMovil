import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {
  url: string = 'http://127.0.0.1:8000/api';
  constructor(public http: Http) {
  }

  getToken() {
    return this.http.get(`${this.url}/csrf`).map(res => res.json());
  }

}
