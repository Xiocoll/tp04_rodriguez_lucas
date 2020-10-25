import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from "../../../produit";
import { ProduitService } from "../../../produit.service";

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent implements OnInit {

  prod: Observable<Produit>;
  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const num = params["num"];
      this.prod = this.produitService.getProduitNumero(num);
    });
  }

  onClickAdd(produit: Produit) {}

}