import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Observable } from "rxjs/Observable";
import { Client } from "../../metier/client";

@Component({
  selector: 'app-client-liste',
  templateUrl: './client-liste.component.html',
  styleUrls: ['./client-liste.component.css']
})
export class ClientListeComponent implements OnInit {

  public clients: Observable<Client[]>;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.listenClients(); // pas besoin de souscrire ns mm le ngfor sans charge lui mm via le pipe async
  }
  supprimer(id: number): void {
    this.clientService.deleteClient(id);
  }
  editer(id: number): void{
    this.clientService.editerClient(id);
  }

}
