import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SharedService } from './shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private sharedService: SharedService, 
    private router: Router){
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
   translate.use('en');

   // Waiting for language change event to occur
   this.sharedService.languageRespond().subscribe(res =>{
      translate.use(res.lang);
   });
   router.navigateByUrl("home");
  }
}
