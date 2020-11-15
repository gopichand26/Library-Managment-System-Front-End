import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Register } from '../model/register.model';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public API_URL="http://localhost:8080/LMS/register"
  constructor(private http : HttpClient) { }

 getregister() : Observable<ApiResponse>{
   return this.http.get<ApiResponse>(this.API_URL)
 }

 editvisitor(id:number,register:Register):Observable<any>{
   return this.http.put(this.API_URL+'/'+id,register);
 }

 addvisitor(register:Register){
   return this.http.post<ApiResponse>(this.API_URL,register)
 }
 
 getVisitor(id: number): Observable<any> {
  return this.http.get(`${this.API_URL}/getvisitor/${id}`);
}
}
