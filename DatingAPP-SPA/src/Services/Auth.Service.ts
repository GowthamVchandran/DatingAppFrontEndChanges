import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

 UserName : any;
 
 jwtHelper = new JwtHelperService();

baseUrl = environment.ApiURL+'auth/';

constructor(private client: HttpClient){
}

login(model: any){

  return this.client.post(this.baseUrl + 'login',model).pipe(
    map( (response: any) => {
       const user = response;
       console.log(user);
       if (user){       
       localStorage.setItem('token', user.token);
       this.UserName = this.jwtHelper.decodeToken(user.token);
       console.log(this.UserName);

       }
    })
  );
}
Register(model : any){
  return this.client.post(this.baseUrl+'Register',model);
}

loggedIn(){
  var token = localStorage.getItem('token');
   return !this.jwtHelper.isTokenExpired(token);
}
}
