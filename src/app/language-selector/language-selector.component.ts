import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.less']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }

}
