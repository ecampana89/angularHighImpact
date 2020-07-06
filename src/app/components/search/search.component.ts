import { Component, OnInit } from '@angular/core';

import { SearchService, ATM } from '../../services/search.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchs:ATM[] = [];

  constructor( private _searchService: SearchService,
               private _router:Router
    ) { 
  
  }

  ngOnInit(): void {
    this.searchs = this._searchService.getSearchs();
  }

  verMapa(idx:number){
    this._router.navigate(['/atm',idx])
  }

}
