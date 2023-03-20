import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  ClientForm:FormGroup;
  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    this.ClientForm=this.form.group({
      Name:[''],LastName:[''],MotherLastname:[''],Birthday:[''],Sex:[''],
      Department:[''],Province:[''],District:[''],Direction:[''],Phone:[''],
      Email:[''],Password:[''],Image:['']
      
    });
   }

  ngOnInit(): void {
  }
  sendData():any{
    console.log("Me presionaste"); 
    console.log(this.ClientForm.value);
    this.crudService.AddClient(this.ClientForm.value).subscribe(response=>{
      this.router.navigateByUrl('/list-client');
    });
   
  }

}
