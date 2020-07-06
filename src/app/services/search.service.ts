import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

private searchs: any[] = [];
searchUrl: string ="";
token: string;
filterUrl:string = '';

  constructor(private _http:HttpClient) {
   }

   getSearchs(data:string,filter1:string, filter2:string) {
    console.log(data);
    console.log(filter1);
    console.log(filter2);
    this.searchUrl = "http://vps-1575977-x.dattaweb.com:8080/atscom/atm";
    this.getAtms(data,filter1,filter2);

     if(this.searchs)
     return this.searchs
  }


  getAtms(data:string,filter1:string,filter2:string):void{
      if(localStorage.getItem('token')){
          this.token = localStorage.getItem('token');
      }
    const headers = new HttpHeaders().set('Authorization', this.token);
  
    this.filterUrl += this.searchUrl + '?q=';
    if(!data){
      //default
      data='';
    }
    this.filterUrl+=data+ '&fields=';
    if(filter1 && filter2){
      this.filterUrl+='street,city';
    }else if(filter1){
      this.filterUrl+='street';
    }else{
      this.filterUrl+='city';
    }
    console.log(this.filterUrl);
    
     this._http.get<any>(
      this.filterUrl,  
      { headers}
    ).subscribe(data=> {
      console.log(data);
     //console.log('data get: '+JSON.stringify(data));
      if(data){
      this.searchs = data;
      //console.log(this.searchs);
      }
      this.filterUrl = "";
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
