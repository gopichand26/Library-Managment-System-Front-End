import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  API_URL:String = "http://localhost:8080/api/";
 

  constructor(private httpClient : HttpClient) {  }

 
  getMagazine(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}magazines`);
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }


  addMagazine(magazine: Object): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}magazine`, magazine);
  }


  updateMagazine(magazine: Object): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}magazine`, magazine);
  }

  searchMagazinerbynamedate(name: String, date: Date): Observable<any> {
    return this.httpClient.get(`${this.API_URL}magazine/${name}/${date}`);
  }

  searchMagazine(name: String): Observable<any> {
    return this.httpClient.get(`${this.API_URL}magazine/${name}`);
  }

  searchMagazinebydate(date: Date): Observable<any> {
    return this.httpClient.get(`${this.API_URL}magazine/${date}`);
  }
}
