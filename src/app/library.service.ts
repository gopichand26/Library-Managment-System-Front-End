import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  API_URL:string = "http://localhost:8080/api/";
  

  constructor(private httpClient : HttpClient) {  }

 

  
  getLibrary(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}library`);
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  
  

  addLibrary(library: Object): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}library`, library);
  }

 
  updateLibrary(library: Object): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}library`, library);
  }

  

  searchLibrary(floor_no: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}library/${floor_no}`);
  }
  public deleteLibrary(floor_no) {
    
    return this.httpClient.delete(`${this.API_URL}library/${floor_no}`);
  }
}