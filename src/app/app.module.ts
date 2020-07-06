import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { AppRoutingModule } from './app-routing.module';
//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { ThanksComponent } from './components/thanks/thanks.component';
//servicios
import { SearchService } from './services/search.service';
import { AtmComponent } from './components/atm/atm.component';

//maps
import { AgmCoreModule } from '@agm/core';

//modulos
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    ThanksComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOWXo33UMzEzq0VmN_SKqcUMSxmFgWIgc'
      /* apiKey is required, unless you are a
      premium customer, in which case you can
      use clientId
      */
    })
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
