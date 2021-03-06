import { Component, OnInit } from '@angular/core';
import { Produit } from "../../metier/produit";
import { ProduitService } from "../../services/produit.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.css']
})
export class AppEditComponent implements OnInit {

  private editProduct: Produit;
  private isNewProduct: boolean = false;

  constructor(private produitservice: ProduitService, private activadtedRoute:ActivatedRoute, private router: Router) {
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
    this.isNewProduct = true;
   }

  ngOnInit() {
    // a linitialisation du composant on ecoute le pramametre de la route active pour etre prevenu  de lid
    // du produit a editer 
    // sensuite le param :id ds l url est disponible sous son nom
    // ds un tableau , ici donc ds paramsa["id"]
    this.activadtedRoute.params.subscribe(params => {
      console.log('params id recu ' + params['id']);
      let p = this.produitservice.findById(parseInt(params['id']));
      if (p == null){
        this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
        this.isNewProduct = true;
      }
      else {
        this.editProduct = p;
        this.isNewProduct = false;
      }
    })
    this.produitservice.listenEditProduit().subscribe(c=>{
      this.editProduct = c;
      this.isNewProduct = true;
    })
  }
  saveProduct(p: Produit): void{
    console.log('passage in save meth');
    if (this.isNewProduct){
      this.produitservice.addProduit(p);
      //this.isNewProduct = false;
    }
    this.router.navigateByUrl('/home');
  }
  newProduct(): void{
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
    this.isNewProduct = true;
  }

}
