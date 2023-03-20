import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from 'src/app/service/Product';
@Component({
  selector: 'app-add-inventory',
  templateUrl: './add-inventory.component.html',
  styleUrls: ['./add-inventory.component.css']
})
export class AddInventoryComponent implements OnInit {

  ProductForm:FormGroup
  public preview: string=""
  public images:any=[]
  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router,
    private sanitizer:DomSanitizer
    ) {
    this.ProductForm=this.form.group({
      Description:[''],Category:[''],Amount:[''],PurchasePrice:[''],SalePrice:[''],
      SupplierId:[''],Image:['']
    });
   }

  ngOnInit(): void {
  }
  sendData():any{
    var filename=document.getElementById('file-id')?.ATTRIBUTE_NODE;
    
    const product=new Product();
    product.Code=this.ProductForm.value.Code;
    product.Description=this.ProductForm.value.Description;
    product.Category=this.ProductForm.value.Category;
    product.Amount=this.ProductForm.value.Amount;
    product.PurchasePrice=this.ProductForm.value.PurchasePrice;
    product.SalePrice=this.ProductForm.value.SalePrice;
    product.SupplierId=this.ProductForm.value.SupplierId;
    product.Image=String(filename);
    console.log("Me presionaste");
    console.log(this.ProductForm.value);
    
    this.crudService.AddProduct(product).subscribe(response=>{
      this.router.navigateByUrl('/list-inventory');
    });
   
  }
  capturerFile(event:Event):any{
    const target = event.target as HTMLInputElement;
      const files = target.files as FileList;
      const capturedFile=files[0];
      this.extractBase64(capturedFile).then((image:any)=>{
        this.preview=image.base;
        console.log(image);
      })
      //this.images.push(capturedFile);
      //console.log(files[0]);
  }

  extractBase64=async($event:any)=> new Promise ((resolve) => {
    try{
      
      const unsafeImg=window.URL.createObjectURL($event);
      const image=this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader=new FileReader();
      reader.readAsDataURL($event);
      reader.onload=()=>{
        resolve({
          base:reader.result
        });
      };
      reader.onerror=error=>{
        resolve({
          
          base:null
        });
      };
      return resolve;
    }catch(e){
      
      return null;
    }
  })
}
