import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from "../../service/api.service";
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data.result;
      });
  }

  searchBook(): void {
    this.router.navigate(['search-Book']);
  };

}
