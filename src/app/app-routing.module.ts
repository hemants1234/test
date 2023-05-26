import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import {LoginDetailsComponent} from './components/login-details/login-details.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { FoodListingComponent } from './components/food-listing/food-listing.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo:'login-details'},
  
  {path: 'food-listing' , component: FoodListingComponent},
  {path: 'login-details' , component: LoginDetailsComponent},
  {path: 'signup-details' , component: SignupDetailsComponent},
	{path: 'profile-details' , component: ProfileDetailsComponent},
	{path: 'profile-input' , component: ProfileInputComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
