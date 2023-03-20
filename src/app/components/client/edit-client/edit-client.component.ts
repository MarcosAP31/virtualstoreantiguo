import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
import { Client } from 'src/app/service/Client';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  ClientForm:FormGroup;
  id:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('ClientId');
    console.log(this.id);
    this.crudService.GetClient(this.id).subscribe(
      response=>{
        console.log(response);
        this.ClientForm.setValue({
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
          Password:response[0]['Password'],Image:response[0]['Image']
        });
      }
    );
    this.ClientForm=this.form.group(
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
    console.log(this.ClientForm.value);
    this.crudService.EditClient(this.id,this.ClientForm.value).subscribe(()=>{
    this.router.navigateByUrl('/list-client');
    });
  }
}
