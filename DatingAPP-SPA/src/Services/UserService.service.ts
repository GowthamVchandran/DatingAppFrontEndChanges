import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/_models/User';

// const httpOptions = {
//  headers : new HttpHeaders({
//    'Authorization': 'Bearer ' + localStorage.getItem('token')
//  })
// };

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = environment.ApiURL;

constructor(private http: HttpClient) { }

getUsers(): Observable<User[]>{

  return this.http.get<User[]>(this.baseUrl + 'Users/GetUsers');
}

getUser(id): Observable<User>{

  return this.http.get<User>(this.baseUrl + 'Users/UserbyID?id=' + id);
}
}
