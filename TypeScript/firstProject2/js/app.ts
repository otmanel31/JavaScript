import { Client } from "./client";
import { ClientStore } from "./clientStore";

export class App{
    private clientStore: ClientStore;
    private div_client: HTMLElement;
    private addButton: HTMLElement;

    private champ_id: HTMLInputElement;
    private champ_nom: HTMLInputElement;
    private champ_prenom: HTMLInputElement;
    private champ_email: HTMLInputElement;

    constructor(){
        this.clientStore = new ClientStore();
    }

     initPage():void{
        console.log("demmarage de l' application");   
        /*let c1: Client = new Client(0, "stalone", "sylvster", 'rambo@adeline.com');
        console.log(c1.toString());*/
        this.div_client = document.getElementById('clients');
        this.addButton = document.getElementById('ajoutClient');

        this.champ_id = <HTMLInputElement>document.getElementById('id');
        this.champ_nom = <HTMLInputElement>document.getElementById('nom');
        this.champ_prenom = <HTMLInputElement>document.getElementById('prenom');
        this.champ_email = <HTMLInputElement>document.getElementById('email');
        
        //this.addButton.addEventListener("click", this.ajouteClient); // mauvais car this positioonne sur buton
        // une des caracteristiques des eurofonctions est quelle preservent automatiquement le this
        /*let self = this
        this.addButton.addEventListener("click", function(e){
           // this.ajouterClient(e); // mauvais car this pointe sur wibdows obliger de passer par var self
           self.ajouterClient(e);
        });*/

        this.addButton.addEventListener("click", e=>this.ajouterClient(e));

        this.clientStore.addClient(new Client(1, 'statham', 'jason', "statham@john.com"));
        this.clientStore.addClient(new Client(2, 'tortue', 'geniale', "tortue@kamehouse.com"));
        
        this.refreshListe();
    }

    ajouterClient(event: Event): void {
        console.log("in ajout client demander");
        let client = new Client(parseInt(this.champ_id.value), this.champ_nom.value, this.champ_prenom.value, this.champ_email.value);
        this.clientStore.addClient(client);
        this.refreshListe();
    }

    refreshListe(): void {
        let clients = this.clientStore.getClients();
        let html = "";        
        /* old clients.forEach((client,index) =>{
            html += `<li>${client.nom}</li>`
        });
        html += "</ul>";*/
        clients.forEach((client, index)=>{
            html += `<div class="div-client" data-cid=${client.id}><h3>${client.nom} - ${client.prenom}</h3>
                    <p>contact: ${client.email} - Id: ${client.id} </div>`;
        });
        this.div_client.innerHTML = html;
        let divs = document.getElementsByClassName('div-client');
        let self = this;
        for (let index=0; index<divs.length; index++){
            divs.item(index).addEventListener('click', e=> this.removeClient(e));
            /*divs.item(index).addEventListener('click', function(e){
                self.removeClient(this);
            });*/
        }
    }

    removeClient(event: Event){
        console.log("in remove methode");
        
        let cid = parseInt((<HTMLElement>event.currentTarget).getAttribute('data-cid'));
        console.log("remove " +cid);
        this.clientStore.removeClient(cid);
        this.refreshListe();
    }
   /*removeClient(div: HTMLElement){
        console.log("in remove methode");
        
        let cid = parseInt(div.getAttribute('data-cid'));
        console.log("remove " +cid);
        
    }*/
}
// ancienne version via onload sur body et script src=cefichier
/*function initPage():void{
    console.log("demmarage de l' application");    
    let c1: Client = new Client("stalone", "sylvster", 'rambo@adeline.com');
    console.log(c1.toString());
}*/