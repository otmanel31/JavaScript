import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Profil } from "../../metier/profil";
import { ProfilService } from "../../service/profil.service";
import { Subject } from "rxjs/Subject";
//^permet de lisser/attendre pour eviter denvoyer trop de donnees
import "rxjs/add/operator/debounceTime";
// ne transmet une valeur du flux que si elle difffere de la precedente
import "rxjs/add/operator/distinctUntilChanged";

@Component({
  selector: 'app-liste-profils',
  templateUrl: './liste-profils.component.html',
  styleUrls: ['./liste-profils.component.css']
})
export class ListeProfilsComponent implements OnInit {

  private filter: string = "";
  private profils: Observable<Profil[]>;
  private searchSubject: Subject<string>;
  public fieldname: string;
  public sortorder: boolean;

  constructor(private profilservice: ProfilService) { 
    this.searchSubject = new Subject<string>();
   }

  ngOnInit() {
    this.profils = this.profilservice.listenProfils();
    this.profilservice.refreshListe();
    this.filter = "name";

    this.searchSubject.debounceTime(1000)
                      .distinctUntilChanged() // possibilite de fournir un function de  comparaison
                      .subscribe(st=>{
                        console.log(st);
                        this.profilservice.SetSearchTerm(st, this.filter);
                      })
  }
  supprimer(pid: number): void{
    this.profilservice.deleteProduct(pid).then(resp => {
      console.log(resp);
      this.profilservice.refreshListe();
    })
  }
  searchChanged(value: string): void{
    this.searchSubject.next(value);
  }
  setSort(name: string): void{
    console.log("in sort meth " + this.fieldname + "name =>"+name);
    
    //si on change de colonne de tri
    if(name != this.fieldname){
      // lindiquer au filtre
      this.fieldname= name;
      // et repasser en tri croissant
      this.sortorder = true;
    }
    //sinon on reste sur le mm champs mais change lordre aussi
    {
      this.sortorder = !this.sortorder
    }
  }
}
