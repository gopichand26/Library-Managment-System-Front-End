import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../Books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnInit {
  book : Books = {
   
    title:'',
    author:'',
    genre:'',
    publisher:'',
    floor_no : 0,
    shelf_no : 0,
  };
      
  message : any;
  title : string;
  constructor(private router: Router, private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.params['title'];
    console.log(this.title);
    let response =  this.booksService.searchBook(this.title);
    response.subscribe(data => {
      this.book = data;
      console.log(this.book);
    })
  }
  
  public updateBook(){
    console.log(this.book);
    let response = this.booksService.updateBook(this.book);
    response.subscribe(data => {
      this.message = data
      
    });
   
  //  this.router.navigate(['/books']);
  }
}
