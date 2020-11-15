import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private baseUrl = 'http://localhost:8080/LMS/api/newspapers'; 

  constructor(private http:HttpClient) { }
  getNewspaper(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addNewspaper(newspaper: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`, newspaper);  
  } 
   
  updateNewspaper(id: number, value: any): Observable<Object> {  
    return this.http.put(`${this.baseUrl}/${id}`, value);  
  } 
  
  getNewspaperList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
