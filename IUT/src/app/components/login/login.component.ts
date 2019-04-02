import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public model: Object = {};

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