import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Magazine } from '../magazine';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-update-magazine',
  templateUrl: './update-magazine.component.html',
  styleUrls: ['./update-magazine.component.css']
})
export class UpdateMagazineComponent implements OnInit {

  name:String;
  magazine:Magazine;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private magazineService:MagazineService) { }

  ngOnInit()  {
    this.magazine=new Magazine();

    this.name=this.route.snapshot.params['name'];
    this.magazineService.getMagazine(this.name)
    .subscribe(data => {
      console.log(data)
      this.magazine = data;
    }, error => console.log(error));
}

updateMagazine() {
  this.magazineService.updateMagazine(this.name, this.magazine)
    .subscribe(data => {
      console.log(data);
      this.magazine = new Magazine();
      this.gotoList();
    }, error => console.log(error));
}


onSubmit() {
  this.updateMagazine();
  this.submitted=true;
}

gotoList() {
  this.router.navigate(['/magazine']);
}

}
