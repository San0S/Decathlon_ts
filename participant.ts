import * as Resultat from "./resultat";

export class Participant {
    private nom : string;
    private prenom : string;
    private nationnalite : string;
    private numero : number;
    private points : number = 0;

    // Résultats de l'athlète aux différentes épreuves
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
        this.numero = numero;
    }

    getNationnalite(): string { return this.nationnalite; }
    getPoints(): number     { return this.points; }
    ajouterPoints(pts : number) : void { this.points += pts; }

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

        
    // Affichage de l'athlète
    formatAfficher(): string {
        return this.nom.toUpperCase() + " " + this.prenom + " (" + this.nationnalite + "), n°" + this.numero;
    }

    // Affichage de l'athlète et de sa performance et score à l'épreuve renseignée
    formatAfficherResultat(epreuve : string): string {
        switch (epreuve) {
            case "100 mètres":
                return this.formatAfficher() + " " + this.getResultatCentMetres().getPerformance() + " : " + this.getResultatCentMetres().getPoints();
        
            case "110 mètres haies":
                return this.formatAfficher() + " " + this.getResultatCentDixMetresHaies().getPerformance() + " : " + this.getResultatCentDixMetresHaies().getPoints();

            case "400 mètres":
                return this.formatAfficher() + " " + this.getResultatQuatreCentsMetres().getPerformance() + " : " + this.getResultatQuatreCentsMetres().getPoints();

            case "1500 mètres":
                return this.formatAfficher() + " " + this.getResultatMilleCinqCentsMetres().getPerformance() + " : " + this.getResultatMilleCinqCentsMetres().getPoints();

            case "Lancer de disque":
                return this.formatAfficher() + " " + this.getResultatLancerDeDisque().getPerformance() + " : " + this.getResultatLancerDeDisque().getPoints();

            case "Lancer de javelot":
                return this.formatAfficher() + " " + this.getResultatLancerDeJavelot().getPerformance() + " : " + this.getResultatLancerDeJavelot().getPoints();

            case "Lancer de poids":
                return this.formatAfficher() + " " + this.getResultatLancerDePoids().getPerformance() + " : " + this.getResultatLancerDePoids().getPoints();

            case "Saut en longueur":
                return this.formatAfficher() + " " + this.getResultatSautEnLongueur().getPerformance() + " : " + this.getResultatSautEnLongueur().getPoints();

            case "Saut en hauteur":
                return this.formatAfficher() + " " + this.getResultatSautEnHauteur().getPerformance() + " : " + this.getResultatSautEnHauteur().getPoints();

            case "Saut à la perche":
                return this.formatAfficher() + " " + this.getResultatSautALaPerche().getPerformance() + " : " + this.getResultatSautALaPerche().getPoints();

            default:
                return "erreur format de resultat inconnu";
        }
    }
}