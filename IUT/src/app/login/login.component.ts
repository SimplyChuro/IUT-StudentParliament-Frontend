import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http : HttpClient) {

  }

  ngOnInit() {

  }

  public login(email: string, password: string) {
    $.ajax({
      url: environment.apiUrl + environment.apiV1 + "login",
      type: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify({
        email: email,
        password: password
      }),
      xhrFields: {
        withCredentials: true
      },
    });
  }

}

// class Login {

//   email;
//   password;

//   constructor(email : string, password : string) {
//     this.email = email;
//     this.password = password;
//   }

// }