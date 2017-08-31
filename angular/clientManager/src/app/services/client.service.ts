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
  // previent de changement ds la lsite des clinets
  private clientSubject: Subject<Client[]>;
  // previent dun  nouveau choix de client a editer
  private editClientSubject: Subject<Client>;

  constructor() {
    // ceci est ma source de liste client pour ceux quyi en ont besoin
    this.clientSubject = new Subject();
    this.clientSubject.next(this.clients);
    this.editClientSubject = new Subject<Client>();
  }
  listenEditClient(): Observable<Client>{
    return this.editClientSubject.asObservable();
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
    console.log(this.clients);
    
    // pousser le tableaux des clients mise a jours vers tt ceux
    // qui sont abonnes a notre subject via des observables
    this.clientSubject.next(this.clients);
  }
  deleteClient(id: number): void {
    let pos:number = this.clients.findIndex(c => c.id == id);
    if (pos != 1) this.clients.splice(pos, 1);
    this.clientSubject.next(this.clients);
  }
  editerClient(id: number): void {
    let pos:number = this.clients.findIndex(c => c.id == id);
    if (pos != 1) {
      let c = this.clients[pos];
      this.editClientSubject.next(c);
    }
  }
}
