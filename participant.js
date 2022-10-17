"use strict";
exports.__esModule = true;
exports.Participant = void 0;
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
    Participant.prototype.ajouterPoints = function (pts) {
        this.points += pts;
    };
    return Participant;
}());
exports.Participant = Participant;
