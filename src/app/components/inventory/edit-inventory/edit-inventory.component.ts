import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-edit-inventory',
  templateUrl: './edit-inventory.component.html',
  styleUrls: ['./edit-inventory.component.css']
})
export class EditInventoryComponent implements OnInit {
  ProductForm:FormGroup;
  code:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.code=this.activeRoute.snapshot.paramMap.get('Code');
    console.log(this.code);
    this.crudService.GetProduct(this.code).subscribe(
      response=>{
        console.log(response);
        this.ProductForm.setValue({
          Description:response[0]['Description'],
          Category:response[0]['Category'],
          Amount:response[0]['Amount'],
          PurchasePrice:response[0]['PurchasePrice'],
          SalePrice:response[0]['SalePrice'],
          SupplierId:response[0]['SupplierId'],
          Image:response[0]['Image']
        });
      }
    );
    this.ProductForm=this.form.group(
      {
        Description:[''],
        Category:[''],
        Amount:[''],
        PurchasePrice:[''],
        SalePrice:[''],
        SupplierId:[''],
        Image:['']
      }
    );
  }

  ngOnInit(): void {
  }
  sendData():any{
    console.log(this.code);
    console.log(this.ProductForm.value);
    this.crudService.EditProduct(this.code,this.ProductForm.value).subscribe(()=>{
    this.router.navigateByUrl('/list-inventory');
    });
  }

}
