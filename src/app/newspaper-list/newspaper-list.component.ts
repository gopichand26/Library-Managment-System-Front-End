import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Newspaper } from '../newspaper';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-newspaper-list',
  templateUrl: './newspaper-list.component.html',
  styleUrls: ['./newspaper-list.component.css']
})
export class NewspaperListComponent implements OnInit {
  newspapers:Observable<Newspaper[]>;
  newspaper:any;
  name:'';
  
  constructor(private newspaperService: NewspaperService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  
  reloadData() {
    this.newspapers = this.newspaperService.getNewspaperList();
  } 
  updateNewspaper(name : String){
    this.router.navigate(['update', name]);
  }
  
  searchName() {
    this.newspaperService.findByName(this.name)
      .subscribe(
        data => {
          this.newspaper = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

 
}
