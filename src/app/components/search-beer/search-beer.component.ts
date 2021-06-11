import { Component, OnInit } from '@angular/core';
import { BeerService } from '../../services/beers.service';
import { Beer } from '../../../data-beer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-beer',
  templateUrl: './search-beer.component.html',
  styleUrls: ['./search-beer.component.css']
})
export class SearchBeerComponent implements OnInit {

  termino:string = "";
  beers:Beer[] = [];
  constructor(private _service:BeerService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      this.beers = this._service.searchBeers(params.termino)
    })
  }

}
