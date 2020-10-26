import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-delete-library',
  templateUrl: './delete-library.component.html',
  styleUrls: ['./delete-library.component.css']
})
export class DeleteLibraryComponent implements OnInit {

  library : any;
  floor_no : number;
  message : any;
    constructor(private router: Router, private route: ActivatedRoute, private libraryService: LibraryService) { }
  

  ngOnInit(): void {
    this.floor_no = this.route.snapshot.params['floor_no'];
        let response = this.libraryService.deleteLibrary(this.floor_no);
      response.subscribe(data => this.message = data);
    
    
  }
  public getLibrary(){
    this.router.navigate(['/library']);
  }
}