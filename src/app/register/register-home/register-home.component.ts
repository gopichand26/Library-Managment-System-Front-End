import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { RegisterService } from 'src/app/service/register.service';
import * as $ from "jquery";
import 'DataTables.net';
import {ApiService} from "../../service/api.service";
import { User } from 'src/app/model/user.model';


@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  users: User[];

  apiResponse:ApiResponse

  constructor(private registerService:RegisterService,private router: Router, private apiService: ApiService) { }
  register : Observable<ApiResponse>;
  ngOnInit(): void {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getUsers()
      .subscribe( data => {
        this.users = data.result;
      });
    this.register=this.registerService.getregister();
    setTimeout(function(){
      $(function(){
        $('#example').DataTable();
    });
    },2000);

    
  }

  addvisitor(){
    this.router.navigate(['addvisitor'])
  }

  editvisitor(id:number){
    console.log(id)
    this.router.navigate(['editvisitor',id])
  }

}
