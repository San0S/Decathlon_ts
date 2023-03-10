"use strict";
exports.__esModule = true;
exports.Participant = void 0;
var Resultat = require("./resultat");
var Participant = /** @class */ (function () {
    function Participant(nom, prenom, nationnalite, age, numero) {
        this.points = 0;
        this.nom = nom;
        this.prenom = prenom;
        this.nationnalite = nationnalite;
        this.numero = numero;
    }
    Participant.prototype.getNationnalite = function () { return this.nationnalite; };
    Participant.prototype.getPoints = function () { return this.points; };
    Participant.prototype.ajouterPoints = function (pts) { this.points += pts; };
    Participant.prototype.getResultatCentMetres = function () { return this.resultatCentMetres; };
    Participant.prototype.setResultatCentMetres = function (perf) { this.resultatCentMetres = new Resultat.CentMetres(perf); };
    Participant.prototype.getResultatCentDixMetresHaies = function () { return this.resultatCentDixMetresHaies; };
    Participant.prototype.setResultatCentDixMetresHaies = function (perf) { this.resultatCentDixMetresHaies = new Resultat.CentDixMetresHaies(perf); };
    Participant.prototype.getResultatQuatreCentsMetres = function () { return this.resultatQuatreCentsMetres; };
    Participant.prototype.setResultatQuatreCentsMetres = function (perf) { this.resultatQuatreCentsMetres = new Resultat.QuatreCentsMetres(perf); };
    Participant.prototype.getResultatMilleCinqCentsMetres = function () { return this.resultatMilleCinqCentsMetres; };
    Participant.prototype.setResultatMilleCinqCentsMetres = function (perf) { this.resultatMilleCinqCentsMetres = new Resultat.MilleCinqCentsMetres(perf); };
    Participant.prototype.getResultatLancerDeDisque = function () { return this.resultatLancerDeDisque; };
    Participant.prototype.setResultatLancerDeDisque = function (perf) { this.resultatLancerDeDisque = new Resultat.LancerDeDisque(perf); };
    Participant.prototype.getResultatLancerDeJavelot = function () { return this.resultatLancerDeJavelot; };
    Participant.prototype.setResultatLancerDeJavelot = function (perf) { this.resultatLancerDeJavelot = new Resultat.LancerDeJavelot(perf); };
    Participant.prototype.getResultatLancerDePoids = function () { return this.resultatLancerDePoids; };
    Participant.prototype.setResultatLancerDePoids = function (perf) { this.resultatLancerDePoids = new Resultat.LancerDePoids(perf); };
    Participant.prototype.getResultatSautEnLongueur = function () { return this.resultatSautEnLongueur; };
    Participant.prototype.setResultatSautEnLongueur = function (perf) { this.resultatSautEnLongueur = new Resultat.SautEnLongueur(perf); };
    Participant.prototype.getResultatSautEnHauteur = function () { return this.resultatSautEnHauteur; };
    Participant.prototype.setResultatSautEnHauteur = function (perf) { this.resultatSautEnHauteur = new Resultat.SautEnHauteur(perf); };
    Participant.prototype.getResultatSautALaPerche = function () { return this.resultatSautALaPerche; };
    Participant.prototype.setResultatSautALaPerche = function (perf) { this.resultatSautALaPerche = new Resultat.SautALaPerche(perf); };
    // Affichage de l'athl??te
    Participant.prototype.formatAfficher = function () {
        return this.nom.toUpperCase() + " " + this.prenom + " (" + this.nationnalite + "), n??" + this.numero;
    };
    // Affichage de l'athl??te et de sa performance et score ?? l'??preuve renseign??e
    Participant.prototype.formatAfficherResultat = function (epreuve) {
        switch (epreuve) {
            case "100 m??tres":
                return this.formatAfficher() + " " + this.getResultatCentMetres().getPerformance() + " : " + this.getResultatCentMetres().getPoints();
            case "110 m??tres haies":
                return this.formatAfficher() + " " + this.getResultatCentDixMetresHaies().getPerformance() + " : " + this.getResultatCentDixMetresHaies().getPoints();
            case "400 m??tres":
                return this.formatAfficher() + " " + this.getResultatQuatreCentsMetres().getPerformance() + " : " + this.getResultatQuatreCentsMetres().getPoints();
            case "1500 m??tres":
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
            case "Saut ?? la perche":
                return this.formatAfficher() + " " + this.getResultatSautALaPerche().getPerformance() + " : " + this.getResultatSautALaPerche().getPoints();
            default:
                return "erreur format de resultat inconnu";
        }
    };
    return Participant;
}());
exports.Participant = Participant;
