import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
import { User } from 'src/app/service/User';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  UserForm:FormGroup;
  id:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('UserId');
    console.log(this.id);
    this.crudService.GetUser(this.id).subscribe(
      response=>{
        console.log(response);
        this.UserForm.setValue({
          Name:response[0]['Name'],
          LastName:response[0]['LastName'],
          MotherLastname:response[0]['MotherLastname'],
          Birthday:response[0]['Birthday'],
          Sex:response[0]['Sex'],
          Department:response[0]['Department'],
          Province:response[0]['Province'],
          District:response[0]['District'],
          Direction:response[0]['Direction'],
          Phone:response[0]['Phone'],
          Email:response[0]['Email'],
          Password:response[0]['Password'],
          Image:response[0]['Image']
        });
      }
    );
    this.UserForm=this.form.group(
      {
        Name:[''],
        LastName:[''],
        MotherLastname:[''],
        Birthday:[''],
        Sex:[''],
        Department:[''],
        Province:[''],
        District:[''],
        Direction:[''],
        Phone:[''],
        Email:[''],
        Password:[''],Image:['']
      }
    );
  }

  ngOnInit(): void {
  }
  sendData():any{
    
    console.log(this.id);
    console.log(this.UserForm.value);
    this.crudService.EditUser(this.id,this.UserForm.value).subscribe(()=>{
    this.router.navigateByUrl('/list-user');
    });
  }

}
