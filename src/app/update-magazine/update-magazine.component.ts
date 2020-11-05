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

  id:number;
  magazine:Magazine;
  submitted=false;

  constructor(private route:ActivatedRoute,private router:Router,
    private magazineService:MagazineService) { }

  ngOnInit()  {
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    
    this.magazine=new Magazine();

    this.id=this.route.snapshot.params['id'];
    this.magazineService.getMagazine(this.id)
    .subscribe(data => {
      console.log(data)
      this.magazine = data;
    }, error => console.log(error));
}

updateMagazine() {
  this.magazineService.updateMagazine(this.id, this.magazine)
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
