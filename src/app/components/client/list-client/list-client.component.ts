import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  Clients:any;
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetClients().subscribe(response=>{
      console.log(response);
      this.Clients=response;
    });
  }
  deleteClient(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar el cliente")){
    this.crudService.DeleteClient(id).subscribe((response)=>{
      this.Clients.splice(iControl,1);
    });
  }
  }
}
