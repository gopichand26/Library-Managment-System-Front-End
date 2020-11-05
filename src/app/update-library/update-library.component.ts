import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-update-library',
  templateUrl: './update-library.component.html',
  styleUrls: ['./update-library.component.css']
})
export class UpdateLibraryComponent implements OnInit {

  library : any;
  Library = {
    floor_no : 0,
    no_shelfs : 0,
    no_books : 0,
    no_magazines : 0,
    no_newspapers : 0
  };
      
  message : any;
  floor_no : number
  constructor(private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { }

  ngOnInit(): void {
    
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    
    this.floor_no = this.route.snapshot.params['floor_no'];
    console.log(this.floor_no);
    let response =  this.libraryService.searchLibrary(this.floor_no);
    response.subscribe(data => {
      this.library = data;
      console.log(this.library);
    })
  }
  
  public updateLibrary(){
    console.log(this.library);
    let response = this.libraryService.updateLibrary(this.library);
    response.subscribe(data => {
      this.message = data
      alert("Floor Updated successfully");
      this.router.navigate(['/library']);
    });
   
   
  }

}