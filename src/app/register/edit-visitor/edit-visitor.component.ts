import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { Register } from 'src/app/model/register.model';
import { RegisterService } from 'src/app/service/register.service';
import * as $ from "jquery";
import 'DataTables.net';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {

  id:number;
  outtime:string;
  apiResponse:ApiResponse;
  register : Register

  constructor(private route:ActivatedRoute,private router:Router,private registerService:RegisterService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.register=new Register;
     
    this.registerService.getVisitor(this.id)
    .subscribe(data => {
      console.log(data)
      this.register = data;
    }, error => console.log(error));
  
  }

  updateEmployee() {
    this.register.outtime=this.outtime;
    this.registerService.editvisitor(this.id, this.register)
      .subscribe(data => {
        console.log(data);
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.id)
    console.log(this.outtime)
    this.updateEmployee() ;
  }

 gotoList(){
  this.router.navigate(['/register']);
 }

}
