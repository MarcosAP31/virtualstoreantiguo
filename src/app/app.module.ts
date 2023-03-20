import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInventoryComponent } from './components/inventory/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './components/inventory/edit-inventory/edit-inventory.component';
import { ListInventoryComponent } from './components/inventory/list-inventory/list-inventory.component';
import { AddClientComponent } from './components/client/add-client/add-client.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { ListClientComponent } from './components/client/list-client/list-client.component';
import { AddEntryComponent } from './components/entry/add-entry/add-entry.component';
import { ListEntryComponent } from './components/entry/list-entry/list-entry.component';
import { ListOutputComponent } from './components/output/list-output/list-output.component';
import { EditSaleComponent } from './components/sale/edit-sale/edit-sale.component';
import { ListSaleComponent } from './components/sale/list-sale/list-sale.component';
import { AddSupplierComponent } from './components/supplier/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './components/supplier/edit-supplier/edit-supplier.component';
import { ListSupplierComponent } from './components/supplier/list-supplier/list-supplier.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AddInventoryComponent,
    EditInventoryComponent,
    ListInventoryComponent,
    AddClientComponent,
    EditClientComponent,
    ListClientComponent,
    AddEntryComponent,
    ListEntryComponent,
    ListOutputComponent,
    EditSaleComponent,
    ListSaleComponent,
    AddSupplierComponent,
    EditSupplierComponent,
    ListSupplierComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
