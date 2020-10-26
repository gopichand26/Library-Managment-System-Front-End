import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-search-magazine',
  templateUrl: './search-magazine.component.html',
  styleUrls: ['./search-magazine.component.css']
})
export class SearchMagazineComponent implements OnInit {

  magazine : any;
  Magazine = {
   
    id: 0,
    floorno: 0,
    shelfno:'',
    name:'',
    date : '',
  };
   name: String ;
showMagazinesTable : boolean = false;
 constructor(private magazineService: MagazineService) { }

 ngOnInit(): void {
 }

 public searchMagazine(){
   this.showMagazinesTable = !this.showMagazinesTable;
   console.log(this.name);
   let response = this.magazineService.searchMagazine(this.name);
   response.subscribe(data => this.magazine = data);
   console.log(this.magazine);
   
 }

}
