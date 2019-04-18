import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private session: SessionService,  private route: ActivatedRoute, private router: Router, private translate: TranslateService) {

  }

  ngOnInit() {
    
  }

  public isLoggedIn() {
    return this.session.isLoggedIn();
  }

  public logout() {
    this.session.logOut().subscribe((response) => {

    });
    
    this.session.deleteTokenCookie();
    this.router.navigate(["/home"]);
  }

  public switchLanguage(language: string) {
    this.session.setLanguage(language);
    this.translate.use(language);
  }

}
