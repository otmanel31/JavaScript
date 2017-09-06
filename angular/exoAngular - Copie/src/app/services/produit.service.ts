import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Produit } from "../metier/produit";
import { Http } from "@angular/http";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/map";

@Injectable()
export class ProduitService {

  private searchTerm: string;
  private produitSubject: BehaviorSubject<Produit[]>;

  constructor(private http: Http) { 
    
    this.produitSubject = new BehaviorSubject<Produit[]>([]);
  }

  public setSearchterm(searchTerm: string): void{
    this.searchTerm = searchTerm;
    this.refreshListe();
  }

  public refreshListe(){
    let url: string;
    if (this.searchTerm != null && this.searchTerm.length > 0){
      url = `http://localhost:8080/produitRest/api/produits/searchTitre/${this.searchTerm}`;
    }
    else{
      url = ("http://localhost:8080/produitRest/api/produits");
    }
    // dont forget to convret json to object
    this.http.get(url).map(response => <Produit[]>response.json()).toPromise()
      .then(data => {
        this.produitSubject.next(data);
      })
  }
  listenProduits(): Observable<Produit[]>{
    return this.produitSubject.asObservable();
  }
  listenEditProduit(): Observable<Produit>{
    return;
  }

  /*getProduitts(): Produit[]{
    return this.produits.slice();
  }*/
  addProduit(p: Produit): void{
    console.log('add product ' + p);
    
  }
  deleteProduit(pid: number): Promise<any>{
    console.log('delete product ' + pid);
    /*let pos: number = this.produits.findIndex( c => c.id == pid);
    if (pos != -1) {
      console.log("passe " + pos);
      
      this.produits.splice(pos, 1);
      this.produitSubject.next(this.produits.slice());
    }*/
    return this.http.delete(`http://localhost:8080/produitRest/api/produits/${pid}`)
      .map(res => res.json() as any)
      .toPromise();
  }
  
  findById(pid: number):Promise<Produit>{
    /*let p =  this.produits.find(p=> p.id == pid);
    if (typeof(p) == "undefined") return null;
    else return p;*/
    return this.http.get(`http://localhost:8080/produitRest/api/produits/${pid}`)
        .map(response => response.json() as Produit)
        .toPromise();
      //return null;
  }
  save(p: Produit): Promise<Produit>{
    return this.http.post("http://localhost:8080/produitRest/api/produit", p)
      .map(resp => resp.json() as Produit)
      .toPromise();
  }

}
