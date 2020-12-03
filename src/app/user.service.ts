
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = "https://hoodapplication.herokuapp.com";
  

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + '/auth/login/');
  }
  
  getOneUser(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/users/' + id);
  }

  AddUser(user): Observable<any> {
    const body = {username: '' , email: ''};
    return this.http.post(this.baseurl + '/auth/signup/', user)
  }
}