import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  UserForm:FormGroup;
  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    this.UserForm=this.form.group({
      Name:[''],LastName:[''],MotherLastname:[''],Birthday:[''],Sex:[''],
      Department:[''],Province:[''],District:[''],Direction:[''],Phone:[''],
      Email:[''],Password:[''],Image:['']
      
    });
   }

  ngOnInit(): void {
  }
  sendData():any{
    console.log("Me presionaste"); 
    console.log(this.UserForm.value);
    this.crudService.AddUser(this.UserForm.value).subscribe(response=>{
      this.router.navigateByUrl('/list-user');
    });
   
  }

}
