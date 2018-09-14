import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent } from './user-home/user-home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchComponent } from './search/search.component';
import { ExpertProfileComponent } from './expert-profile/expert-profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'userhome', component: UserHomeComponent},
  { path: 'signup', component: SignUpComponent },
  { path: 'search', component: SearchComponent },
  { path: 'expert', component: ExpertProfileComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


