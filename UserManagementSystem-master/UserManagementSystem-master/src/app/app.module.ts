import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { NopageComponent } from './nopage/nopage.component';
import { UserListComponent } from './user-list/user-list.component';
import { OptionsComponent } from './options/options.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    NavbarComponent,
    SuccessComponent,
    NopageComponent,
    UserListComponent,
    OptionsComponent,
    AdduserComponent,
    DeleteuserComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
