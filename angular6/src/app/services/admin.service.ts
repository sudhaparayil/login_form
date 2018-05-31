import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Config } from '../config/config';

import { HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
@Injectable()
export class AdminService {

  serviceUrl: string;
  authToken: any;
  admin: any;
  constructor(private http: Http,private _http: HttpClient,private config: Config) {
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
    // let headers = this.setHeaderWithAuthorization();
    return this._http.post(this.serviceUrl + 'getregister',data).pipe(
      map((response: Response) => response.json()));
    // return this.http.post(this.serviceUrl + 'getregister', data,{ headers: headers })
    // .pipe(map(res => res.json()));
      // .map(res => res.json());

  }
  
}
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

 
// @Injectable()
// export class ShowPostService {
 
//     constructor(private http: HttpClient){
 
//     }
     
//     getAllPost(){

//         return this.http.post('/api/post/getAllPost',{})
        
//     }
 
// }