 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable, Subject } from 'rxjs';  
import { Magazine } from '../model/magazine.model';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  private baseUrl = 'http://localhost:8080/api/magazines'; 

  constructor(private http:HttpClient) { }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }


  getMagazine(name: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }

  addMagazine(magazine: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, magazine);  
  } 
   
  updateMagazine(name: String, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/${name}`, value);  
  } 
  
  getMagazineList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMagSList(magname:string,magdate:string) : Observable<any>{
    return this.http.get(this.baseUrl+'/one/'+magname+'/'+magdate);
  }
   
  getMagAll(magname:string) : Observable<any>{
    return this.http.get(this.baseUrl+'/'+'all/'+magname);
  }

  findByName(name: String) {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }
}
