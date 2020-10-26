import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Newspaper } from '../newspaper';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-search-newspaper',
  templateUrl: './search-newspaper.component.html',
  styleUrls: ['./search-newspaper.component.css']
})
export class SearchNewspaperComponent implements OnInit {

  newspaper : any;
  Newspaper = {
   
    id: 0,
    floorno: 0,
    shelfno:'',
    name:'',
    date : '',
  };
   name: String ;
showNewspapersTable : boolean = false;
 constructor(private newspaperService: NewspaperService) { }

 ngOnInit(): void {
 }

 public searchNewspaper(){
   this.showNewspapersTable = !this.showNewspapersTable;
   console.log(this.name);
   let response = this.newspaperService.searchNewspaper(this.name);
   response.subscribe(data => this.newspaper = data);
   console.log(this.newspaper);
  
 }
  
}
