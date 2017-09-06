import { Component, OnInit } from '@angular/core';
import { Produit } from "../../metier/produit";
import { Observable } from "rxjs/Observable";
import { ProduitService } from "../../services/produit.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  public searchTerm = "";
  private produits: Observable<Produit[]>;
  constructor(private produitservice: ProduitService) { }

  ngOnInit() {
      this.produits = this.produitservice.listenProduits();
  }
  supprimer(id: number): void{
    this.produitservice.deleteProduit(id);
  }
  editer(id: number): void{
    console.log("appel editer");
    this.produitservice.editProduit(id);
  }
  // (ngModelChange)="searchUpdate($event)" ancien html
  /*searchUpdate(ev: any):void{
    console.log(ev);
    console.log('uopdate seach term ' + this.searchTerm);
    this.searchTerm = ev;
    //this.produitservice.setSearchTerm(this.searchTerm);
  }*/
}
