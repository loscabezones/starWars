import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  constructor( private http: HttpClient ) { }

  getApiShips() {
    return this.http.get('https://swapi.co/api/starships/');
  }
}
