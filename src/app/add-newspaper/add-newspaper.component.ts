import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Newspaper } from '../newspaper';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-add-newspaper',
  templateUrl: './add-newspaper.component.html',
  styleUrls: ['./add-newspaper.component.css']
})
export class AddNewspaperComponent  {
  form = new FormGroup({
    id : new FormControl('',Validators.required),
    floorno : new FormControl('',Validators.required),
    shelfno : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required)
 })

  newspaper : Newspaper = new Newspaper();
  constructor(private router: Router, private newspaperService: NewspaperService) 
     { }

     addNewspaper(): void {
      console.log(this.newspaper)
      let response = this.newspaperService.addNewspaper(this.newspaper);
      response.subscribe(data => {
        alert("Newspaper add successfully");
        this.router.navigate(['/newspapers']); 
      });
     
    };

}
