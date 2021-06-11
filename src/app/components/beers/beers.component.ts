import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeerService } from '../../services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  beers:any[] = [];

  constructor(private router:Router, private _service:BeerService) {


   }

  ngOnInit(){
    this.beers = this._service.getBeers();
  }

  verBeer = (id:number) => {
    
    this.router.navigate(['/beer', id])
   
  }

}
