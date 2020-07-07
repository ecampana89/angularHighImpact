import { Component, OnInit } from '@angular/core';

import { SearchService, ATM } from '../../services/search.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  searchs:ATM[] = [];

  options: any = {}
  token: string;

  constructor( private _searchService: SearchService,
               private _router:Router
    ) { 
      if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
      console.log(this.token);
      }else{
        this._router.navigate(['/login']);
      }
  }

  ngOnInit(): void {
    
    
  }


async onSubmit({searchInput,inlineCheckbox1,inlineCheckbox2}) {

debugger;

if(this.token){
  this.searchs = await this._searchService.getSearchs(searchInput,inlineCheckbox1,inlineCheckbox2);
    console.log('respuesta: ',JSON.stringify(this.searchs));
  }else{
    this._router.navigate(['/login']);
  }
}



  verMapa(idx:number){
    this._router.navigate(['/atm',idx])
  }

 


}
