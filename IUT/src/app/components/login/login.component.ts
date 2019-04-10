import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public model: LoginInterface = {
	id: 0,
	email: "",
	password: ""
  };

  constructor(private session: SessionService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {

  }

  public login() {
    var _this = this;

    this.session.logIn(this.model).subscribe((response) => {
      _this.router.navigate(["/home"]);
    });
  }

}

export interface LoginInterface {
    id: Number;
	email: String;
    password: String;
}