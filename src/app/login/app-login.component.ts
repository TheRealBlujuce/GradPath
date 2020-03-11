import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-login',
  templateUrl: '../login/app-login.component.html',
  styleUrls: ['../login/app-login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
username: string;
password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username === 'admin' && this.password === 'admin'){
     this.router.navigate(['planner']);
    } else {
      alert('Invalid credentials');
    }
  }
}

