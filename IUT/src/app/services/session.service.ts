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
    return Cookie.get("token");
  }

  public getTokenLocalStorage() {
    return window.localStorage.getItem("token");
  }  

  public setTokenCookie(token: string) {
    Cookie.set("token", token);
  }

  public setTokenLocalStorage(token: string) {
    window.localStorage.setItem("token", token);
  }

  public putTokenCookie(token: string) {
    Cookie.remove("token");
    Cookie.set("token", token);
  }

  public putTokenLocalStorage(token: string) {
    window.localStorage.removeItem("token");
    window.localStorage.setItem("token", token);
  }

  public deleteTokenCookie() {
    Cookie.remove("AUTH_TOKEN");
    Cookie.remove("token");
  }

  public deleteTokenLocalStorage() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("AUTH_TOKEN");
  }

  public isLoggedIn() {
    if(((Cookie.get("AUTH_TOKEN") != null) || (window.localStorage.getItem("AUTH_TOKEN") !== null)) && (Cookie.get("token") != null)) {
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