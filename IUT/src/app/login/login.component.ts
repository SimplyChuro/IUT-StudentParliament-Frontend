import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Csrf-Token': '61ZwHIHbEjSAB421ToXNQLcamDZtH3TtlOasdf365dasd31CA3UKn'
  }),
  withCredentials: true
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,  private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

  }

  public login(email: string, password: string) {
    var _this = this;
    this.http.post(environment.apiUrl + environment.apiV1 + "login", new Login(email, password), httpOptions).subscribe((response) => {
      _this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
        _this.router.navigate(["/home"]),
      );
    });
  }

}

class Login {

  email;
  password;

  constructor(email : string, password : string) {
    this.email = email;
    this.password = password;
  }

}