import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Books } from './Books.model';
import {tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URL:string = "http://localhost:8080/";
  

  constructor(private http : HttpClient) {  }

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  // public addBooks(books){
  //   return this.http.post(this.API_URL+"books",books,{responseType: "text" as "json"})
  //   .pipe(
  //     tap(()=>{
  //       this._refreshNeeded$.next();
  //     })
  //   );
  // }

  public getBooks(){
    return this.http.get<Books[]>(this.API_URL+"books");
    
  }
  

  public searchBook(title): Observable<any>{
    return this.http.get(this.API_URL+"books/"+title);

  }

  
  public addBook(book) {
    return this.http.post<Books>(this.API_URL+"book", book);
  }

  public updateBook(book : Object ) : Observable<Object>{
    return this.http.put(this.API_URL+"book",book)
    .pipe(
      tap(()=>{
        this._refreshNeeded$.next();
      })
    );;
  }
}
