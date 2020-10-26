import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-search-library',
  templateUrl: './search-library.component.html',
  styleUrls: ['./search-library.component.css']
})
export class SearchLibraryComponent implements OnInit {

  library : any;
  Library = {
   
    floor_no : 0,
    no_shelfs : 0,
    no_books : 0,
    no_magazines : 0,
    no_newspapers : 0
  };
   floor_no : number ;
showLibraryTable : boolean = false;
 constructor(private libraryService: LibraryService) { }

 ngOnInit(): void {
 }

 public searchLibrary(){
   this.showLibraryTable = !this.showLibraryTable;
   console.log(this.floor_no);
   let response = this.libraryService.searchLibrary(this.floor_no);
   response.subscribe(data => this.library = data);
   console.log(this.library);
 }

}