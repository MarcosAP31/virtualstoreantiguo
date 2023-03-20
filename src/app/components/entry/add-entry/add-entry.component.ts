import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {

  EntryForm:FormGroup;
  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    this.EntryForm=this.form.group({
      Code:[''],Amount:['']
      
    });
   }

  ngOnInit(): void {
  }
  sendData():any{
    console.log("Me presionaste");
    console.log(this.EntryForm.value);
    this.crudService.AddEntry(this.EntryForm.value).subscribe(response=>{
      this.router.navigateByUrl('/list-entry');
    });
   
  }

}
