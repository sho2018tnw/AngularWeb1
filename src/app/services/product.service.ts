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


  ]

}
