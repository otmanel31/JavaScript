import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../services/client.service";
import { Client } from "../../metier/client";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  private editClient: Client;
  private isNewClient: boolean;
  // rue client en edition sinon false client== existant
  constructor(private clientservice: ClientService) { 
    this.editClient = new Client(0, "anonymous", "noEmail", 0);
    this.isNewClient = true;
  }

  ngOnInit() {
    this.clientservice.listenEditClient()
                      .subscribe(c=>{
                        this.editClient = c;
                        this.isNewClient = false;
                      });
  }
  sauverClient(client: Client): void{
    console.log('passage in save client');
    if (this.isNewClient){
      this.clientservice.addClient(client);
      this.isNewClient = false;
    }
  }
  nouveauClient(): void {
    this.editClient = new Client(0, "anonymous", "noEmail", 0);
    this.isNewClient = true;
  }
}
