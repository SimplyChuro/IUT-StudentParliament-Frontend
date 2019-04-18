import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';

import * as Cookie from 'js-cookie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  }),
  withCredentials: true
};


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { 

  }

  public logIn(model) {
    return this.http.post(environment.apiUrl + environment.apiV1 + "login", model, httpOptions);
  }

  public logOut() {
    return this.http.post(environment.apiUrl + environment.apiV1 + "logout", httpOptions);
  }

  public getTokenCookie() {
    return Cookie.get("AUTH_TOKEN");
  }

  public getTokenLocalStorage() {
    return window.localStorage.getItem("AUTH_TOKEN");
  }  

  public setTokenCookie(token: string) {
    Cookie.set("AUTH_TOKEN", token);
  }

  public setTokenLocalStorage(token: string) {
    window.localStorage.setItem("AUTH_TOKEN", token);
  }

  public putTokenCookie(token: string) {
    Cookie.remove("AUTH_TOKEN");
    Cookie.set("AUTH_TOKEN", token);
  }

  public putTokenLocalStorage(token: string) {
    window.localStorage.removeItem("AUTH_TOKEN");
    window.localStorage.setItem("AUTH_TOKEN", token);
  }

  public deleteTokenCookie() {
    Cookie.remove("AUTH_TOKEN");
  }

  public deleteTokenLocalStorage() {
    window.localStorage.removeItem("AUTH_TOKEN");
  }

  public isLoggedIn() {
    if((Cookie.get("AUTH_TOKEN") != null) || (window.localStorage.getItem("AUTH_TOKEN") !== null)) {
      return true;
    } else {
      return false;
    }
  }

  public getLanguage() {
    if(window.localStorage.getItem("lang") === null) {
      window.localStorage.setItem("lang", "ba");
    }

    return window.localStorage.getItem("lang");
  }

  public setLanguage(language) {
    window.localStorage.setItem("lang", language);
  }

}