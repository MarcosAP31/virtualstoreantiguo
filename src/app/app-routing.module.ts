import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { AddEntryComponent } from './components/entry/add-entry/add-entry.component';
import { ListEntryComponent } from './components/entry/list-entry/list-entry.component';
import { AddInventoryComponent } from './components/inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './components/inventory/edit-inventory/edit-inventory.component';
import { ListInventoryComponent } from './components/inventory/list-inventory/list-inventory.component';
import { ListOutputComponent } from './components/output/list-output/list-output.component';
import { EditSaleComponent } from './components/sale/edit-sale/edit-sale.component';
import { ListSaleComponent } from './components/sale/list-sale/list-sale.component';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './components/supplier/edit-supplier/edit-supplier.component';
import { ListSupplierComponent } from './components/supplier/list-supplier/list-supplier.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo:'list-inventory'},
  {path: 'add-client', component:AddClientComponent},
  {path: 'list-client', component:ListClientComponent},
  {path: 'edit-client/:id', component:EditClientComponent},
  {path: 'add-entry', component:AddEntryComponent},
  {path: 'list-entry', component:ListEntryComponent},
  {path: 'add-inventory', component:AddInventoryComponent},
  {path: 'list-inventory', component:ListInventoryComponent},
  {path: 'edit-inventory/:id', component:EditInventoryComponent},
  {path: 'list-output', component:ListOutputComponent},
  {path: 'list-sale', component:ListSaleComponent},
  {path: 'edit-sale/:id', component:EditSaleComponent},
  {path: 'add-supplier', component:AddSupplierComponent},
  {path: 'list-supplier', component:ListSupplierComponent},
  {path: 'edit-supplier/:id', component:EditSupplierComponent},
  {path: 'add-user', component:AddUserComponent},
  {path: 'list-user', component:ListUserComponent},
  {path: 'edit-user/:id', component:EditUserComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
