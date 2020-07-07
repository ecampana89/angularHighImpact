import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
  validationError: boolean = false;


  constructor(private _http:HttpClient,
              private _errorHandlerService: ErrorHandlerService,
              private _router:Router           
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit():void{this.postLogin({username:this.inputUser, password:this.inputPassword})}

  postLogin(data:any):any{
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  
    try{
      this._http.post(this.loginUrl, data,  { headers, responseType: 'text'})
      .subscribe((data: any) =>  {
        console.log('data: '+data);
        if(data){
          this.token = data;
          console.log('token: '+this.token);
          localStorage.setItem('token', data);
            this.redirectSearch();
      
        }else{
            this.validationError = true
        }
      },(error: HttpErrorResponse) => {
        this.validationError = true
        console.log(error);
      })
    }catch(e){
      this.validationError = true
      console.log(e);
    }
  }

  redirectSearch(){
    this._router.navigate(['/search'])
  }



}
