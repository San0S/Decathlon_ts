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
        this.age = age;
        this.numero = numero;
    }
    Participant.prototype.formatAfficher = function () {
        return this.nom.toUpperCase() + " " + this.prenom + "(" + this.nationnalite + "), n°" + this.numero;
    };
    Participant.prototype.getPrenom = function () { return this.prenom; };
    Participant.prototype.setPrenom = function (prenom) { this.prenom = prenom; };
    Participant.prototype.getNom = function () { return this.nom; };
    Participant.prototype.setNom = function (nom) { this.nom = nom; };
    Participant.prototype.getNationnalite = function () { return this.nationnalite; };
    Participant.prototype.setNationnalite = function (nat) { this.nationnalite = nat; };
    Participant.prototype.getAge = function () { return this.age; };
    Participant.prototype.setAge = function (age) { this.age = age; };
    Participant.prototype.getNumero = function () { return this.numero; };
    Participant.prototype.setNumero = function (num) { this.numero = num; };
    Participant.prototype.getPoints = function () { return this.points; };
    Participant.prototype.setPoints = function (pts) { this.points = pts; };
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
    Participant.prototype.ajouterPoints = function (pts) {
        this.points += pts;
    };
    return Participant;
}());
exports.Participant = Participant;
