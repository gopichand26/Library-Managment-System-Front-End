import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-update-newspaper',
  templateUrl: './update-newspaper.component.html',
  styleUrls: ['./update-newspaper.component.css']
})
export class UpdateNewspaperComponent implements OnInit {

  newspaper : any;
  Newspaper = {
   
    id: 0,
    floorno: 0,
    shelfno:'',
    name:'',
    date : '',
  };
      
  message : any;
  name : String;
  constructor(private router: Router, private route: ActivatedRoute, private newspaperService: NewspaperService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
    let response =  this.newspaperService.searchNewspaper(this.name);
    response.subscribe(data => {
      this.newspaper = data;
      console.log(this.newspaper);
    })
  }
  
  public updateNewspaper(){
    console.log(this.newspaper);
    let response = this.newspaperService.updateNewspaper(this.newspaper);
    response.subscribe(data => {
      this.message = data
      
    });
   
   this.router.navigate(['/newspapers']);
  }

}
