import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Client } from "../../metier/client";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  nbClients: number = 0;
  clients : Observable<Client[]>;
  constructor(private clientservice: ClientService) { }

  ngOnInit() {
    //this.clients = this.clientservice.getClients();
    //this.nbClient = this.clients.length;
    this.clients = this.clientservice.listenClients();
    // je souscris a lobservable des clients -  chaque fois que
    // je recois un nouveu tableau de client, je recalcule le nbClient
    this.clients.subscribe(tc=>{
      this.nbClients = tc.length;
    });
  }

}
