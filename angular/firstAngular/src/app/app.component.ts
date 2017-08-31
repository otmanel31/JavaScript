import { Component, OnInit } from '@angular/core';
import { ClientService } from "./services/client.service";
import { Client } from "./metier/client";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService] /* on lui indique que c une classe quil pe injecté  providers = fournisseur de service*/
})
export class AppComponent implements OnInit{
  title = 'app';
  introduction = 'ma super intro';
  compteur:number = 0;
  titleVisible: boolean = false; 
  clients : Observable<Client[]>;
  editClient: Client;
  constructor(private clientservice: ClientService){}

  incrementCompteur(): void{
    this.compteur++;
  }
  ngOnInit(): void {
    this.clients = this.clientservice.listenClients();
    this.editClient = new Client(0, "toto", "noemail");
  }
  ajouterClient(eClient: Client){
    console.log(eClient);
    this.clientservice.addClient(eClient);
    // pas ideal ci dessous
    //this.clients = this.clientservice.getClients();
    this.editClient = new Client(0, "anonymous", "nomail");
  }
}
