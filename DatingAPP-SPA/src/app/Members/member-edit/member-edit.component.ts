import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/Services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  @ViewChild('editform') editForm: NgForm;

  @HostListener('window:beforeunload', ['$event'])

  unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }
  
  
  user: User;
  constructor( private route: ActivatedRoute, private alert: AlertifyService ) { }

  ngOnInit() {
    console.log('this.log');
    this.route.data.subscribe( data => {
      this.user = data['user'];
      console.log(this.user);
    });
  }


  updateUser()
  {
    console.log(this.user);
    this.alert.success('successfully saved');
    this.editForm.reset(this.user);
  }
}
