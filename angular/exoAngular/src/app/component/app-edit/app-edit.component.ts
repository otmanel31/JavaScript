import { Component, OnInit } from '@angular/core';
import { Produit } from "../../metier/produit";
import { ProduitService } from "../../services/produit.service";

@Component({
  selector: 'app-edit',
  templateUrl: './app-edit.component.html',
  styleUrls: ['./app-edit.component.css']
})
export class AppEditComponent implements OnInit {

  private editProduct: Produit;
  private isNewProduct: boolean = false;
  constructor(private produitservice: ProduitService) {
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
    this.isNewProduct = true;
   }

  ngOnInit() {
    this.produitservice.listenEditProduit().subscribe(c=>{
      this.editProduct = c;
      this.isNewProduct = true;
    })
  }
  saveProduct(p: Produit): void{
    console.log('passage in save meth');
    if (this.isNewProduct){
      this.produitservice.addProduit(p);
      this.isNewProduct = false;
    }
  }
  newProduct(): void{
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
    this.isNewProduct = true;
  }

}
