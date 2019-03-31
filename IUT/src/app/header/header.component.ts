import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn;

  constructor(private session : SessionService,  private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    this.loggedIn = this.session.isLoggedIn();
  }

  public logout() {
    this.session.deleteTokenCookie();
    this.router.navigate(["/home"]);
    this.ngOnInit();
  }

}
