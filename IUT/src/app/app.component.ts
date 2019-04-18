import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService, private session: SessionService) {
    translate.setDefaultLang(this.session.getLanguage());
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
