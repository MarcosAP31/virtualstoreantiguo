import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-list-entry',
  templateUrl: './list-entry.component.html',
  styleUrls: ['./list-entry.component.css']
})
export class ListEntryComponent implements OnInit {

  Entrys:any;
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetEntrys().subscribe(response=>{
      console.log(response);
      this.Entrys=response;
    });
  }
  deleteEntry(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar la entrada?")){
    this.crudService.DeleteEntry(id).subscribe((response)=>{
      this.Entrys.splice(iControl,1);
    });
  }
  }

}
