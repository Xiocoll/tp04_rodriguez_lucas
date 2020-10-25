import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FormControl } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TetiereComponent } from "./tetiere/tetiere.component";
import { FooterComponent } from "./footer/footer.component";
import { ClientService } from "./client.service";
import { RouterModule, Routes } from "@angular/router";
import { ClientListComponent } from "./client/client-list/client-list.component";
import { PhonePipe } from "./phone.pipe";
import { TestStringDirective } from "./test-string.directive";
import { ProduitService } from "./produit.service";
/*import { ErrorDirective } from "./error.directive";*/
import { AccueilComponent } from "./accueil/accueil.component";
import { PanierComponent } from './produit/panier/panier.component';

const appRoutes: Routes = [
  { path: "clients", component: ClientListComponent },
  { path: "tetiere", component: TetiereComponent },
  { path: "footer", component: FooterComponent },
  {
    path: "produit",
    loadChildren: () =>
      import("./produit/produit-list/produit.module").then(m => m.ProduitModule)
  },
  {
    path: "formulaire",
    loadChildren: () =>
      import("./client/client.module").then(m => m.ClientModule)
  },
  { path: "accueil", component: AccueilComponent },
  { path: "panier", component: PanierComponent },
  { path: "", component: AccueilComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    ClientListComponent,
    PhonePipe,
    TestStringDirective,
    /*ErrorDirective,*/
    AccueilComponent,
    PanierComponent
  ],
  bootstrap: [AppComponent],
  providers: [ClientService, ProduitService]
})
export class AppModule {}
