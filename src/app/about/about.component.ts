import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  aboutGroups: object[] = [
    {
      headerEN: "Passion for Programming",
      headerJP:"プログラミングに熱情",
      imgPath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583311019/portfolio%20website/about/QQ%E6%88%AA%E5%9B%BE20200304173602_vtkba9.jpg",
      paragraphEN: "As a student who is studying Game Programming in Tokyo and will be graduate in March 2020.Learning <strong> C#,C++,Unity,Unreal Engine </strong> has given me ability to create games and applications,also learing <strong> HTML,CSS,JavaScript,Node.js </strong> give me passion to learn backend development and framework such as <strong>Ruby on Rails,Angular</strong> so i can focus on game programming and full-stack web development.",
      paragraphJP:"東京ネットウエイブ　ゲームプログラマー専攻の学生にとって、在学中学校でC#, C++, PHP, Unity, Unreal Engineなどを学んでいるよりゲームを作れるようになりました。そしてHTML,CSS,JavaScript,Node.jsなどフロントエンド言語を勉強したのでバックエンドにも興味があって、フルスタックエンジニアになるため独学でバックエンドとフレームワークも勉強している。",
    },
    {
      headerEN: "Team Work",
      headerJP: "チームワーク",
      imgPath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583309140/portfolio%20website/about/IMG_9423_wl86yg.jpg",
      paragraphEN: "many things can not leave teamwork.After 5 months of making games with my teammates we get into <strong>Tokyo Game Show 2019</strong> and able to show our games to big companys,professional game programmer and producer so we can improve ourselves and make our project better.",
      paragraphJP: "世の中で色んな事はチームワークと離れないです。5ヶ月でゲームを作って、私たちのゲームは東京ゲームショウ2019に出展しました。そのきっかけで大手企業、プロのプログラマーやプロヂューサーから貴重な意見をもらって、成長になりました。",
    },
    {
      headerEN: "Critical Thinking",
      headerJP: "批判的思考",
      imgPath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583311998/portfolio%20website/about/QQ%E6%88%AA%E5%9B%BE20200304175202_by4bce.jpg",
      paragraphEN: "Before making games we need to think what is good for player what is good for system.Having played video games for many years and also have 1 year experience as a pro esport player has taught me to break games down into numbers and use that knowledge to hone my playstyle.This also greatly comes in handy when creating complicated game mechanics and making a game feel balanced and fair.",
      paragraphJP: "ゲームを作る前にはゲームシステム構成やプレイ方法を考えます。長年にゲームをプレイしている、そしてプロゲーマーにも経験していたため、私にとってはゲームの分析で、すべてのメカニックを徹底的に分かるようになるのは当たり前なこと。その知識を自分のゲーム製作の難易度構成やメカニック面白くすることに不可欠なものだと思う。",
    },
  ]








  ngOnInit() {
    this.languageService.activePage = 2;
    
  }

}
