import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    ExpertProfileComponent,
    SearchComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
