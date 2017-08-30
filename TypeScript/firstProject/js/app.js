console.log('bonjour typescript');
var isFinished = false;
console.log("isFinishe = " + isFinished);
// isFinished = "hoho";
var monNom = "otman"; //typage a la volé possible
//monNom = 42;
var dinamique = 15;
dinamique = "t";
console.log(dinamique);
var jour = ['lundi', "mardi"];
console.log(jour);
// mm les fonctions sont types
function addition(x, y) {
    return x + y;
}
console.log(addition(2, 2));
var Personne = (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.saluer = function () {
        return "bonjour, " + this.nom;
    };
    Personne.prototype.getNom = function () { return this.nom; };
    Personne.prototype.getPrenom = function () { return this.prenom; };
    return Personne;
}());
var p1 = new Personne("bob", "joe");
console.log(p1.saluer());
var myName = 'otman';
var chaine = "bonjour " + myName;
console.log(chaine);
var tauxTva = [5.5, 7, 8.5]; // autre manierre de specifier unn tableaux
console.log(tauxTva);
var Color;
(function (Color) {
    Color[Color["rouge"] = 0] = "rouge";
    Color[Color["vert"] = 1] = "vert";
    Color[Color["bleu"] = 2] = "bleu";
})(Color || (Color = {}));
;
var c = Color.rouge;
console.log(c + " : " + Color[c]);
// tuple type
var ville_cp = ["paris", 1000000];
//taleau de tuplec
var destination = [["paris", 75000],
    ["toulouse", 31000],
    ["marseille", 13000]
];
console.log(destination);
//# sourceMappingURL=app.js.map