import { Component, OnInit } from '@angular/core';
import { Produit } from "../../metier/produit";
import { Observable } from "rxjs/Observable";
import { ProduitService } from "../../services/produit.service";
import { Subject } from "rxjs/subject";
//^permet de lisser/attendre pour eviter denvoyer trop de donnees
import "rxjs/add/operator/debounceTime"
// ne transmet une valeur du flux que si elle difffere de la precedente
import "rxjs/add/operator/distinctUntilChanged"

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  public searchTerm = "";
  // le sujet des commentaire en provennce du champ de saisie
  public searchSubject: Subject<string>;
  private produits: Observable<Produit[]>;
  constructor(private produitservice: ProduitService) { 
    this.searchSubject = new Subject<string>();
  }

  ngOnInit() {
      this.produits = this.produitservice.listenProduits();
      this.produitservice.refreshListe();
      this.searchSubject.debounceTime(300)// 1/3 de secinde
                        .distinctUntilChanged()
                        .subscribe(st => {
                          console.log("search " + st);
                          this.produitservice.setSearchterm(st);
                        })
  }
  supprimer(id: number): void{
    this.produitservice.deleteProduit(id).then(res => {
      console.log(res);
      this.produitservice.refreshListe();
    })
  }
  searchChanged(newValue: string){
    //le contenu du champ a changé, je le publie ds le subject des recherches
    this.searchSubject.next(newValue);
  }
  /*editer(id: number): void{
    console.log("appel editer");
    this.produitservice.editProduit(id);
  }*/
  // (ngModelChange)="searchUpdate($event)" ancien html
  /*searchUpdate(ev: any):void{
    console.log(ev);
    console.log('uopdate seach term ' + this.searchTerm);
    this.searchTerm = ev;
    //this.produitservice.setSearchTerm(this.searchTerm);
  }*/
}
