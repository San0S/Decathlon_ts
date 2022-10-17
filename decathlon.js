"use strict";
exports.__esModule = true;
exports.Decathlon = void 0;
var epreuves_1 = require("./epreuves");
var Decathlon = /** @class */ (function () {
    function Decathlon(dateDebut, dateFin, nom, lieu) {
        this.participants = [];
        this.epreuves = [];
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.nom = nom;
        // Initialisation des épreuves
        var sautEnLongueur = new epreuves_1.SautEnLongueur(this.dateDebut, 8.24);
        this.epreuves.push(sautEnLongueur);
        var sautEnHauteur = new epreuves_1.SautEnHauteur(this.dateDebut, 2.27);
        this.epreuves.push(sautEnHauteur);
        var sautALaPerche = new epreuves_1.SautALaPerche(this.dateFin, 5.7);
        this.epreuves.push(sautALaPerche);
        var lancerDeDisque = new epreuves_1.LancerDeDisque(this.dateFin, 55.87);
        this.epreuves.push(lancerDeDisque);
        var lancerDeJavelot = new epreuves_1.LancerDeJavelot(this.dateFin, 78.29);
        this.epreuves.push(lancerDeJavelot);
        var lancerDePoids = new epreuves_1.LancerDePoids(this.dateDebut, 18.03);
        this.epreuves.push(lancerDePoids);
        var centMetres = new epreuves_1.CentMetres(this.dateDebut, 10.12);
        this.epreuves.push(centMetres);
        var centDixMetresHaies = new epreuves_1.CentDixMetresHaies(this.dateFin, 13.44);
        this.epreuves.push(centDixMetresHaies);
        var quatreCentsMetres = new epreuves_1.QuatreCentsMetres(this.dateDebut, 45);
        this.epreuves.push(quatreCentsMetres);
        var milleCinqCentsMetres = new epreuves_1.MilleCinqCentsMetres(this.dateFin, 3.59);
        this.epreuves.push(milleCinqCentsMetres);
    }
    Decathlon.prototype.afficher = function () {
        var formatDateDebut = this.dateDebut.getDate() + "/" + this.dateDebut.getMonth() + "/" + this.dateDebut.getFullYear();
        var formatDateFin = this.dateFin.getDate() + "/" + this.dateFin.getMonth() + "/" + this.dateFin.getFullYear();
        console.log("Décathlon " + this.nom + " " + this.lieu + ", du " + formatDateDebut + " au " + formatDateFin);
    };
    Decathlon.prototype.getParticipants = function () { return this.participants; };
    Decathlon.prototype.getEpreuves = function () { return this.epreuves; };
    Decathlon.prototype.getEpreuvesByDay = function (day) {
        var epreuves = [];
        for (var i = 0; i < this.epreuves.length; i++) {
            if (this.epreuves[i].getDate().getDate() == day.getDate()) {
                epreuves.push(this.epreuves[i]);
            }
        }
        return epreuves;
    };
    // afficherClassementGlobal(): void {}
    // afficherMeilleurAthletePays(): void {}
    Decathlon.prototype.ajouterParticipant = function (athlete) {
        this.participants.push(athlete);
    };
    return Decathlon;
}());
exports.Decathlon = Decathlon;
