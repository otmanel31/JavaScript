import { Component, OnInit, OnDestroy } from '@angular/core';
import { Produit } from "../../metier/Produit";
import { ProduitService } from "../../services/produit.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.css']
})
export class ProduitEditComponent implements OnInit, OnDestroy {



  public editProduit : Produit;
  public isNewProduit : boolean;
  private abonnement : Subscription;

  constructor(private produitService : ProduitService) { }

  ngOnInit() {
    this.editProduit = new Produit(0, "", 19.99, 1.0,  "divers");
    this.isNewProduit = true;
    /*
      la methode subscribe de observable fait 2 choses:
        1) prend en parametre notre methode a appeler
        quand une nouvelle donnée est disponnible
        2) me renvoie une souscription, que je peut utiliser
        pour me desabonner par la suite ou savoir si l'abonnement
        est toujours actif par exemple
    */
    this.abonnement = this.produitService.getProduitEditObservable().subscribe(p=> {
      this.editProduit = p;
      this.isNewProduit = false;
    });
  }

  ngOnDestroy(): void {
    if (this.abonnement && !this.abonnement.closed) {
      this.abonnement.unsubscribe();
    }
  }

  sauver() : void {
    if (this.isNewProduit) {
      this.produitService.add(this.editProduit);

      this.editProduit = new Produit(0, "", 19.99, 1.0,  "divers");
      this.isNewProduit = true;
    }
    
  }
  nouveau() : void {
    this.editProduit = new Produit(0, "", 19.99, 1.0,  "divers");
    this.isNewProduit = true;
  }

}
