import { Component, OnInit } from '@angular/core';
import { Beer, beers } from '../../../data-beer';
import { BeerService } from '../../services/beers.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  beer:any[] = [];
  constructor(private _service:BeerService) { 

  }

  ngOnInit(): void {
  }

}
