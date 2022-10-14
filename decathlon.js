"use strict";
exports.__esModule = true;
exports.Decathlon = void 0;
var Decathlon = /** @class */ (function () {
    function Decathlon(dateDebut, dateFin, nom, lieu) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.nom = nom;
    }
    Decathlon.prototype.afficher = function () {
        var formatDateDebut = this.dateDebut.getDate() + "/" + this.dateDebut.getMonth() + "/" + this.dateDebut.getFullYear();
        var formatDateFin = this.dateFin.getDate() + "/" + this.dateFin.getMonth() + "/" + this.dateFin.getFullYear();
        console.log("Décathlon " + this.nom + " " + this.lieu + " " + ", du " + formatDateDebut + " au " + formatDateFin);
    };
    return Decathlon;
}());
exports.Decathlon = Decathlon;
