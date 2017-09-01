import { Injectable } from '@angular/core';
import { Produit } from "../metier/Produit";

import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ProduitService {
  private produits : Produit[];
  private produitsSubject : BehaviorSubject<Produit[]>;
  private produitEditSubject : Subject<Produit>;
  private searchTerm : string;

  constructor() { 
    this.produits = [];
    this.produitsSubject = new BehaviorSubject<Produit[]>(this.produits);
    this.produitEditSubject = new Subject<Produit>();
    this.searchTerm = "";
  }

  // abonnements disponnibles
  getProduitsObservable() : Observable<Produit[]> {
    return this.produitsSubject.asObservable();
  }
  getProduitEditObservable() : Observable<Produit> {
    return this.produitEditSubject.asObservable();
  }

  // manipulationd de produits

  add(p : Produit) :void {
    this.produits.push(p);
    this.refreshListe();
  }
  delete(id : number) : void {
    let pos : number = this.produits.findIndex(p => p.id == id);
    if (pos != -1) {
      this.produits.splice(pos, 1);
      this.refreshListe();
    }
  }
  editer(id : number) : void {
    let pos : number = this.produits.findIndex(p => p.id == id);
    if (pos != -1) {
      let p = this.produits[pos];
      this.refreshListe();
    }
  }

  setSearchTerm(searchterm : string) : void {
    // si le searchterm change,
    // rafraichir la liste
   this.searchTerm = searchterm;
   this.refreshListe();
  }

  private refreshListe() {
    this.produitsSubject.next(
      this.produits.filter((p, pos) => p.nom.startsWith(this.searchTerm))
    );
  } 

}
