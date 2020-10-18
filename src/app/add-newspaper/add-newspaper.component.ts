import { Component, OnInit } from '@angular/core';
import { Newspaper } from '../newspaper';
import { Router } from '@angular/router';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-add-newspaper',
  templateUrl: './add-newspaper.component.html',
  styleUrls: ['./add-newspaper.component.css']
})
export class AddNewspaperComponent implements OnInit {

  newspaper: Newspaper = new Newspaper();
  submitted = false;

  constructor(private newspaperService: NewspaperService,
    private router: Router) { }

  ngOnInit() {
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


