import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { SearchService, ATM} from '../../services/search.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styles: ['agm-map { height: 800px; /* height is required */ }']
})
export class AtmComponent  {

  latitude: number;
  longitude:number;
  mapType = 'roadmap';
  zoom: '20';
  

  atm: any = {};

  constructor( private _activatedRoute:ActivatedRoute,
              private _searchService:SearchService
    ) {

    this._activatedRoute.params.subscribe( params => {
        console.log(params)
        console.log(params['id'])
      this.atm =_searchService.getATM(params['id']);
      console.log(this.atm)
      this.latitude = +this.atm.address.geoLocation.lat;
      this.longitude = +this.atm.address.geoLocation.lng;
    })
   }

   


}
