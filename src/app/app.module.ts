import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InMemoryWebApiModule } from "angular-in-memory-web-api"; 
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BackendService } from "./profile-details.service";
import { AppComponent } from './app.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileInputComponent } from './components/profile-input/profile-input.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';
import { SignupDetailsComponent } from './components/signup-details/signup-details.component';
import { FoodListingComponent } from './components/food-listing/food-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProfileInputComponent,
    LoginDetailsComponent,
    SignupDetailsComponent,
    FoodListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    InMemoryWebApiModule.forRoot(BackendService),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
