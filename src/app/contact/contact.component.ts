import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactTitle: string[]=[
    "Contact Me",
    "連絡先"
  ]

  contactText: string[] = [
    "If you are interested in my work,feel free to hit me up.Also happy to talk about programming.",
    "プロジェクトやプログラミングにお話したい場合ご連絡ください。"
  ]

  contactEmailB: string[] = [
    "Business:shosui2018@gmail.com",
    "ビジネス:shosui2018@gmail.com"
  ]

  contactEmailP: string[] = [
    "Personal:540317405@qq.com",
    "個人的:540317405@qq.com"
  ]



  constructor(public languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.activePage = 3;
  }

}
