import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Newspaper } from '../newspaper';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-update-newspaper',
  templateUrl: './update-newspaper.component.html',
  styleUrls: ['./update-newspaper.component.css']
})
export class UpdateNewspaperComponent implements OnInit {
  name:String;
  newspaper:Newspaper;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private newspaperService:NewspaperService) { }

  ngOnInit()  {
    this.newspaper=new Newspaper();

    this.name=this.route.snapshot.params['name'];
    this.newspaperService.getNewspaper(this.name)
    .subscribe(data => {
      console.log(data)
      this.newspaper = data;
    }, error => console.log(error));
}

updateNewspaper() {
  this.newspaperService.updateNewspaper(this.name, this.newspaper)
    .subscribe(data => {
      console.log(data);
      this.newspaper = new Newspaper();
      this.gotoList();
    }, error => console.log(error));
}


onSubmit() {
  this.updateNewspaper();
  this.submitted=true;
}

gotoList() {
  this.router.navigate(['/newspaper']);
}
}


