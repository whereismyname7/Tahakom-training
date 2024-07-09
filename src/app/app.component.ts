import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skills-assessment';

  //public? is it a good approch
  constructor(private router: Router,public translate: TranslateService) {
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang && browserLang.match(/en|ar/) ? browserLang : 'en');
  }

  get showLanguageButtons(): boolean {
    return this.router.url == '/'; 
  }

  switchLang() {
    const currentLang = this.translate.currentLang;
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    this.translate.use(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  }
  
}
