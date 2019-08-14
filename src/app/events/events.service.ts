import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 @Injectable({
  providedIn: 'root'
})
export class EventsService {
readonly apiBaseURl = 'http://localhost:5555'
  constructor(private _http : HttpClient) { }
  getEvents(){
    // Return an observable
   return this._http.get(`${this.apiBaseURl }/events`)
  }
}
