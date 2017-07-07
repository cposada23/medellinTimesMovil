import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthProvider } from '../auth/auth';
/*
  Generated class for the PublicidadProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PublicidadProvider {

  url: string = 'http://127.0.0.1:8000/api';
  token: string;
  constructor(public http: Http, private authProvider: AuthProvider) {
    authProvider.getToken().subscribe(token => {
      this.token = token.token;
    });
  }
  getPublicidad(): Observable<any> {
    return this.http.get(this.url + '/publicidades').map(res => res.json());
  }

  getPublicidadPorId(idPublicidad): Observable<any> {
    return this.http.get(`${this.url}/publicidades/${idPublicidad}`).map(res => res.json());
  }

  deletePublicidad (idPublicidad): Observable<any> {
    // return this.http.get(`${this.url}/noticias/${idNoticia}`).map(res => res.json());
    return this.http.delete(`${this.url}/publicidades/${idPublicidad}`).map(res => res.json());
  }

  crearPublicidad (publicidad) {
    return this.http.post(`${this.url}/publicidades`, publicidad).map(res => res.json());
  }

  editarPublicidad (publicidad, id) {
    return this.http.patch(`${this.url}/publicidades/${id}`, publicidad).map(res=>res.json());
  }

}
