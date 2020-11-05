import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Library } from '../Library.model';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.css']
})
export class LibraryListComponent implements OnInit {

  library : Observable<Library[]>;
  message : any;

  constructor(private service : LibraryService,
    private router: Router) { }

 

    ngOnInit() {
      this.reloadData();
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    }
    
  reloadData()
  {
    this.library=this.service.getLibrary();
  }
  public deleteLibrary(floor_no : number){
    if(confirm("Are you sure to remove Floor Number  "   +floor_no)) {
    this.router.navigate(['delete',floor_no])
  }
}

  
  updateLibrary(floor_no : number){
    console.log(floor_no);
    this.router.navigate(['update-Library',floor_no])
  }

}