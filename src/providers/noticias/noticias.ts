import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../auth/auth';

/*
  Generated class for the NoticiasProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NoticiasProvider {
  url: string = 'http://127.0.0.1:8000/api';
  token: string;
  constructor(public http: Http, private authProvider: AuthProvider) {
    authProvider.getToken().subscribe(token => {
      this.token = token.token;
    });
  }
  getNoticias(): Observable<any> {
    return this.http.get(this.url + '/noticias').map(res => res.json());
  }

  getNoticiaPorId(idNoticia): Observable<any> {
    return this.http.get(`${this.url}/noticias/${idNoticia}`).map(res => res.json());
  }

  deleteNoticia (idNoticia): Observable<any> {
    // return this.http.get(`${this.url}/noticias/${idNoticia}`).map(res => res.json());
    return this.http.delete(`${this.url}/noticias/${idNoticia}`).map(res => res.json());
  }

  crearNoticia (noticia) {
    return this.http.post(`${this.url}/noticias`, noticia).map(res => res.json());
  }

  editarNoticia (noticia, id) {
    console.log("noticia", noticia);
    console.log("id", id);
    return this.http.patch(`${this.url}/noticias/${id}`, noticia).map(res=>res.json());
  }

}
