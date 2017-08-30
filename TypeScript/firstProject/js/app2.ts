function addition(x:number, y:number): number{
    return x + y;
}
let a = 10;
let b = 15;
let e  = addition(a,b);
console.log(e);

interface denomination {
    nom: string;
    prenom: string;
}

function salutation(identité: denomination): void{
    console.log("bonjour " + identité.nom + " " + identité.prenom);
}
salutation({nom:"totman", prenom:'toto'});

// passer cela de maniere indirecte marche, inserer lobjet ds la function en param c plus stricte
let myIdentity = {nom:"otman", prenom:'toto', age:45};
salutation(myIdentity);

interface Societe {
    nom:string; 
    siret: string; 
    objet?: string;
}
function afficher(infos: Societe): void {
    console.log(`${infos.nom} ${infos.siret} but= ` + (infos.objet ? infos.objet: "inconnu"));
}
afficher({nom:"edugroupe", siret:'127sfd'});

interface Produit {
    readonly id: number;
    nom: string;
    prix: number;
}
let p: Produit ={id:1, nom:"steak", prix:29.99};
p.prix = 39.99;
// p.id = 2;

interface OperationMathematique {
    (valeur:number) : number;
}
let carre: OperationMathematique;
carre = (valeur: number)=>{
    return valeur * valeur;
}
console.log(carre(6));

// je deifnit unne map de string verd string en lecteure seule
interface MapLectureSeul {
    readonly [index: string] : string;
}
let capitales: MapLectureSeul = {
    "france": "paris",
    "espagne":"madrid",
    "angleterre": "londres",
    "ecosse":"edimbourg"
}
// marche pas car en readonly
//capitales['maroc'] = "rabat";