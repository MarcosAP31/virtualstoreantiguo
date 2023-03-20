import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-list-output',
  templateUrl: './list-output.component.html',
  styleUrls: ['./list-output.component.css']
})
export class ListOutputComponent implements OnInit {

  Outputs:any;
  constructor(
    private crudService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.GetOutputs().subscribe(response=>{
      console.log(response);
      this.Outputs=response;
    });
  }
  deleteOutput(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar la salida?")){
    this.crudService.DeleteOutput(id).subscribe((response)=>{
      this.Outputs.splice(iControl,1);
    });
  }
  }

}
