import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from '../Books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  book : any;
  Books = {
   
    title:'',
    author:'',
    genre:'',
    publisher:'',
    floor_no : 0,
    shelf_no : 0,
  };
   title: string ;
showBooksTable : boolean = false;
 constructor(private booksService: BooksService) { }

 ngOnInit(): void {
 }

 public searchBook(){
   this.showBooksTable = !this.showBooksTable;
   console.log(this.title);
   let response = this.booksService.searchBook(this.title);
   response.subscribe(data => this.book = data);
   console.log(this.book);
 }

}
