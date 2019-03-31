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
export class PictureService {

  constructor(private http : HttpClient) {

  }

  public getAll(min, max) { 
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture, {
      params: {
        min: min,
        max: max
      }
    });
  }

  public getSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/size");
  }

  public getPageSize() {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/page/size");
  }

  public get(id) {
    return this.http.get(environment.apiUrl + environment.apiV1 + environment.picture + "/" + id);
  }

  public create(picture) {
    return this.http.post(environment.apiUrl + environment.apiV1 + environment.picture, picture, httpOptions);
  }

  public update(picture, id) {
    return this.http.put(environment.apiUrl + environment.apiV1 + environment.picture + "/" + id, picture, httpOptions);
  }

  public delete(id) {
    return this.http.delete(environment.apiUrl + environment.apiV1 + environment.picture + "/" + id, httpOptions);
  }

}