import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';
@Injectable()
export class AdminService {

  serviceUrl: string;
  authToken: any;
  admin: any;
  constructor(private http: Http, private config: Config) {
    this.serviceUrl = config.siteUrl + '/admin/';
  }

  setHeader() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  setHeaderWithAuthorization() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return (headers);
  }
  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  getRegister(data) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.post(this.serviceUrl + 'getregister', data,{ headers: headers })
      .map(res => res.json());

  }
  getuser() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + 'alluser',{ headers: headers })
      .map(res => res.json());
  }
  getoneuser(id:any) {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.serviceUrl + "oneuser/" + id, { headers: headers})
      .map(res => res.json());
  }
  logout() {
    let headers = this.setHeaderWithAuthorization();
    return this.http.get(this.config.siteUrl + '/auth/logout',{ headers: headers })
      .map(res => res.json());
  }
}
