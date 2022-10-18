"use strict";
exports.__esModule = true;
var decathlon_1 = require("./decathlon");
var participant_1 = require("./participant");
var readlineSync = require("readline-sync");
var e = require("./epreuves");
var dateDebut = new Date(2022, 9, 17);
var dateFin = new Date(2022, 9, 18);
var decathlon = new decathlon_1.Decathlon(dateDebut, dateFin, "Décastar", "Talence");
decathlon.afficher();
var athlete1 = new participant_1.Participant("Mayer", "Kévin", "FRA", 23, 1);
var athlete2 = new participant_1.Participant("Frohlich", "Stefan", "GER", 32, 156);
var athlete3 = new participant_1.Participant("Roka", "Zsuzsanna", "HUN", 36, 24);
decathlon.ajouterParticipant(athlete1);
decathlon.ajouterParticipant(athlete2);
decathlon.ajouterParticipant(athlete3);
function choixEpreuveByDay(jour) {
    console.log("Voici les épreuves de ce jour :");
    var epreuves = decathlon.getEpreuvesByDay(jour);
    for (var i = 0; i < epreuves.length; i++) {
        console.log("\t" + (i + 1) + " : " + epreuves[i].getNom());
    }
    var choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    while (choix < 1 || choix > epreuves.length) {
        console.log("Erreur, vous avez saisi un numéro d'épreuve incorrect.");
        choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    }
    for (var i = 0; i < epreuves.length; i++) {
        if (choix == i + 1) {
            console.log("Gestion du " + epreuves[i].getNom());
            return epreuves[i];
        }
    }
    return undefined;
}
function choixAthlete() {
    var athletes = decathlon.getParticipants();
    console.log("Voici la liste des athlètes :");
    for (var i = 0; i < athletes.length; i++) {
        console.log("\t" + (i + 1) + " : " + athletes[i].formatAfficher());
    }
    var choix = Number(readlineSync.question("\nQuel athlete voulez-vous gerer (0 pour sortir) ? "));
    while (choix < 0 || choix > athletes.length) {
        console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
        choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
    }
    if (choix == 0) {
        return undefined;
    }
    else {
        for (var i = 0; i < athletes.length; i++) {
            if (choix == i + 1) {
                console.log("Gestion de l'althèle : " + athletes[i].getNom() + " " + athletes[i].getPrenom());
                return athletes[i];
            }
        }
    }
}
function choixJour() {
    console.log("Le décathlon se déroule du " + dateDebut.getDate() + "/" + dateDebut.getMonth() + " (1) au " + dateFin.getDate() + "/" + dateFin.getMonth() + " (2)");
    var choix = Number(readlineSync.question("\nQuel jour voulez-vous gerer (1 ou 2 ; 0 pour quitter) ? "));
    while (choix < 0 || choix > 2) {
        console.log("Erreur, vous avez saisi un numéro de jour incorrect.");
        choix = Number(readlineSync.question("\nQuel jour voulez-vous gerer (1 ou 2 ; 0 pour quitter) ? "));
    }
    return choix;
}
function saisieResultat(epreuve, athlete) {
    var result = Number(readlineSync.question("Veuillez saisir le resultat en " + (epreuve === null || epreuve === void 0 ? void 0 : epreuve.getMesure()) + " : "));
    if (epreuve instanceof e.CentMetres) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentMetres(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres().getPoints(), "points");
    }
    else if (epreuve instanceof e.CentDixMetresHaies) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentDixMetresHaies(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies().getPoints(), "points");
    }
    else if (epreuve instanceof e.QuatreCentsMetres) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatQuatreCentsMetres(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres().getPoints(), "points");
    }
    else if (epreuve instanceof e.MilleCinqCentsMetres) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatMilleCinqCentsMetres(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres().getPoints(), "points");
    }
    else if (epreuve instanceof e.LancerDeDisque) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeDisque(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque().getPoints(), "points");
    }
    else if (epreuve instanceof e.LancerDeJavelot) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeJavelot(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot().getPoints(), "points");
    }
    else if (epreuve instanceof e.LancerDePoids) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDePoids(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids().getPoints(), "points");
    }
    else if (epreuve instanceof e.SautEnLongueur) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnLongueur(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur().getPoints(), "points");
    }
    else if (epreuve instanceof e.SautEnHauteur) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnHauteur(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur().getPoints(), "points");
    }
    else if (epreuve instanceof e.SautALaPerche) {
        athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautALaPerche(result);
        // DEBUG
        console.log("l'athlète : ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom(), ", a réalisé au", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "une performance de :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche().getPerformance());
        console.log("Ce qui équivaut à :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche().getPoints(), "points");
    }
    else {
        console.log("Erreur, épreuve inconnue");
    }
}
var jour;
// Boucle principale
do {
    jour = choixJour();
    if (jour != 0) {
        var date = ((jour == 1) ? dateDebut : dateFin);
        var epreuve = choixEpreuveByDay(date);
        var athlete = choixAthlete();
        saisieResultat(epreuve, athlete);
    }
    else {
        console.log("Sauvegarde...");
    }
} while (jour != 0);
