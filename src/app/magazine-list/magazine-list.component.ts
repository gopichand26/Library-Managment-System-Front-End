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

  magazines : Observable<Magazine[]>;
  message : any;

  constructor(private service : MagazineService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.magazines=this.service.getMagazine();
  }

  
  updateMagazine(name : String){
    console.log(name);
    this.router.navigate(['update-magazine',name])
  }

}
