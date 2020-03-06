import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { ProductService } from 'src/app/services/product.service';
import { LanguageService } from 'src/app/services/language.service';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
//import { SeoService } from '../services/seo.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    PortfolioComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  providers: [
    ProductService,
    LanguageService,
    //SeoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

