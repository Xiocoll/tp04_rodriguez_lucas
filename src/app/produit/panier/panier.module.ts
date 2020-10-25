import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PanierRoutingModule } from "./panier-routing.module";
import { PanierComponent } from "./panier.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { ArticleState } from "../../shared/states/article-state";

@NgModule({
  imports: [
    CommonModule,
    PanierRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [PanierComponent]
})
export class PanierModule {}
