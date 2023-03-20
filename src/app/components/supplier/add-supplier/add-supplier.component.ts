import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/service/Supplier';
@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {

  SupplierForm:FormGroup;
  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) {
    this.SupplierForm=this.form.group({
      
      RUC:[''],BusinessName:[''],TradeName:[''],Kind:[''],
      Department:[''],Province:[''],District:[''],Direction:[''],Phone:[''],
      Email:['']
      
    });
   }

  ngOnInit(): void {
  }
  sendData():any{
    const supplier=new Supplier();
    console.log("Me presionaste"); 
    console.log(this.SupplierForm.value);
    supplier.RUC=this.SupplierForm.value.RUC;
    supplier.BusinessName=this.SupplierForm.value.BusinessName;
    supplier.TradeName=this.SupplierForm.value.TradeName;
    supplier.Kind=this.SupplierForm.value.Kind;
    supplier.Department=this.SupplierForm.value.Department;
    supplier.Province=this.SupplierForm.value.Province;
    supplier.District=this.SupplierForm.value.District;
    supplier.Direction=this.SupplierForm.value.Direction;
    supplier.Phone=this.SupplierForm.value.Phone;
    supplier.Email=this.SupplierForm.value.Email;
    console.log();
    this.crudService.AddSupplier(supplier).subscribe(response=>{
      this.router.navigateByUrl('/list-supplier');
    });
   
  }

}
