import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, FormGroup, NgForm, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { User } from 'src/app/model/user.model';
import { uniqueUsernameValidator } from 'src/app/service/unique-username-validator.directive';
import {ApiService} from "../../service/api.service";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  data;
  reactiveForm: FormGroup;
  users: User[];

/*   createForm() {
    this.reactiveForm = this.formBuilder.group({
      username: ['',
        null, // sync validator
        uniqueUsernameValidator(this.apiService) // async validator
      ]
    });
  }

  get username() {
    return this.reactiveForm.get('username');
  } */


  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }


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


  Registers(regForm:NgForm) 
  {
    if(regForm.valid)
    {
      this.apiService.createUser(regForm.value)
      .subscribe( data => {
        this.router.navigate(['list-user']);
        if(data.status === 200) {
          alert('User added successfully.');
          this.router.navigate(['list-user']);
        }else {
          alert(data.message);
        }
      });
    }
    else
    {
      alert('Please enter valid required details')
    }
  }


  

}