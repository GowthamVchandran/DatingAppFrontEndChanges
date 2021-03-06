import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from 'src/Services/Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {

  Value: any;

  jwtHelper = new JwtHelperService();
  constructor(private service: AuthServiceService ) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.service.UserName = this.jwtHelper.decodeToken(token);
  }

 

}
