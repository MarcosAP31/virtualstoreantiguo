import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import { Client } from './Client';
import { Entry } from './Entry';
import { Output } from './Output';
import { Product } from './Product';
import { Sale } from './Sale';
import { SaleXProduct } from './SaleXProduct';
import { Supplier } from './Supplier';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  APICLIENT: string="http://localhost/apistore/client.php";
  APIENTRY: string="http://localhost/apistore/entry.php";
  APIOUTPUT: string="http://localhost/apistore/output.php";
  APIPRODUCT: string="http://localhost/apistore/product.php";
  APISALE: string="http://localhost/apistore/sale.php";
  APISALEXPRODUCT: string="http://localhost/apistore/salexproduct.php";
  APISUPPLIER: string="http://localhost/apistore/supplier.php";
  APIUSER: string="http://localhost/apistore/user.php";
  constructor(private clientHttp:HttpClient,
    private entryHttp:HttpClient,
    private outputHttp:HttpClient,
    private productHttp:HttpClient,
    private saleHttp:HttpClient,
    private salexproductHttp:HttpClient,
    private supplierHttp:HttpClient,
    private userHttp:HttpClient
    
    ) { }
  //CLIENT
  AddClient(dataClient:Client):Observable<any>{
    return this.clientHttp.post(this.APICLIENT+"?insert=1",dataClient);
  }
  GetClients(){
    return this.clientHttp.get(this.APICLIENT);
  }
  DeleteClient(id:any):Observable<any>{
    return this.clientHttp.get(this.APICLIENT+"?delete="+id);
  }
  GetClient(id:any):Observable<any>{
    return this.clientHttp.get(this.APICLIENT+"?consult="+id);
  }
  EditClient(id:any,dataClient:any):Observable<any>{
    return this.clientHttp.post(this.APICLIENT+"?update="+id,dataClient);
  }

  //ENTRY
  AddEntry(dataEntry:Entry):Observable<any>{
    return this.entryHttp.post(this.APIENTRY+"?insert=1",dataEntry);
  }
  GetEntrys(){
    return this.entryHttp.get(this.APIENTRY);
  }
  DeleteEntry(id:any):Observable<any>{
    return this.entryHttp.get(this.APIENTRY+"?delete="+id);
  }
  GetEntry(id:any):Observable<any>{
    return this.entryHttp.get(this.APIENTRY+"?consult="+id);
  }
  EditEntry(id:any,dataEntry:any):Observable<any>{
    return this.entryHttp.post(this.APIENTRY+"?update="+id,dataEntry);
  }

  //OUTPUT
  AddOutput(dataOutput:Output):Observable<any>{
    return this.outputHttp.post(this.APIOUTPUT+"?insert=1",dataOutput);
  }
  GetOutputs(){
    return this.outputHttp.get(this.APIOUTPUT);
  }
  DeleteOutput(id:any):Observable<any>{
    return this.outputHttp.get(this.APIOUTPUT+"?delete="+id);
  }
  GetOutput(id:any):Observable<any>{
    return this.outputHttp.get(this.APIOUTPUT+"?consult="+id);
  }
  EditOutput(id:any,dataOutput:any):Observable<any>{
    return this.outputHttp.post(this.APIOUTPUT+"?update="+id,dataOutput);
  }

  //PRODUCT
  AddProduct(dataProduct:Product):Observable<any>{
    return this.productHttp.post(this.APIPRODUCT+"?insert=1",dataProduct);
  }
  GetProducts(){
    return this.productHttp.get(this.APIPRODUCT);
  }
  DeleteProduct(id:any):Observable<any>{
    return this.productHttp.get(this.APIPRODUCT+"?delete="+id);
  }
  GetProduct(id:any):Observable<any>{
    return this.productHttp.get(this.APIPRODUCT+"?consult="+id);
  }
  EditProduct(id:any,dataProduct:any):Observable<any>{
    return this.productHttp.post(this.APIPRODUCT+"?update="+id,dataProduct);
  }

  //SALE
  AddSale(dataSale:Sale):Observable<any>{
    return this.saleHttp.post(this.APISALE+"?insert=1",dataSale);
  }
  GetSales(){
    return this.saleHttp.get(this.APISALE);
  }
  DeleteSale(id:any):Observable<any>{
    return this.saleHttp.get(this.APISALE+"?delete="+id);
  }
  GetSale(id:any):Observable<any>{
    return this.saleHttp.get(this.APISALE+"?consult="+id);
  }
  EditSale(id:any,dataSale:any):Observable<any>{
    return this.saleHttp.post(this.APISALE+"?update="+id,dataSale);
  }

  //SALEXPRODUCT
  AddSaleXProduct(dataSaleXProduct:SaleXProduct):Observable<any>{
    return this.salexproductHttp.post(this.APISALEXPRODUCT+"?insert=1",dataSaleXProduct);
  }
  GetSaleXProducts(){
    return this.salexproductHttp.get(this.APISALEXPRODUCT);
  }
  DeleteSaleXProduct(id:any):Observable<any>{
    return this.salexproductHttp.get(this.APISALEXPRODUCT+"?delete="+id);
  }
  GetSaleXProduct(id:any):Observable<any>{
    return this.salexproductHttp.get(this.APISALEXPRODUCT+"?consult="+id);
  }
  EditSaleXProduct(id:any,dataSaleXProduct:any):Observable<any>{
    return this.salexproductHttp.post(this.APISALEXPRODUCT+"?update="+id,dataSaleXProduct);
  }

  //SUPPLIER
  AddSupplier(dataSupplier:Supplier):Observable<any>{
    return this.supplierHttp.post(this.APISUPPLIER+"?insert=1",dataSupplier);
  }
  GetSuppliers(){
    return this.supplierHttp.get(this.APISUPPLIER);
  }
  DeleteSupplier(id:any):Observable<any>{
    return this.supplierHttp.get(this.APISUPPLIER+"?delete="+id);
  }
  GetSupplier(id:any):Observable<any>{
    return this.supplierHttp.get(this.APISUPPLIER+"?consult="+id);
  }
  EditSupplier(id:any,dataSupplier:any):Observable<any>{
    return this.supplierHttp.post(this.APISUPPLIER+"?update="+id,dataSupplier);
  }

  //USER
  AddUser(dataUser:User):Observable<any>{
    return this.userHttp.post(this.APIUSER+"?insert=1",dataUser);
  }
  GetUsers(){
    return this.userHttp.get(this.APIUSER);
  }
  DeleteUser(id:any):Observable<any>{
    return this.userHttp.get(this.APIUSER+"?delete="+id);
  }
  GetUser(id:any):Observable<any>{
    return this.userHttp.get(this.APIUSER+"?consult="+id);
  }
  EditUser(id:any,dataUser:any):Observable<any>{
    return this.userHttp.post(this.APIUSER+"?update="+id,dataUser);
  }
}
