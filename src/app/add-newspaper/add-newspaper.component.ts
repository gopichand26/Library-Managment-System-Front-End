import { Component, OnInit } from '@angular/core';
import { Newspaper } from '../newspaper';
import { Router } from '@angular/router';
import { NewspaperService } from '../newspaper.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-newspaper',
  templateUrl: './add-newspaper.component.html',
  styleUrls: ['./add-newspaper.component.css']
})
export class AddNewspaperComponent implements OnInit {

  form = new FormGroup({
    id : new FormControl('',Validators.required),
    floorno : new FormControl('',Validators.required),
    shelfno : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required)
 })

  newspaper: Newspaper = new Newspaper();
  submitted = false;

  constructor(private newspaperService: NewspaperService,
    private router: Router) { }

    ngOnInit() {
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    }

  newNewspaper(): void {
    this.submitted = false;
    this.newspaper = new Newspaper();
  }

  save() {
    this.newspaperService
    .addNewspaper(this.newspaper).subscribe(data => console.log(data),
     error => console.log(error)
    );
    
      this.newspaper = new Newspaper();
      alert('Newspaper added successfully');
      this.gotoList();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/newspaper']);
  }
}


