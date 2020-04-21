import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../Services/Auth.service';
import { AlertifyService } from 'src/Services/alertify.service';
import {  Router } from '@angular/router';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(public service: AuthServiceService, private alertify: AlertifyService,private routelink: Router) { }

  ngOnInit() {
  }
  login(){
    this.service.login(this.model).subscribe(res => {
     this.alertify.success('Logged in successfully');
    }, err => {
      this.alertify.error(err);
    },()=>{
      this.routelink.navigate(['/member']);
    });

  }

  loggedIn(){
    return this.service.loggedIn();
  }

  Logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logout successfully');
    this.routelink.navigate(['/home']);
  }

}
