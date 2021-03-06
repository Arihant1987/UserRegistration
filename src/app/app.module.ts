import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ 
  BrowserModule,
  FormsModule,
  NgbModule,
  RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'login', component: LoginComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, RegistrationComponent, HomeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
