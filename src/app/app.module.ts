import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { BeersComponent } from './components/beers/beers.component';
import { AboutComponent } from './components/about/about.component';
import { BeerService } from './services/beers.service';
import { BeerComponent } from './components/beer/beer.component';
import { SearchBeerComponent } from './components/search-beer/search-beer.component';
import { BeerCardComponent } from './components/beer-card/beer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    BeersComponent,
    AboutComponent,
    BeerComponent,
    SearchBeerComponent,
    BeerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BeerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
