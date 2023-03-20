import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/service/crud.service';
import{Router,ActivatedRoute} from '@angular/router';
import { Sale } from 'src/app/service/Sale';
@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css']
})
export class EditSaleComponent implements OnInit {

  SaleForm:FormGroup;
  id:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) { 
    this.id=this.activeRoute.snapshot.paramMap.get('SaleId');
    console.log(this.id);
    this.crudService.GetSale(this.id).subscribe(
      response=>{
        console.log(response);
        this.SaleForm.setValue({
          Price:response[0]['Price'],
          State:response[0]['State'],
          
        });
      }
    );
    this.SaleForm=this.form.group(
      {
        Price:[''],
        State:[''],
        
      }
    );
  }

  ngOnInit(): void {
  }
  sendData():any{
    
    console.log(this.id);
    console.log(this.SaleForm.value);
    this.crudService.EditSale(this.id,this.SaleForm.value).subscribe(()=>{
    this.router.navigateByUrl('/list-sale');
    });
  }

}
