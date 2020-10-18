import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Magazine } from '../magazine';
import { MagazineService } from '../magazine.service';

@Component({
  selector: 'app-add-magazine',
  templateUrl: './add-magazine.component.html',
  styleUrls: ['./add-magazine.component.css']
})
export class AddMagazineComponent implements OnInit {

  magazine: Magazine = new Magazine();
  submitted = false;

  constructor(private magazineService: MagazineService,
    private router: Router) { }

  ngOnInit() {
  }

  newMagazine(): void {
    this.submitted = false;
    this.magazine = new Magazine();
  }

  save() {
    this.magazineService
    .addMagazine(this.magazine).subscribe(data => console.log(data),
     error => console.log(error)
    );
    
      this.magazine = new Magazine();
      this.gotoList();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/magazine']);
  }
}
