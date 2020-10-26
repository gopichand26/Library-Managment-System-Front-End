import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Magazine } from '../magazine';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-add-magazine',
  templateUrl: './add-magazine.component.html',
  styleUrls: ['./add-magazine.component.css']
})
export class AddMagazineComponent  {

  form = new FormGroup({
    id : new FormControl('',Validators.required),
    floorno : new FormControl('',Validators.required),
    shelfno : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    date : new FormControl('',Validators.required)
 })

  magazine : Magazine = new Magazine();
  constructor(private router: Router, private magazineService: MagazineService) 
     { }

     addMagazine(): void {
      console.log(this.magazine)
      let response = this.magazineService.addMagazine(this.magazine);
      response.subscribe(data => {
        alert("Magazine add successfully");
        this.router.navigate(['/magazines']);
      });
      
    };

}
