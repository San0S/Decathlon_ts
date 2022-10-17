export class Participant {
    private nom : string;
    private prenom : string;
    private nationnalite : string;
    private age : number;
    private numero : number;
    private points : number = 0;


    constructor(nom : string, prenom : string, nationnalite : string, age : number, numero : number) {
        this.nom = nom;
        this.prenom = prenom;
        this.nationnalite = nationnalite;
        this.age = age;
        this.numero = numero;
    }

    formatAfficher(): string {
        return this.nom.toUpperCase() + " " + this.prenom + "(" + this.nationnalite + "), n°" + this.numero;
    }


    getPrenom(): string     { return this.prenom; }
        setPrenom( prenom : string )    { this.prenom = prenom; }
    getNom(): string        { return this.nom; }
        setNom( nom : string )          { this.nom = nom; }
    getNationnalite(): string { return this.nationnalite; }
        setNationnalite( nat : string ) { this.nationnalite = nat; }
    getAge(): number        { return this.age; }
        setAge( age : number )          { this.age = age; }
    getNumero(): number     { return this.numero; }
        setNumero( num : number )       { this.numero = num; }
    getPoints(): number     { return this.points; }
        setPoints( pts : number )       { this.points = pts; }



    ajouterPoints(pts : number) : void {
        this.points += pts;
    }

}