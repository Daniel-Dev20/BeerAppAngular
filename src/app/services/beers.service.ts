import { Injectable } from '@angular/core';
import { beers, Beer } from '../../data-beer';

@Injectable({
    providedIn: 'root'
})
export class BeerService {
    
    beers:Beer[] = beers;
    
    constructor(){

        console.log('servicio listo para usarse');
    }

    getBeers = () => {
        return this.beers;
    }

    getBeer = (id:number) => {

        return this.beers[id];
    }

    searchBeers = (termino:string):Beer[] => {

        let beersArr:Beer[] = [];

        termino = termino.toLowerCase();

        for(let beer of this.beers){
            
            let nombre = beer.nombre.toLowerCase();

            if(nombre.indexOf(termino) >=0){

                beersArr.push(beer);

            }

        }
        
        return beersArr;
    }
}