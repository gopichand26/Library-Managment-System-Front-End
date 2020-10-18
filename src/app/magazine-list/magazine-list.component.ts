import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Magazine } from '../magazine';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-magazine-list',
  templateUrl: './magazine-list.component.html',
  styleUrls: ['./magazine-list.component.css']
})
export class MagazineListComponent implements OnInit {

  magazines:Observable<Magazine[]>;
  magazine:any;
  name:'';
  
  constructor(private magazineService: MagazineService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  
  reloadData() {
    this.magazines = this.magazineService.getMagazineList();
  } 
  updateMagazine(name : String){
    this.router.navigate(['update-magazine', name]);
  }
  
  searchName() {
    this.magazineService.findByName(this.name)
      .subscribe(
        data => {
          this.magazine = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
