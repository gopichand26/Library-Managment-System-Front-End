import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  focus: any;
  focus1: any;
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

  listMembers(): void {
    this.router.navigate(['list-user']);
  };

  dailyRegister(): void {
    this.router.navigate(['register']);
  };

  search(): void {
    this.router.navigate(['search']);
  };

  bnm(): void {
    this.router.navigate(['bnm']);
  };

}

