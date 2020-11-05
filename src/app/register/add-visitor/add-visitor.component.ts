import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/register.model';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-add-visitor',
  templateUrl: './add-visitor.component.html',
  styleUrls: ['./add-visitor.component.css']
})
export class AddVisitorComponent implements OnInit {

  register=new Register;
  submitted=false;
  constructor(private registerService:RegisterService,private router:Router) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
  }
onSubmit(){
  this.submitted = true;
  this.registerService.addvisitor(this.register)
  .subscribe(data => console.log(data), error => console.log(error));
  this.register = new Register();
  this.router.navigate(['/register']);
}

}
