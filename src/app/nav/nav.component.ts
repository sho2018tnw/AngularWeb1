import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  s
  isExpanded: boolean;

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.isExpanded = false;
  }

  toggleNav() {
    this.isExpanded = !this.isExpanded;
  }

  switchToEnglish() {
    this.languageService.switchToEnglish();
  }

  switchToJapanese() {
    this.languageService.switchToJapanese();
  }
}
