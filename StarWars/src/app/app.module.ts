import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShipsComponent } from './components/ships/ships.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';

// router
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app.routes';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShipsComponent,
    FormErrorsComponent,
    HeaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([]),
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
