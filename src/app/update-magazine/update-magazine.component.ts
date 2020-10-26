import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-update-magazine',
  templateUrl: './update-magazine.component.html',
  styleUrls: ['./update-magazine.component.css']
})
export class UpdateMagazineComponent implements OnInit {

  magazine : any;
  Magazine = {
   
    id: 0,
    floorno: 0,
    shelfno:'',
    name:'',
    date : '',
  };
      
  message : any;
  name : String;
  constructor(private router: Router, private route: ActivatedRoute, private magazineService: MagazineService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
    console.log(this.name);
    let response =  this.magazineService.searchMagazine(this.name);
    response.subscribe(data => {
      this.magazine = data;
      console.log(this.magazine);
    })
  }
  
  public updateMagazine(){
    console.log(this.magazine);
    let response = this.magazineService.updateMagazine(this.magazine);
    response.subscribe(data => {
      this.message = data
      this.router.navigate(['/magazines']);
      
    });
   
  
  }

}
