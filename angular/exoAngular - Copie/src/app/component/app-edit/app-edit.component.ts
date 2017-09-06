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

  constructor(private produitservice: ProduitService, private activadtedRoute:ActivatedRoute, private router: Router) {
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
   }

  ngOnInit() {
    // a linitialisation du composant on ecoute le pramametre de la route active pour etre prevenu  de lid
    // du produit a editer 
    // sensuite le param :id ds l url est disponible sous son nom
    // ds un tableau , ici donc ds paramsa["id"]
    this.activadtedRoute.params.subscribe(params => {
      console.log('params id recu ' + params['id']);
      if (parseInt(params['id']) != 0){
        let p = this.produitservice.findById(parseInt(params['id']))
        .then(p => {
          this.editProduct = p
        });
      }
    })
  }
  saveProduct(p: Produit): void{
    console.log('passage in save meth');
    this.produitservice.save(this.editProduct).then(p=>{
      console.log(p);
      this.router.navigateByUrl('/home');
    })
  }

  newProduct(): void{
    this.editProduct = new Produit(1, "patate", 0.99, 5.0, "legume");
  }

}
