import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loggedIn;

  constructor(private session : SessionService) {

  }

  ngOnInit() {
    this.loggedIn = this.session.isLoggedIn();
  }

}
