import { Component, OnInit } from '@angular/core';
import {I18nConfigService} from '../service/i18n-config.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: 'language-selector.component.html',
  styles: []
})
export class LanguageSelectorComponent implements OnInit {
  i18nConf: I18nConfigService;
  constructor( i18nConf: I18nConfigService) {
    this.i18nConf = i18nConf;
    this.i18nConf.setUpConf();
  }

  ngOnInit() {
  }

}
