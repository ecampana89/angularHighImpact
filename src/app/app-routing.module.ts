import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { AtmComponent } from './components/atm/atm.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent },
  {path: 'search', component:SearchComponent },
  {path: 'thanks', component:ThanksComponent },
  {path: 'atm/:id', component:AtmComponent },
  {path: '**',pathMatch:'full', redirectTo:'login'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
