import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginUrl: string = "http://vps-1575977-x.dattaweb.com:8080/atscom/login";
  token: string;
  inputUser: string;
  inputPassword: string;


  constructor(private _http:HttpClient,
              private _errorHandlerService: ErrorHandlerService,
              private _router:Router           
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit():void{this.postLogin({username:this.inputUser, password:this.inputPassword})}

  postLogin(data:any):any{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  
     this._http.post(
      this.loginUrl, 
      data, 
      { headers, responseType: 'text'}
    ).subscribe(data=> {
      console.log('data: '+data);
      if(data){
      this.token = data;
      console.log('token: '+this.token);
      localStorage.setItem('token', data);
      this.redirectSearch();
      }
    })
  }

  redirectSearch(){
    this._router.navigate(['/search'])
  }



}
