import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, Subject } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private baseUrl = 'http://localhost:8080/LMS/api/newspapers'; 
  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  getNewspaper(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  addNewspaper(newspaper: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, newspaper);  
  } 
   
  updateNewspaper(name: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/${name}`, value);  
  } 
  
  getNewspaperList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMagSList(newsname:string,newsdate:string) : Observable<any>{
    return this.http.get(this.baseUrl+'/one/'+newsname+'/'+newsdate);
  }
   
  getMagAll(newsname:string) : Observable<any>{
    return this.http.get(this.baseUrl+'/'+'all/'+newsname);
  }

  findByName(name: String) {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }

}
