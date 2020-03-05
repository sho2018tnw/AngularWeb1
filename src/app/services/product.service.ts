import { Injectable } from '@angular/core';
import { Product } from "../models/product.model";

@Injectable()

export class ProductService {

  projectTags: object[] = [
    //0:Solo
    { tagTextEN: "Solo", tagTextJP: "ソロ", tagClass: "solo-tag" },
    //1:Group
    { tagTextEN: "Group", tagTextJP: "グループ", tagClass: "group-tag" },
    //2:Company
    { tagTextEN: "Company", tagTextJP: "企業", tagClass: "company-tag" }
  ]

  thumbnailpath: string[] = [
    //website
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583400315/portfolio%20website/product%20image/website_bwfzjd.jpg",
    //knockoffsuperhot
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404531/portfolio%20website/product%20image/knock_off_super_hot_tc7qg8.png",
    //fighting waifu
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404360/portfolio%20website/product%20image/fighting_waifu_lg0uci.png",
    //shield boi
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404353/portfolio%20website/product%20image/shield_boi_with_logo_yjbm99.png",
    //furpunk blask
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583400384/portfolio%20website/product%20image/Furpunk_Blast_zav5ov.png",
    //hospital
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401966/portfolio%20website/product%20image/hospital_nuqs0v.png",
  ]

  introTextEN: string[] = [
    //0:website
    "The website you are currently viewing is a <strong>Single Page Application</strong> allowing dynamic navigation and language change through the power of <strong>Angular</strong>. The source code, which is hosted on Github, can be viewed through the link below.",
    //1:knockoffsuperhot
    "<strong>FPS Game</strong> made with <strong>Unity Engine</strong>.Tried to recreat <strong>Super Hot</strong> gameplay by changing inside game time and let player able to throw their weapons just like super hot,also when enemy dead they will drop their weapon so player can pick up weapon after they throw away their own weapon.",
    //2:fighting waifu
    "2D Fighting Game made with <strong>Unity Engine</strong> with a team of 10 students.Just like any other fighting games this game got everything you need,such as <strong>Offline PVP</strong>,<strong>Super system</strong>,<strong>Changing background</strong> and much more.",
    //3:shield boi
    "This <strong>group project</strong> was created using <strong>Unreal Engine 4's</strong> blueprint system and <strong>C++</strong> with a team of programmer only.This was the second <strong>Unreal 4</strong> game we made,Skills reinforced through this project are <strong>UE4 animation state machines</strong>, <strong>animation notifies</strong> and <strong>communication between blueprints and C++</strong>.",
    //4:furpunk blask
    "Co-Op Twin Stick Shooter with a strong emphasis on teamwork. This <strong>group project</strong> was created using <strong>Unreal Engine 4</strong> with a team of 15 students.I was responsible for <strong>game system</strong>, <strong>inside game item</strong>, <strong>enemy system</strong>, <strong>gameplay implementation</strong> and much more.",
    //5:hospital
    "First game made by<strong>Novelsphere</strong>.Classical japanese Visual Novel game with horror element.player need to escape from a hospital by collecting items and find out hint from letters.",

  ]

  introTextJP: string[] = [
    //0:website
    "このポートフォリオウエブサイトは、Angularの力で動的に言語を変えることができて、リーロードせずにナビゲーションができるシングルページアプリケーションです。継続的に更新される、私が完成させたプログラミングプロジェクトのハブです。Githubにアップロードしているソースコードが下のリンクでアクセスできます。",
    //1:knockoffsuperhot
    "自分がSUPER HOTという作品を好きすぎなので再現したいから作りました。ゲーム自体はUnity Engineを使いました。ゲームの特徴のスローモーションを再現するためゲームの時間を調整しました。それ以外銃を投げる、拾いも再現しました。",
    //2:fighting waifu
    "10人のチームでUnity Engineより作ったの2D格闘ゲーム。ゲームの基本がほとんどのプラットフォームファイターと近いが、それ以外特殊な機能もある。例えば、背景を自動で変化する。市販の格闘ゲームの基準に立ちました。",
    //3:shield boi
    "",
    //4:furpunk blask
    "",
    //5:hospital
    "",

  ]

}
