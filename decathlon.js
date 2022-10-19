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
        var centMetres = new epreuves_1.CentMetres(this.dateDebut);
        this.epreuves.push(centMetres);
        var sautEnLongueur = new epreuves_1.SautEnLongueur(this.dateDebut);
        this.epreuves.push(sautEnLongueur);
        var lancerDePoids = new epreuves_1.LancerDePoids(this.dateDebut);
        this.epreuves.push(lancerDePoids);
        var sautEnHauteur = new epreuves_1.SautEnHauteur(this.dateDebut);
        this.epreuves.push(sautEnHauteur);
        var quatreCentsMetres = new epreuves_1.QuatreCentsMetres(this.dateDebut);
        this.epreuves.push(quatreCentsMetres);
        var sautALaPerche = new epreuves_1.SautALaPerche(this.dateFin);
        this.epreuves.push(sautALaPerche);
        var lancerDeDisque = new epreuves_1.LancerDeDisque(this.dateFin);
        this.epreuves.push(lancerDeDisque);
        var lancerDeJavelot = new epreuves_1.LancerDeJavelot(this.dateFin);
        this.epreuves.push(lancerDeJavelot);
        var centDixMetresHaies = new epreuves_1.CentDixMetresHaies(this.dateFin);
        this.epreuves.push(centDixMetresHaies);
        var milleCinqCentsMetres = new epreuves_1.MilleCinqCentsMetres(this.dateFin);
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
    Decathlon.prototype.afficherClassementGlobal = function () {
        var classement = this.participants.sort(function (a, b) { return b.getPoints() - a.getPoints(); });
        console.log("\n Voici le classement général :");
        for (var i = 0; i < classement.length; i++) {
            console.log((i + 1) + ") " + classement[i].formatAfficher() + " : " + classement[i].getPoints());
        }
    };
    Decathlon.prototype.afficherMeilleurAthleteByCateg = function (categ) {
        // try {
        var meilleur = this.participants[0];
        var meilleurPtsCateg = 0;
        var scoreCateg = 0;
        switch (categ) {
            case "saut":
                meilleurPtsCateg = ((this.participants[0].getResultatSautEnLongueur() == undefined) ? 0 : this.participants[0].getResultatSautEnLongueur().getPoints()) +
                    ((this.participants[0].getResultatSautEnHauteur() == undefined) ? 0 : this.participants[0].getResultatSautEnHauteur().getPoints()) +
                    ((this.participants[0].getResultatSautALaPerche() == undefined) ? 0 : this.participants[0].getResultatSautALaPerche().getPoints());
                for (var i = 0; i < this.participants.length; i++) {
                    scoreCateg = ((this.participants[i].getResultatSautEnLongueur() == undefined) ? 0 : this.participants[i].getResultatSautEnLongueur().getPoints()) +
                        ((this.participants[i].getResultatSautEnHauteur() == undefined) ? 0 : this.participants[i].getResultatSautEnHauteur().getPoints()) +
                        ((this.participants[i].getResultatSautALaPerche() == undefined) ? 0 : this.participants[i].getResultatSautALaPerche().getPoints());
                    if (meilleurPtsCateg < scoreCateg) {
                        meilleurPtsCateg = scoreCateg;
                        meilleur = this.participants[i];
                    }
                }
                // meilleurPtsCateg = this.participants[0].getResultatSautEnLongueur().getPoints() + this.participants[0].getResultatSautEnHauteur().getPoints() + this.participants[0].getResultatSautALaPerche().getPoints();
                // for (let i = 0; i < this.participants.length; i++) {
                //     scoreCateg = this.participants[i].getResultatSautEnLongueur().getPoints() + this.participants[i].getResultatSautEnHauteur().getPoints() + this.participants[i].getResultatSautALaPerche().getPoints();
                //     if (meilleurPtsCateg < scoreCateg) {
                //         meilleurPtsCateg = scoreCateg;
                //         meilleur = this.participants[i];
                //     }
                // }
                break;
            case "lancer":
                meilleurPtsCateg = ((this.participants[0].getResultatLancerDeDisque() == undefined) ? 0 : this.participants[0].getResultatLancerDeDisque().getPoints()) +
                    ((this.participants[0].getResultatLancerDeJavelot() == undefined) ? 0 : this.participants[0].getResultatLancerDeJavelot().getPoints()) +
                    ((this.participants[0].getResultatLancerDePoids() == undefined) ? 0 : this.participants[0].getResultatLancerDePoids().getPoints());
                for (var i = 0; i < this.participants.length; i++) {
                    scoreCateg = ((this.participants[i].getResultatLancerDeDisque() == undefined) ? 0 : this.participants[i].getResultatLancerDeDisque().getPoints()) +
                        ((this.participants[i].getResultatLancerDeJavelot() == undefined) ? 0 : this.participants[i].getResultatLancerDeJavelot().getPoints()) +
                        ((this.participants[i].getResultatLancerDePoids() == undefined) ? 0 : this.participants[i].getResultatLancerDePoids().getPoints());
                    if (meilleurPtsCateg < scoreCateg) {
                        meilleurPtsCateg = scoreCateg;
                        meilleur = this.participants[i];
                    }
                }
                //BACK UP
                // meilleurPtsCateg = this.participants[0].getResultatLancerDeDisque().getPoints() + this.participants[0].getResultatLancerDeJavelot().getPoints() + this.participants[0].getResultatLancerDePoids().getPoints();
                // for (let i = 0; i < this.participants.length; i++) {
                //     scoreCateg = this.participants[i].getResultatLancerDeDisque().getPoints() + this.participants[i].getResultatLancerDeJavelot().getPoints() + this.participants[i].getResultatLancerDePoids().getPoints();
                //     if (meilleurPtsCateg < scoreCateg) {
                //         meilleurPtsCateg = scoreCateg;
                //         meilleur = this.participants[i];
                //     }
                // }
                break;
            case "course":
                meilleurPtsCateg = ((this.participants[0].getResultatCentMetres() == undefined) ? 0 : this.participants[0].getResultatCentMetres().getPoints()) +
                    ((this.participants[0].getResultatCentDixMetresHaies() == undefined) ? 0 : this.participants[0].getResultatCentDixMetresHaies().getPoints()) +
                    ((this.participants[0].getResultatQuatreCentsMetres() == undefined) ? 0 : this.participants[0].getResultatQuatreCentsMetres().getPoints()) +
                    ((this.participants[0].getResultatMilleCinqCentsMetres() == undefined) ? 0 : this.participants[0].getResultatMilleCinqCentsMetres().getPoints());
                for (var i = 0; i < this.participants.length; i++) {
                    scoreCateg = ((this.participants[i].getResultatCentMetres() == undefined) ? 0 : this.participants[i].getResultatCentMetres().getPoints()) +
                        ((this.participants[i].getResultatCentDixMetresHaies() == undefined) ? 0 : this.participants[i].getResultatCentDixMetresHaies().getPoints()) +
                        ((this.participants[i].getResultatQuatreCentsMetres() == undefined) ? 0 : this.participants[i].getResultatQuatreCentsMetres().getPoints()) +
                        ((this.participants[i].getResultatMilleCinqCentsMetres() == undefined) ? 0 : this.participants[i].getResultatMilleCinqCentsMetres().getPoints());
                    if (meilleurPtsCateg < scoreCateg) {
                        meilleurPtsCateg = scoreCateg;
                        meilleur = this.participants[i];
                    }
                }
                break;
            default:
                console.log("Erreur, catégorie inconnue");
                break;
        }
        console.log(meilleur.formatAfficher() + " : " + meilleurPtsCateg);
        // } catch (TypeError) {
        //     console.log(this.participants[0].formatAfficher() + " : 0");
        // }
    };
    Decathlon.prototype.afficherMeilleurAthletePays = function (pays) {
        var participantsByPays = [];
        for (var i = 0; i < this.participants.length; i++) {
            if (this.participants[i].getNationnalite() == pays) {
                participantsByPays.push(this.participants[i]);
            }
        }
        participantsByPays = participantsByPays.sort(function (a, b) { return b.getPoints() - a.getPoints(); });
        console.log("Le meilleur", pays, ":");
        console.log(participantsByPays[0].formatAfficher() + " : " + participantsByPays[0].getPoints());
    };
    Decathlon.prototype.ajouterParticipant = function (athlete) {
        this.participants.push(athlete);
    };
    return Decathlon;
}());
exports.Decathlon = Decathlon;
