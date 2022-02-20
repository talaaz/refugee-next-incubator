import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'refugee n->xt';
  subtitle = ""; 
  menu = {};
  body: {};

  
  constructor(
    public translate: TranslateService
  ){
    // Register translation languages
    translate.addLangs(['ar', 'en']);
    // Set default language
    translate.setDefaultLang('ar');

  }  
//Switch language
  translateLanguageTo(lang: string) {
    this.translate.use(lang);
    console.log(lang)
  }


  getTitleString() {
    // asynchronous - gets translations then completes.
    this.translate.get(['TITLE', 'SUBTITLE','MENU', 'BODY',])
      .subscribe(translations => {
        this.title = translations['TITLE'];
        this.subtitle = translations['SUBTITLE'];
        this.menu = translations['MENU']
        this.body = translations['BODY']
       });
  }

}
