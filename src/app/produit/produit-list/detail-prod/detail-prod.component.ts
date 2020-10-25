import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Produit } from "../../../produit";
import { ProduitService } from "../../../produit.service";
import { AddProduit } from '../../../shared/actions/produit-action';

@Component({
  selector: 'app-detail-prod',
  templateUrl: './detail-prod.component.html',
  styleUrls: ['./detail-prod.component.css']
})
export class DetailProdComponent implements OnInit {

  
  constructor(private route: ActivatedRoute, private produitService: ProduitService, private store: Store) { }
  prod: Observable<Produit>;

  ngOnInit() {
      this.route.params.subscribe(p => {
      const num = p["num"];
      this.prod = this.produitService.getProduitNumero(num);
    });
  }

  onClickAdd(prod: Produit) {
    this.store.dispatch(new AddProduit(prod));
  }
}