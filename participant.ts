import * as Resultat from "./resultat";

export class Participant {
    private nom : string;
    private prenom : string;
    private nationnalite : string;
    private age : number;
    private numero : number;
    private points : number = 0;


    // Résultat de l'athlète aux différentes épreuves
    private resultatCentMetres : Resultat.CentMetres;
    private resultatCentDixMetresHaies : Resultat.CentDixMetresHaies;
    private resultatQuatreCentsMetres : Resultat.QuatreCentsMetres;
    private resultatMilleCinqCentsMetres : Resultat.MilleCinqCentsMetres;
    private resultatLancerDeDisque : Resultat.LancerDeDisque;
    private resultatLancerDeJavelot : Resultat.LancerDeJavelot;
    private resultatLancerDePoids : Resultat.LancerDePoids;
    private resultatSautEnLongueur : Resultat.SautEnLongueur;
    private resultatSautEnHauteur : Resultat.SautEnHauteur;
    private resultatSautALaPerche : Resultat.SautALaPerche;



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


    getResultatCentMetres(): Resultat.CentMetres { return this.resultatCentMetres; }
        setResultatCentMetres(perf: number) { this.resultatCentMetres = new Resultat.CentMetres(perf); }
    getResultatCentDixMetresHaies(): Resultat.CentDixMetresHaies { return this.resultatCentDixMetresHaies; }
        setResultatCentDixMetresHaies(perf: number) { this.resultatCentDixMetresHaies = new Resultat.CentDixMetresHaies(perf); }
    getResultatQuatreCentsMetres(): Resultat.QuatreCentsMetres { return this.resultatQuatreCentsMetres; }
        setResultatQuatreCentsMetres(perf: number) { this.resultatQuatreCentsMetres = new Resultat.QuatreCentsMetres(perf); }
    getResultatMilleCinqCentsMetres(): Resultat.MilleCinqCentsMetres { return this.resultatMilleCinqCentsMetres; }
        setResultatMilleCinqCentsMetres(perf: number) { this.resultatMilleCinqCentsMetres = new Resultat.MilleCinqCentsMetres(perf); }
    getResultatLancerDeDisque(): Resultat.LancerDeDisque { return this.resultatLancerDeDisque; }
        setResultatLancerDeDisque(perf: number) { this.resultatLancerDeDisque = new Resultat.LancerDeDisque(perf); }
    getResultatLancerDeJavelot(): Resultat.LancerDeJavelot { return this.resultatLancerDeJavelot; }
        setResultatLancerDeJavelot(perf: number) { this.resultatLancerDeJavelot = new Resultat.LancerDeJavelot(perf); }
    getResultatLancerDePoids(): Resultat.LancerDePoids { return this.resultatLancerDePoids; }
        setResultatLancerDePoids(perf: number) { this.resultatLancerDePoids = new Resultat.LancerDePoids(perf); }
    getResultatSautEnLongueur(): Resultat.SautEnLongueur { return this.resultatSautEnLongueur; }
        setResultatSautEnLongueur(perf: number) { this.resultatSautEnLongueur = new Resultat.SautEnLongueur(perf); }
    getResultatSautEnHauteur(): Resultat.SautEnHauteur { return this.resultatSautEnHauteur; }
        setResultatSautEnHauteur(perf: number) { this.resultatSautEnHauteur = new Resultat.SautEnHauteur(perf); }
    getResultatSautALaPerche(): Resultat.SautALaPerche { return this.resultatSautALaPerche; }
        setResultatSautALaPerche(perf: number) { this.resultatSautALaPerche = new Resultat.SautALaPerche(perf); }

    

    







    ajouterPoints(pts : number) : void {
        this.points += pts;
    }

}