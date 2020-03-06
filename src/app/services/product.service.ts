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
    //0website
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583400315/portfolio%20website/product%20image/website_bwfzjd.jpg",
    //1knockoffsuperhot
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404531/portfolio%20website/product%20image/knock_off_super_hot_tc7qg8.png",
    //2fighting waifu
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404360/portfolio%20website/product%20image/fighting_waifu_lg0uci.png",
    //3shield boi
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583404353/portfolio%20website/product%20image/shield_boi_with_logo_yjbm99.png",
    //4furpunk blask
    "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583400384/portfolio%20website/product%20image/Furpunk_Blast_zav5ov.png",
    //5hospital
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
    "プログラマーだけのチームでUnreal Engine 4のblueprint systemとc++を使って作りました。このゲームは二つ目のUnreal Engine 4で作ったのゲームです。ゲームジャンルは3Dアドベンチャー、プレイヤーは敵を倒して、アイテムを集めて、ゴールまでいけるとゲームクリアーになります。",
    //4:furpunk blask
    "Unreal Engine 4を作って制作された、協力アクションツインスティックシューティングゲーム。自分が担当した部分はゲームシステム、ゲームアイテム、エネミーシステム、ゲームプレイの実装、そしてプレイヤーシステム。",
    //5:hospital
    "初めて作ったのゲームですが、ゲームエンジンはNovelsphere、ジャンルはホラーノベルゲーム。プレイヤーは目覚めたの病院の部屋に脱出しなければならない、部屋の中でアイテムと手紙を探して、謎を解けると脱出できます。",

  ]

  toolLogos: Object[] = [
    //0 Csharp
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401373/portfolio%20website/logo/Logo_cSharp_dsclng.png", title: "C#" },
    //1 unity
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401373/portfolio%20website/logo/Logo_unity_juqw1r.png", title: "Unity" },
    //2 Angular
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401373/portfolio%20website/logo/Logo_angular_hgn4mi.png", title: "Angular" },
    //3 Unreal 4
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401396/portfolio%20website/logo/UE4simple_dhnvcd.png", title: "Unreal Engine 4" },
    //4 typescript
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401373/portfolio%20website/logo/Logo_Typescript_jlyzk6.png", title: "TypeScript" },
    //5 C++
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401400/portfolio%20website/logo/CPPLogo_tvj4uj.png", title: "C++" },
    //6 Netlifiy
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401373/portfolio%20website/logo/Logo_Netlifiy_fpy9es.png", title: "Netlify" },
    //7 JaveScript
    { imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583476186/portfolio%20website/logo/Logo_Js_yt6e6c.png", title: "JavaScript" },
  ]

  actionButtons: Object[] = [
    
    //0website github
    { link: "https://github.com/sho2018tnw/AngularWeb1", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401614/portfolio%20website/action%20button/Button_Github_enwlze.png" },

    //1fighting waifu download
    { link: "https://gamejolt.com/games/FightingWaifu/473812", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401693/portfolio%20website/action%20button/Button_Gamejolt_cqfzef.png" },

    //2knockoffsuperhot download
    { link: "https://gamejolt.com/games/knockoff11/473817", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401693/portfolio%20website/action%20button/Button_Gamejolt_cqfzef.png" },

    //3shield boi download
    { link: "https://drive.google.com/file/d/1LC3eL6ajTRwm7othSPnBL3_IzfenATqX/view?usp=sharing", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401614/portfolio%20website/action%20button/Button_Project_lxwm3b.png" },

    //4Furpunk Blast Video
    { link: "https://www.youtube.com/watch?v=afrle4UgOlQ&feature=youtu.be", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401614/portfolio%20website/action%20button/WatchVideoButton_txwidb.png" },
    //5Furpunk Blast GameJolt
    { link: "https://gamejolt.com/games/furpunk-blast/395295", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401693/portfolio%20website/action%20button/Button_Gamejolt_cqfzef.png" },

    //6hospital download
    { link: "https://drive.google.com/file/d/1HlW15Jmn_bZXHDVfwnLdqAEo7kCwBMlm/view?usp=sharing", imagePath: "https://res.cloudinary.com/dpuggdmgx/image/upload/v1583401614/portfolio%20website/action%20button/Button_Project_lxwm3b.png" },


  ]


  public products: Product[] = [

    new Product(
      "Furpunk Blast", "furpunk-blast", "Game",
      this.thumbnailpath[4], this.introTextEN[4], this.introTextJP[4],
      [this.toolLogos[3]],
      [this.actionButtons[4], this.actionButtons[5]],
      this.projectTags[1],
    ),

    new Product(
      "Shield Boi", "shield-boi", "Game",
      this.thumbnailpath[3], this.introTextEN[3], this.introTextJP[3],
      [this.toolLogos[5], this.toolLogos[3]],
      [this.actionButtons[3]],
      this.projectTags[1],
    ),

    new Product(
      "Excell Project Genesis", "excell-project-genesis", "Game",
      this.thumbnailpath[2], this.introTextEN[2], this.introTextJP[2],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[1]],
      this.projectTags[1],
    ),

    new Product(
      "Portfolio Website", "portfolio-website", "Web",
      this.thumbnailpath[0], this.introTextEN[0], this.introTextJP[0],
      [this.toolLogos[4], this.toolLogos[2], this.toolLogos[6]],
      [this.actionButtons[0]],
      this.projectTags[0],
    ),

    new Product(
      "Knock Off Super Hot", "knock-off-super-hot", "Game",
      this.thumbnailpath[1], this.introTextEN[1], this.introTextJP[1],
      [this.toolLogos[0], this.toolLogos[1]],
      [this.actionButtons[2]],
      this.projectTags[1],
    ),

    new Product(
      "5th", "5th", "Game",
      this.thumbnailpath[5], this.introTextEN[5], this.introTextJP[5],
      [this.toolLogos[7]],
      [this.actionButtons[6]],
      this.projectTags[1],
    ),
  ]

  getProducts() {
    return this.products.slice();
  }


}
