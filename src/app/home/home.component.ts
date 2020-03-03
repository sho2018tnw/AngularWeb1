import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  host: { class:'content'},
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  textEnglish = {
    firstName: "Shuai Zhong",
    secondName: "Zhong",
    job: "Game Programmer & Web Developer",
    welcome: "I am a Tokyo based Software Engineer with a main focus on game programming and full-stack web development.Having spent multiple years living in China,America and Japan has given me a chance to experience enourmous personal growth so i can keep challenging myself.",
    portfolio: "View Portfolio",
    about: "About Me"
  }

  textJapanese = {
    firstName: "鍾 帥",
    secondName: "帥",
    job: "ゲームプログラマー・ウェブ開発者",
    welcome: "プログラミングの知識と経験を持って、特にはゲームプログラミングとフルスタックWEBエンジニアリングが熱中です。数年中国、アメリカ、日本に住んだことあるため、自己成長を出きっていつも自分をチャレンジします。",
    portfolio: "ポートフォリオを見る",
    about: "自己紹介"
  }


  constructor(public languageService: LanguageService, private router: Router,) { }

  ngOnInit() {
    this.languageService.activePage = 0;

  }
  ngOnDestroy() {

  }
  navigatePortfolio() {
    this.router.navigateByUrl('/portfolio');
    //scroll to top of page
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  navigateAbout() {
    this.router.navigateByUrl('/about');
    //scroll to top of page
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
