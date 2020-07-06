import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'})
export class NavbarComponent implements OnInit {

  @Output() searchIngresada: EventEmitter<any>;
  searchInput: string;
  inlineCheckbox1:string;
  inlineCheckbox2:string;
  constructor() {
    this.searchIngresada = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onSubmit(){
    

/* console.log(this.searchInput);
console.log(this.inlineCheckbox1);
console.log(this.inlineCheckbox2); */

    this.searchIngresada.emit({searchInput:this.searchInput, inlineCheckbox1:this.inlineCheckbox1,inlineCheckbox2:this.inlineCheckbox2})
  }

}
