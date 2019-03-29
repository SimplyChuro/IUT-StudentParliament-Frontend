import { Injectable } from '@angular/core';
import * as Cookie from 'js-cookie';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  public getTokenCookie() {
    return Cookie.get("AUTH_TOKEN");
  }

  public getTokenLocalStorage() {
    return window.localStorage.getItem("AUTH_TOKEN");
  }  

  public setTokenCookie(token : string) {
    Cookie.set("AUTH_TOKEN", token);
  }

  public setTokenLocalStorage(token : string) {
    window.localStorage.set("AUTH_TOKEN", token);
  }

  public putTokenCookie(token : string) {
    Cookie.remove("AUTH_TOKEN");
    Cookie.set("AUTH_TOKEN", token);
  }

  public putTokenLocalStorage(token : string) {
    window.localStorage.removeItem("AUTH_TOKEN");
    window.localStorage.set("AUTH_TOKEN", token);
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

}