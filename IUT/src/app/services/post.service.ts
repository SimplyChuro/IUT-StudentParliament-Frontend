import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Csrf-Token': '61ZwHIHbEjSAB421ToXNQLcamDZtH3TtlOasdf365dasd31CA3UKn'
  }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { 

  }

  public getAll(min, max) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post, {
      params: {
        min: min,
        max: max
      }
    });
  }
  
  public getSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/size");
  }

  public getPageSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/page/size");
  }

  public get(id) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.post + "/" + id);
  }

  public create(post) {
    return this.http.post(environment.apiUrl + environment.apiV1 + environment.post, post, httpOptions);
  }

  public update(post, id) {
    return this.http.put(environment.apiUrl + environment.apiV1 + environment.post + "/" + id, post, httpOptions);
  }

  public delete(id) {
    return this.http.delete(environment.apiUrl + environment.apiV1 + environment.post + "/" + id, httpOptions);
  }

}