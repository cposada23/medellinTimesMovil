import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../auth/auth';
/*
  Generated class for the EventosProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class EventosProvider {
  url: string = 'http://127.0.0.1:8000/api';
  token: string;
  constructor(public http: Http, private authProvider: AuthProvider) {
    authProvider.getToken().subscribe(token => {
      this.token = token.token;
    });
  }
  getEventos(): Observable<any> {
    return this.http.get(this.url + '/eventos').map(res => res.json());
  }

  getNoticiaPorId(idevento): Observable<any> {
    return this.http.get(`${this.url}/eventos/${idevento}`).map(res => res.json());
  }

  deleteNoticia (idevento): Observable<any> {
    // return this.http.get(`${this.url}/noticias/${idNoticia}`).map(res => res.json());
    return this.http.delete(`${this.url}/eventos/${idevento}`).map(res => res.json());
  }

  crearNoticia (evento) {
    return this.http.post(`${this.url}/eventos`, evento).map(res => res.json());
  }

  editarEvento (evento, id) {
    return this.http.patch(`${this.url}/eventos/${id}`, evento).map(res=>res.json());
  }
}
