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
    var find = false;
    if (choix != 0) {
        do {
            for (var i = 0; i < athletes.length; i++) {
                if (choix == i + 1) {
                    // DEBUG
                    console.log("#DEBUG# pts athlete :", athletes[i].getPoints());
                    return athletes[i];
                }
            }
            console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
            choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
        } while (find == false);
        {
        }
    }
    else {
        return undefined;
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
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatCentMetres().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres().getPoints());
    }
    else if (epreuve instanceof e.CentDixMetresHaies) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentDixMetresHaies(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatCentDixMetresHaies().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies().getPoints());
    }
    else if (epreuve instanceof e.QuatreCentsMetres) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatQuatreCentsMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatQuatreCentsMetres().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres().getPoints());
    }
    else if (epreuve instanceof e.MilleCinqCentsMetres) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatMilleCinqCentsMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatMilleCinqCentsMetres().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres().getPoints());
    }
    else if (epreuve instanceof e.LancerDeDisque) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeDisque(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDeDisque().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque().getPoints());
    }
    else if (epreuve instanceof e.LancerDeJavelot) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeJavelot(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDeJavelot().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot().getPoints());
    }
    else if (epreuve instanceof e.LancerDePoids) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDePoids(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDePoids().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids().getPoints());
    }
    else if (epreuve instanceof e.SautEnLongueur) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnLongueur(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautEnLongueur().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur().getPoints());
    }
    else if (epreuve instanceof e.SautEnHauteur) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnHauteur(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautEnHauteur().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur().getPoints());
    }
    else if (epreuve instanceof e.SautALaPerche) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautALaPerche(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautALaPerche().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete === null || athlete === void 0 ? void 0 : athlete.getNom(), "epreuve :", epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom(), "perf :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche().getPerformance(), "pts :", athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche().getPoints());
    }
    else {
        console.log("Erreur, épreuve inconnue");
    }
}
var jour;
var athlete;
var epreuve;
// Boucle principale
do {
    jour = choixJour();
    if (jour != 0) {
        var date = ((jour == 1) ? dateDebut : dateFin);
        epreuve = choixEpreuveByDay(date);
        do {
            athlete = choixAthlete();
            if (athlete != undefined) {
                saisieResultat(epreuve, athlete);
            }
        } while (athlete != undefined);
        console.log("\n--------------------");
        epreuve === null || epreuve === void 0 ? void 0 : epreuve.afficherClassement(decathlon.getParticipants());
        decathlon.afficherClassementGlobal();
        console.log("\nLes meilleurs sauteurs, lanceurs, coureurs :");
        decathlon.afficherMeilleurAthleteByCateg("saut");
        decathlon.afficherMeilleurAthleteByCateg("lancer");
        decathlon.afficherMeilleurAthleteByCateg("course");
        decathlon.afficherMeilleurAthletePays("FRA");
        console.log("\n======================================================================================\n");
    }
    else {
        console.log("Sauvegarde...");
    }
} while (jour != 0);
