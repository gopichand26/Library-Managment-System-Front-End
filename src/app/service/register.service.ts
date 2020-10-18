import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { Register } from '../model/register.model';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  public API_URL="http://localhost:8080/"
  constructor(private http : HttpClient) { }

 getregister() : Observable<ApiResponse>{
   return this.http.get<ApiResponse>(this.API_URL+'register')
 }

 editvisitor(id:number,outtime:string){
   return this.http.put<ApiResponse>(this.API_URL+'register/'+id+'/'+outtime,{});
 }

 addvisitor(register:Register){
   return this.http.post<ApiResponse>(this.API_URL+'register',register)
 }
}
