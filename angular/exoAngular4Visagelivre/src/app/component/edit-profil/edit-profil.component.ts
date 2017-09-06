import { Component, OnInit } from '@angular/core';
import { Profil } from "../../metier/profil";
import { ProfilService } from "../../service/profil.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  private editProduct: Profil;
  constructor(private profilservice: ProfilService,
    private activatedroute: ActivatedRoute, // pour recupere params de la route active ou hsitorique : navigation interne d angular
    private router: Router
  ){ 
    this.editProduct = new Profil(0, "", "", "", "", "");
  }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      console.log("params recu ds init de edit produit " + params['id']);
      let id = parseInt(params['id']);
      if (id != 0){
        this.profilservice.findById(id).then(p => this.editProduct = p)
      }
    })
  }

  save(p: Profil): void{
    console.log("passsage in save meth in app edit component");
    this.profilservice.save(p).then(p => {
      console.log('porduct save ' + p)
      this.router.navigateByUrl('/home')
    })
    
  }
}
