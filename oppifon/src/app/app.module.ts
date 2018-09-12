import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserHomeComponent } from './user-home/user-home.component';

import { AppRoutingModule } from './/app-routing.module';
<<<<<<< HEAD
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
=======
import { SignUpComponent } from './sign-up/sign-up.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
import { SearchComponent } from './search/search.component';
>>>>>>> 779fdb7331738f59f7206ead761798c5fe7f241c



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserHomeComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent
=======
    SignUpComponent,
    ExpertProfileComponent,
    SearchComponent
>>>>>>> 779fdb7331738f59f7206ead761798c5fe7f241c
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
