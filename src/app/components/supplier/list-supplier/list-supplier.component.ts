import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {

  Suppliers:any;
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetSuppliers().subscribe(response=>{
      console.log(response);
      this.Suppliers=response;
    });
  }
  deleteSupplier(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el proveedor?")){
    this.crudService.DeleteSupplier(id).subscribe((response)=>{
      this.Suppliers.splice(iControl,1);
    });
  }
  }

}
