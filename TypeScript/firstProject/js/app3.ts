class Humain{
    protected prenom: string;
    private nom: string;

    constructor(nom:string, prenom:string){
        this.nom = nom;
        this.prenom = prenom;
    }
    public getPrenom(): string { return this.prenom;}
    public getNom(): string {return this.nom;}

    public saluer(): string {
        return `bonjour ${this.nom} ${this.prenom}`;
    }
}
let h1 : Humain = new Humain('otman', 'toto');
console.log(h1.saluer());

class Client extends Humain {
    public email: string;
    constructor(nom:string, prenom: string, email:string){
        super(nom, prenom);
        this.email = email;
    }
    saluer() : string {
        return super.saluer() +  ` cher client ${this.email}`;
    }
}
let c1 : Client = new Client('naruto', 'uzumaki', "n@z.jp");
console.log(c1.saluer());

abstract class Figure {
    x: number;
    y: number;
    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }
    abstract afficher(): string;
}
let fig1: Figure;
// fig1 = new Figure(2,5);

interface Affichable{
    afficher(): string;
}

class Triangle extends Figure implements Affichable {
    taille: number;
    constructor(x:number, y:number, taille:number){
        super(x, y);
        this.taille = taille;
    }
    afficher() : string {
        return `je suis un triangle de taille ${this.taille} placé a ${this.x}, ${this.y}`;
    }
}
fig1 = new Triangle(4,5, 35);
console.log(fig1.afficher());

class Livre {
    constructor(private titre:string, private auteur: string, public nbPages: number){

    }
    afficher() : string {
        return `livre: ${this.titre}, ${this.auteur}, ${this.nbPages} !`;
    }
}

let lv1 = new Livre("la tour sombre", "stephen king", 450);
console.log(lv1.afficher());
