import { Component, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  RegisterMode = false;
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getclientRequest();
  }

  getclientRequest(){
    this.http.get('http://localhost:5000/api/Values/GetTest').subscribe(res => {
      this.values = res;
      console.log(this.values);

    }, err => {
      console.log(err);
    });
  }
  Register(){
    this.RegisterMode = true;
  }

  RegisterCancel(value: boolean){
    this.RegisterMode = value;
  }

}
