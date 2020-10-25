import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitListComponent } from './produit-list/produit-list.component';


const routes: Routes = [
  {
    path: '',
    component: ProduitListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }