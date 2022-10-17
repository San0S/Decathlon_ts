"use strict";
exports.__esModule = true;
var decathlon_1 = require("./decathlon");
var participant_1 = require("./participant");
var readlineSync = require("readline-sync");
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
var jour;
// Boucle principale
do {
    jour = choixJour();
    if (jour != 0) {
        var date = ((jour == 1) ? dateDebut : dateFin);
        var epreuve = choixEpreuveByDay(date);
        console.log("Gestion du " + (epreuve === null || epreuve === void 0 ? void 0 : epreuve.getNom()));
        var athlete = choixAthlete();
        console.log("Gestion de l'althèle : " + (athlete === null || athlete === void 0 ? void 0 : athlete.getNom()) + " " + (athlete === null || athlete === void 0 ? void 0 : athlete.getPrenom()));
    }
    else {
        console.log("Sauvegarde...");
    }
    // answer = Number(readlineSync.question("Quel jour voulez-vous gerer (1 ou 2 ; 0 pour quitter) ? "));
    // if (answer != 0) {
    //     console.log("Voici les épreuves de ce jour");
    //     switch (answer) {
    //         case 1:
    //             let epreuvesJ1 = decathlon.getEpreuvesByDay(dateDebut);
    //             let epreuveJ1 = choixEpreuve(epreuvesJ1);
    //             console.log("Gestion du " + epreuveJ1?.getNom())
    //             let athlete = choixAthlete();
    //             if (athlete == undefined) {
    //                 break;
    //             } else {
    //                 console.log("Vous avez choisi de gérer : " + athlete.getNom().toUpperCase() + " " + athlete.getPrenom());
    //             }
    //             break;
    //         case 2:
    //             let epreuvesJ2 = decathlon.getEpreuvesByDay(dateFin);
    //             let epreuveJ2 = choixEpreuve(epreuvesJ2);
    //             console.log("Gestion du " + epreuveJ2?.getNom())
    //             break;
    //     }
    // } else {
    //     console.log("Sauvegarde...");
    // }
} while (jour != 0);
