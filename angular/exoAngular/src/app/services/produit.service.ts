import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Produit } from "../metier/produit";

@Injectable()
export class ProduitService {

  private produits: Produit[];
  private produitSubject: BehaviorSubject<Produit[]>;
  private editProduitSubject: Subject<Produit>;

  constructor() { 
    this.produits = [];
    this.produitSubject = new BehaviorSubject(this.produits);
    this.produitSubject.next(this.produits);
    this.editProduitSubject = new Subject<Produit>();
  }
  listenProduits(): Observable<Produit[]>{
    return this.produitSubject.asObservable();
  }
  listenEditProduit(): Observable<Produit>{
    return this.editProduitSubject.asObservable();
  }

  getProduitts(): Produit[]{
    return this.produits.slice();
  }
  addProduit(p: Produit): void{
    console.log('add product ' + p);
    
    this.produits.push(p);
    this.produitSubject.next(this.produits);
  }
  deleteProduit(pid: number): void{
    console.log('delete product ' + pid);
    let pos: number = this.produits.findIndex( c => c.id == pid);
    if (pos != -1) {
      console.log("passe " + pos);
      
      this.produits.splice(pos, 1);
      this.produitSubject.next(this.produits);
    }
  }
  editProduit(pid: number): void{
    console.log('edit product ' + pid);
    let pos: number = this.produits.findIndex( c => c.id == pid);
    if (pos != -1) {
      let c = this.produits[pos]
      this.editProduitSubject.next(c);
    }
  }
  /*
  setSearchTerm(searchTerm: string): void{
    console.log("in srevice " + searchTerm);
    console.log( this.produits.filter((p, pos)=>{
      p.nom.startsWith(searchTerm);
    }));
    
    this.produitSubject.next(
      this.produits.filter((p, pos)=>{
        return p.nom.startsWith(searchTerm);
      })
    );
  }*/
}
