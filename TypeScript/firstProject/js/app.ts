console.log('bonjour typescript');

let isFinished: boolean = false;
console.log("isFinishe = " + isFinished);
// isFinished = "hoho";

let monNom  = "otman"; //typage a la volé possible
//monNom = 42;

let dinamique: any = 15;
dinamique ="t";
console.log(dinamique);

let jour: string[] = ['lundi' , "mardi"];
console.log(jour);
// mm les fonctions sont types
function addition(x: number, y: number): number{
    return x+y;
}
console.log(addition(2,2));
class Personne {
    private nom : string;
    private prenom : string;

    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }

    saluer() : string {
        return "bonjour, " + this.nom ;
    }

    public getNom() : string { return this.nom;}
    public getPrenom() : string { return this.prenom; }
}

let p1 : Personne = new Personne("bob", "joe");
console.log(p1.saluer());

let myName: string = 'otman';
let chaine : string = `bonjour ${myName}`;
console.log(chaine); 

let tauxTva : Array<number> = [5.5,7,8.5]; // autre manierre de specifier unn tableaux
console.log(tauxTva)

enum Color {rouge, vert, bleu};
let c : Color = Color.rouge;
console.log(`${c} : ` + Color[c]);
// tuple type
let ville_cp: [string, number] = ["paris",1000000];
//taleau de tuplec
let destination : Array<[string, number]> = [["paris",75000],
                                            ["toulouse",31000],
                                            ["marseille",13000]
];
console.log(destination);