import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './components/beers/beers.component';
import { AboutComponent } from './components/about/about.component';
import { BodyComponent } from './components/body/body.component';
import { BeerComponent } from './components/beer/beer.component';
import { SearchBeerComponent } from './components/search-beer/search-beer.component';

const routes: Routes = [
  {path: 'home', component:BodyComponent},
  {path: 'beers', component:BeersComponent},
  {path: 'about', component:AboutComponent},
  {path: 'beer/:id', component:BeerComponent},
  {path: 'search/:termino', component:SearchBeerComponent},
  {path: '**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
