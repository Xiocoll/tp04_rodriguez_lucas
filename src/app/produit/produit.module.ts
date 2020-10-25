import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { produitRoutingModule } from './produit-routing.module';
import { ProduitListComponent } from './produit-list/produit-list.component';

@NgModule({
  imports: [
    CommonModule,
    produitRoutingModule
  ],
  declarations: [ProduitListComponent]
})
export class CustomersModule { }