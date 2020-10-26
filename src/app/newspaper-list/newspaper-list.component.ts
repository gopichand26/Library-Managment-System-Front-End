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

  newspapers : Observable<Newspaper[]>;
  message : any;

  constructor(private service : NewspaperService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.newspapers=this.service.getNewspaper();
  }

  
  updateNewspaper(name : String){
    console.log(name);
    this.router.navigate(['update',name])
  }

}
