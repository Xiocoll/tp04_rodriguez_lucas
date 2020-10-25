import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";
import { ClientListComponent } from "./client-list.component";

@NgModule({
  imports: [CommonModule, ClientRoutingModule],
  declarations: [ClientListComponent]
})
export class ClientModule {}
