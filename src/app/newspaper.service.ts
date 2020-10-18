import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private baseUrl = 'http://localhost:8080/api/newspapers'; 
  constructor(private http:HttpClient) { }

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

  findByName(name: String) {
    return this.http.get(`${this.baseUrl}?name=${name}`);
  }

}
