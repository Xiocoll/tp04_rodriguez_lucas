import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from "rxjs";
import { Produit } from '../../produit';
import { DelProduit } from '../../shared/actions/produit-action';
import { ProduitState } from '../../shared/states/produit-state';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private store: Store) { }

  lesProduits: Observable<Produit[]>;

  ngOnInit() {
    this.lesProduits = this.store.select(ProduitState.getProduit);
  }

  onClickDelFromBasket(produit: Produit) {
    this.store.dispatch(new DelProduit(produit));
  }

}