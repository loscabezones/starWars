import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShipsComponent } from './components/ships/ships.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';

// router
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app.routes';

// service
import { LoginService } from './services/login.service';
import { LoginGuardService } from './services/login-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShipsComponent,
    FormErrorsComponent,
    HeaderComponent,
    CardsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    LoginGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
