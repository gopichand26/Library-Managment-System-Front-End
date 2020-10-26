import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { ApiService } from 'src/app/service/api.service';
import { BooksService } from 'src/app/service/books.service';
import * as $ from "jquery";
import 'DataTables.net';
import { data } from 'jquery';
import { Books } from 'src/app/model/Books.model';

@Component({
  selector: 'app-booksearch',
  templateUrl: './booksearch.component.html',
  styleUrls: ['./booksearch.component.css']
})
export class BooksearchComponent implements OnInit {

  showBookTable = false
  type :string
  name :string
  books : Books[]
  isData = false
  constructor(private bookService :BooksService,private router: Router, ) { }

  ngOnInit(): void {
}
  
 onSubmit(){
 this.showBookTable=true
 let response = this.bookService.getbs(this.type,this.name)
 response.subscribe(data => this.books=data)
 }
  }



