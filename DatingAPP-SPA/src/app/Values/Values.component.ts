import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './Values.component.html',
  styleUrls: ['./Values.component.css']
})
export class ValuesComponent implements OnInit {

  Value: any;
  constructor(private client: HttpClient) {
  }

  ngOnInit() {
    this.getclientRequest();
  }

  getclientRequest(){
    this.client.get('http://localhost:5000/api/home/Get').subscribe(res => {
      this.Value = res;
      console.log(this.Value);

    }, err => {
      console.log(err);
    });
  }

}
