import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class MagazineService {
  private baseUrl = 'http://localhost:8080/LMS/api/magazines'; 

  constructor(private http:HttpClient) { }
  getMagazine(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addMagazine(magazine: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, magazine);  
  } 
   
  updateMagazine(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/${id}`, value);  
  } 
  
  getMagazineList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
