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
  
  constructor(private magazineService: MagazineService,
    private router: Router) { }

  ngOnInit(){
    this.reloadData();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);
    
      if(!window.localStorage.getItem('token')) {
        this.router.navigate(['login']);
        return;
      }
    
  }
  
  reloadData() {
    this.magazines = this.magazineService.getMagazineList();
  } 
  updateMagazine(id : number){
    this.router.navigate(['update-magazine', id]);
  }
  

}
