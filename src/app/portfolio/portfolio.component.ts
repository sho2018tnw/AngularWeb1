import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  products = this.productService.getProducts();
  selectedCategory = "All";

  constructor(public languageService: LanguageService, public productService: ProductService) { }


  ngOnInit() {
    this.languageService.activePage = 1;
  }

  //Set category for filtering products
  setCategories(event) {
    this.products = this.productService.getProducts();
    let desiredCategory: string = event.srcElement.childNodes[0].data;
    this.selectedCategory = desiredCategory;
    if (desiredCategory !== "All") {
      this.products = this.products.filter(product => product.category === desiredCategory);
    }
  }

}
