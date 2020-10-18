import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-edit-visitor',
  templateUrl: './edit-visitor.component.html',
  styleUrls: ['./edit-visitor.component.css']
})
export class EditVisitorComponent implements OnInit {

  id:number;
  outtime:string;
  apiResponse:ApiResponse;

  constructor(private route:ActivatedRoute,private router:Router,private registerService:RegisterService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

  }
  onSubmit(){
    this.registerService.editvisitor(this.id,this.outtime)
    .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/register']);
  }

}
