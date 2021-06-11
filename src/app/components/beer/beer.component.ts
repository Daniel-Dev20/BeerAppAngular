import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BeerService } from '../../services/beers.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beer:any = {};
  constructor(private activatedRoute: ActivatedRoute, private _service:BeerService) { 

    this.activatedRoute.params.subscribe(params => {

      this.beer = this._service.getBeer(params.id);
   
    })

  }

  ngOnInit(): void {
  }

}
