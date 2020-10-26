import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-bnm',
  templateUrl: './bnm.component.html',
  styleUrls: ['./bnm.component.css']
})
export class BnmComponent implements OnInit {
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





}
