import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/app-login.component';
import { PlannerComponent } from '../planner/planner.component';
import { CourseListComponent } from '../course-list/course-list.component';
import {HeaderNavComponent} from '../header-nav/header-nav.component';
import {HeaderComponent} from '../header/header.component';

//import {RegisterComponent} from '../register/register.component';


const routes: Routes = [
  { path: 'planner', component: PlannerComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'course-list', component: CourseListComponent },
  { path : '', component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
