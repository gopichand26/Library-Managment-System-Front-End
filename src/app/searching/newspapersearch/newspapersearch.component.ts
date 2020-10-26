import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Newspaper } from 'src/app/model/newspaper.model';
import { NewspaperService } from 'src/app/service/newspaper.service';

@Component({
  selector: 'app-newspapersearch',
  templateUrl: './newspapersearch.component.html',
  styleUrls: ['./newspapersearch.component.css']
})
export class NewspapersearchComponent implements OnInit {
  showNewsTab = false
  newspapers:Newspaper[]
  newsname:string
  newsdate:string
  constructor(private newspaperService:NewspaperService,
    private router: Router) { }

  ngOnInit(): void {
    this.newspaperService.refreshNeeded$.subscribe(()=>{

      this.onSubmit();
      this.searchAllDate();
    });
  }

  onSubmit(){
   this.showNewsTab=true
   let response = this.newspaperService.getMagSList(this.newsname,this.newsdate);
   response.subscribe(data => this.newspapers = data )
  }

  searchAllDate(){
    this.showNewsTab=true
    let response = this.newspaperService.getMagAll(this.newsname);
    response.subscribe(data => this.newspapers = data)
  }

}
