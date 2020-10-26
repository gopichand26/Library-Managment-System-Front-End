import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Books } from '../Books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {
  book : Books = new Books();
  form = new FormGroup({
     title : new FormControl('',Validators.required),
     author : new FormControl('',Validators.required),
     genre : new FormControl('',Validators.required),
     publisher : new FormControl('',Validators.required),
     floor_no : new FormControl('',Validators.required),
     shelf_no : new FormControl('',Validators.required)
  })
  
  constructor(private router: Router, private booksService: BooksService) 
     { }

     addBook(): void {
      // this.studentService.createStudent(this.student)
      //     .subscribe( data => {
      //       alert("Student created successfully.");
      //     });
      console.log(this.book)
      let response = this.booksService.addBook(this.book);
      response.subscribe(data => {
        alert("Book add successfully");
        this.router.navigate(['/books']);
      });
      
    };

    
}
