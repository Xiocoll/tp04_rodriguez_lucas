import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { produitRoutingModule } from "./produit-routing.module";
import { ProduitListComponent } from "./produit-list.component";
import { DetailProdComponent } from "./detail-prod/detail-prod.component";

@NgModule({
  imports: [CommonModule, produitRoutingModule],
  declarations: [ProduitListComponent, DetailProdComponent]
})
export class CustomersModule {}