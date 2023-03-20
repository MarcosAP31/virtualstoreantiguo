import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
import { Supplier } from 'src/app/service/Supplier';
@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {

  SupplierForm:FormGroup;
  id:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('SupplierId');
    console.log(this.id);
    this.crudService.GetSupplier(this.id).subscribe(
      response=>{
        console.log(response);
        this.SupplierForm.setValue({
          RUC:response[0]['RUC'],
          BusinessName:response[0]['BusinessName'],
          TradeName:response[0]['TradeName'],
          Kind:response[0]['Kind'],
          Department:response[0]['Department'],
          Province:response[0]['Province'],
          District:response[0]['District'],
          Direction:response[0]['Direction'],
          Phone:response[0]['Phone'],
          Email:response[0]['Email']
        });
      }
    );
    this.SupplierForm=this.form.group(
      {
        RUC:[''],
        BusinessName:[''],
        TradeName:[''],
        Kind:[''],
        Sex:[''],
        Department:[''],
        Province:[''],
        District:[''],
        Direction:[''],
        Phone:[''],
        Email:['']
      }
    );
  }

  ngOnInit(): void {
  }
  sendData():any{
    
    console.log(this.id);
    console.log(this.SupplierForm.value);
    this.crudService.EditSupplier(this.id,this.SupplierForm.value).subscribe(()=>{
    this.router.navigateByUrl('/list-supplier');
    });
  }

}
