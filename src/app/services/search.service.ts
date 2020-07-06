import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private searchs: any[] = [];
searchUrl: string = "http://vps-1575977-x.dattaweb.com:8080/atscom/atm";
token: string;

  constructor(private _http:HttpClient) {
   }

   getSearchs(data:string) {
      this.getAtms(data);

     if(this.searchs)
    
     return this.searchs
  }


  getAtms(data:string):void{
      if(localStorage.getItem('token')){
          this.token = localStorage.getItem('token');
      }
    const headers = new HttpHeaders().set('Authorization', this.token);
  
    if(!data){
      data='Van';
    }
     this._http.get<any>(
      this.searchUrl+'?q='+data+'&fields=street,city',  
      { headers}
    ).subscribe(data=> {
      console.log(data);
      console.log('data get: '+JSON.stringify(data));
      if(data){
      this.searchs = data;
      console.log(this.searchs);
      }
    })
  }

  getATM(idx:number):ATM {
    return this.searchs[idx];
  }
}

export interface ATM{
    id: string,
        creationDate: string,
        address: {
            id: string,
            creationDate: string,
            street: string,
            housenumber: string,
            postalcode: string,
            city: string,
            geoLocation: {
                id: string,
                creationDate: string,
                lat: string,
                lng: string
            }
        },
        distance: number,
        type: string
}
