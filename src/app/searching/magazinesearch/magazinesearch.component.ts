import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Magazine } from 'src/app/model/magazine.model';
import { MagazineService } from 'src/app/service/magazine.service';

@Component({
  selector: 'app-magazinesearch',
  templateUrl: './magazinesearch.component.html',
  styleUrls: ['./magazinesearch.component.css']
})
export class MagazinesearchComponent implements OnInit {

  showMagTab = false
  magazines:Observable<Magazine[]>
  magname:string
  magdate:string
  constructor(private magazineService: MagazineService,
    private router: Router) { }

  ngOnInit(): void {
    this.magazineService.refreshNeeded$.subscribe(()=>{

      this.onSubmit();
      this.searchAllDate();
    });
  }

  onSubmit(){
   this.showMagTab=true
   let response = this.magazineService.getMagSList(this.magname,this.magdate);
   response.subscribe(data => this.magazines = data )
  }

  searchAllDate(){
    this.showMagTab=true
    let response = this.magazineService.getMagAll(this.magname);
    response.subscribe(data => this.magazines = data)
  }

}
