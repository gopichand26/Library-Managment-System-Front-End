import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {

  API_URL:String = "http://localhost:8080/api/";
 

  constructor(private httpClient : HttpClient) {  }

 
  getNewspaper(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}newspapers`);
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }


  addNewspaper(newspaper: Object): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}newspaper`, newspaper);
  }


  updateNewspaper(newspaper: Object): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}newspaper`, newspaper);
  }

  searchNewspaperbynamedate(name: String, date: Date): Observable<any> {
    return this.httpClient.get(`${this.API_URL}newspaper/${name}/${date}`);
  }

  searchNewspaper(name: String): Observable<any> {
    return this.httpClient.get(`${this.API_URL}newspaper/${name}`);
  }

  searchNewspaperbydate(date: Date): Observable<any> {
    return this.httpClient.get(`${this.API_URL}newspaper/${date}`);
  }
}  