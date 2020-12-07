import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }  from '@angular/common/http';
import { Hood } from './hood';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  hood: Hood
  baseurl = "https://hoodappx255.herokuapp.com";

  constructor(private http: HttpClient) { }

  getHoodList(accessToken): Observable<any> {
    interface ApiResponse {
      name: string
      hood_image: string
      location: string
      occupantCount: string
    }
    return this.http.get<ApiResponse>(this.baseurl + '/hoods/', {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    });

}
getAllHoods(): Observable<any> {
  interface allhoodsResponse {
    id: number
    name: string
  }
  return this.http.get<allhoodsResponse>(this.baseurl + '/hoods/');

}
}
