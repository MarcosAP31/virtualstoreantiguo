import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css']
})
export class ListSaleComponent implements OnInit {

  Sales:any;
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetSales().subscribe(response=>{
      console.log(response);
      this.Sales=response;
    });
  }
  deleteSale(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar la venta?")){
    this.crudService.DeleteSale(id).subscribe((response)=>{
      this.Sales.splice(iControl,1);
    });
  }
  }

}
