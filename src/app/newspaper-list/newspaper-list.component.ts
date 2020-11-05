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

  
  constructor(private newspaperService: NewspaperService,
    private router: Router) { 
      setTimeout(function(){
        $(function(){
          $('#example').DataTable();
      });
      },2000);
    }

  ngOnInit(){
    this.newspapers = this.newspaperService.getNewspaperList();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    
  }
 
  updateNewspaper(id : number){
    this.router.navigate(['update', id]);
  }

 
}
