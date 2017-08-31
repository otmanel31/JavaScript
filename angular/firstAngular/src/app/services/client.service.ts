import { Injectable } from '@angular/core';
import { Client } from "../metier/client";

// la classse qui encapsule quelques chose dobservable
import { Observable } from "rxjs/observable";
// un sujet une source observable
import { Subject } from "rxjs/subject";

@Injectable()
export class ClientService {
  private clients: Client[] = [];
    /*new Client(1, "bob", 'tg@tg.com'),
    new Client(2, "joe", 'tg@tg.com')
  ]*/
  private clientSubject: Subject<Client[]>;

  constructor() {
    // ceci est ma source de liste client pour ceux quyi en ont besoin
    this.clientSubject = new Subject();
  }

  listenClients(): Observable<Client[]>{
    // quelqun veur ecouter ma source de donnees, je lui renvoie
    // un observable dessus
    return this.clientSubject.asObservable();
  }

  getClients(): Client[]{
    // une copie de la liste des clients
    return this.clients.slice();
  }
  addClient(c: Client): void{
    this.clients.push(c);
    // pousser le tableaux des clients mise a jours vers tt ceux
    // qui sont abonnes a notre subject via des observables
    this.clientSubject.next(this.clients);
  }
}
