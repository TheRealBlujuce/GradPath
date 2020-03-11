import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './core/app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// materials
import { CustomMaterialModule } from './core/material.module';

// pages
import { HeaderComponent } from './header/header.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { LoginComponent } from './login/app-login.component';
import { PlannerComponent } from './planner/planner.component';
import { CourseListComponent } from './course-list/course-list.component';
import { SemesterComponent } from './semester/semester.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderNavComponent,
    LoginComponent,
    PlannerComponent,
    CourseListComponent,
    SemesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
