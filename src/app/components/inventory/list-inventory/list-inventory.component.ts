import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CrudService } from 'src/app/service/crud.service';
import { Product } from 'src/app/service/Product';
@Component({
  selector: 'app-list-inventory',
  templateUrl: './list-inventory.component.html',
  styleUrls: ['./list-inventory.component.css']
})
export class ListInventoryComponent implements OnInit {

  Products:any;
  public preview: string=""
  constructor(
    private crudService:CrudService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    
    this.crudService.GetProducts().subscribe(response=>{
      console.log(response);
      this.Products=response;
    });
    
  }
  deleteProduct(code:any,iControl:any){
    console.log(code);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el client?")){
    this.crudService.DeleteProduct(code).subscribe((response)=>{
      this.Products.splice(iControl,1);
    });
  }
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
  showImage(product:Product){
    this.extractBase64(product.Image).then((image:any)=>{
      this.preview=image.base64;
    });

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
