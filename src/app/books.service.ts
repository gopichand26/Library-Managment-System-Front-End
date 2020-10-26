import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Books } from './Books.model';
import {catchError, tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URL:string = "http://localhost:8080/api/";
  

  constructor(private httpClient : HttpClient) {  }

 

  

 
  getBooks(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books`);
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  
  

  addBook(book: Object): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}book`, book);
  }

  
 
  updateBook(book: Object): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}book`, book);
  }

  searchBookbytitlteauthor(title: string,author: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books/${title}/${author}`);
  }

  searchBook(title: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}book/${title}`);
  }

  searchBookbyauthor(author: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books/${author}`);
  }

  public getbs(type :string, name :string) {
    return this.httpClient.get<Books[]>(this.API_URL+'book/'+type+'/'+name);
  }

}