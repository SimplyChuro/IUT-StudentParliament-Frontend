import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService,  private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    
  }

  public isLoggedIn() {
    return this.session.isLoggedIn();
  }

  public logout() {
    this.session.deleteTokenCookie();
    this.session.logOut();
    this.router.navigate(["/home"]);
  }

}
