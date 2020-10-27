import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './ComponentContainer/register/register.component';
import {LoginComponent} from './ComponentContainer/login/login.component';
import { HomePageComponent } from './ComponentContainer/homepage/homepage.component';


const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
