import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  private baseUrl = 'http://localhost:8080/api/magazines'; 

  constructor(private http:HttpClient) { }
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

  findByName(name: String) {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }
}
