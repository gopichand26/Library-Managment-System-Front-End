import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Library } from '../Library.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-add-library',
  templateUrl: './add-library.component.html',
  styleUrls: ['./add-library.component.css']
})
export class AddLibraryComponent  {

  library : Library = new Library();
  form = new FormGroup({
    floor_no : new FormControl('',Validators.required),
    no_shelfs : new FormControl('',Validators.required),
    no_books : new FormControl('',Validators.required),
    no_magazines : new FormControl('',Validators.required),
    no_newspapers : new FormControl('',Validators.required)
  })
  constructor(private router: Router, private libraryService: LibraryService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
  }

  addLibrary(): void {
      
    console.log(this.library)
    let response = this.libraryService.addLibrary(this.library);
    response.subscribe(data => {
      alert("Floor added successfully");
      this.router.navigate(['/library']);
    });
    
  };

}