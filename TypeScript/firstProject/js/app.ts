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