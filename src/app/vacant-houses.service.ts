import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacantHousesService {

  baseurl = "https://hoodapplication.herokuapp.com";


  constructor(private http: HttpClient) { }

  getAllVacant(): Observable<any> {
    return this.http.get(this.baseurl + '/api/vacant_houses/');
  }
}

