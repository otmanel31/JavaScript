import { Client } from "./client";

export class ClientStore{
    private clients: Array<Client> = [];

    constructor(){}

    addClient(client: Client): void{
        this.clients.push(client);
    }
    clearClients(): void{
        this.clients = [];
    }
    removeClient(id: number): void{
        let pos: number = this.clients.findIndex( c=> c.id == id );
        if (pos != -1){
            this.clients.splice(pos, 1); // miex que delete clients[pos] car compacte le tableau et ne laisse pas de case vide
        }
        
    }
    getClients(): Array<Client> {
        return this.clients;
    }
}