"use strict";
exports.__esModule = true;
var decathlon_1 = require("./decathlon");
var participant_1 = require("./participant");
var readlineSync = require("readline-sync");
var e = require("./epreuves");
// Initialisation du décathlon
var dateDebut = new Date(2022, 9, 17);
var dateFin = new Date(2022, 9, 18);
var decathlon = new decathlon_1.Decathlon(dateDebut, dateFin, "Décastar", "Talence");
decathlon.afficher();
// Création des participants
var athlete1 = new participant_1.Participant("Mayer", "Kévin", "FRA", 23, 1);
var athlete2 = new participant_1.Participant("Frohlich", "Stefan", "GER", 32, 156);
var athlete3 = new participant_1.Participant("Roka", "Zsuzsanna", "HUN", 36, 24);
// Ajout des participants au décathlon
decathlon.ajouterParticipant(athlete1);
decathlon.ajouterParticipant(athlete2);
decathlon.ajouterParticipant(athlete3);
function choixEpreuveParJour(jour) {
    console.log("Voici les épreuves de ce jour :");
    var epreuves = decathlon.getEpreuvesByDay(jour);
    // Affichage des épreuves
    for (var i = 0; i < epreuves.length; i++) {
        console.log("\t" + (i + 1) + " : " + epreuves[i].getNom());
    }
    // Récupération et contrôle de l'entrée de l'utilisateur
    var choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    while (choix < 1 || choix > epreuves.length) {
        console.log("Erreur, vous avez saisi un numéro d'épreuve incorrect.");
        choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    }
    // Retourne l'épreuve correspondant au numéro saisi
    for (var i = 0; i < epreuves.length; i++) {
        if (choix == i + 1) {
            console.log("Gestion du", epreuves[i].getNom(), "(record du monde :", epreuves[i].getRecordMonde(), epreuves[i].getMesure(), ")");
            return epreuves[i];
        }
    }
    return undefined;
}
function choixAthlete() {
    var athletes = decathlon.getParticipants();
    // Affichage des athlètes
    console.log("Voici la liste des athlètes :");
    for (var i = 0; i < athletes.length; i++) {
        console.log("\t" + (i + 1) + " : " + athletes[i].formatAfficher());
    }
    // Récupération et contrôle de l'entrée de l'utilisateur
    var choix = Number(readlineSync.question("\nQuel athlete voulez-vous gerer (0 pour sortir) ? "));
    while (choix < 0 || choix > athletes.length) {
        console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
        choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
    }
    var find = false;
    if (choix != 0) {
        do {
            for (var i = 0; i < athletes.length; i++) {
                // Retourne l'athlète correspondant au numéro saisi
                if (choix == i + 1) {
                    return athletes[i];
                }
            }
            // Dans le cas où l'utilisateur saisi un numéro étant dans l'intervalle référençant les athlètes (0 à athletes.length)
            // mais qui ne correspond à aucun athlète (par exemple : 1.5), on lui demande de resaisir un numéro correct.
            console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
            choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
        } while (find == false);
        {
        }
        // Si l'utilisateur saisi "0" pour sortir, on retourne "undefined" pour signifier qu'aucun athlète n'a été choisi
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
    // On vérifie de quelle classe "epreuve" est l'instance pour saisir un résultat correspondant à la bonne épreuve
    if (epreuve instanceof e.CentMetres) {
        // Si aucun résultat n'a été saisi précédement concernant l'athlète, on enregistre sa performance et on lui ajoute les points correspondants
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatCentMetres().getPoints());
            // Sinon, on affiche un message d'avertissement et on ne tient pas compte du résultat saisi
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.CentDixMetresHaies) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatCentDixMetresHaies()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatCentDixMetresHaies(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatCentDixMetresHaies().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.QuatreCentsMetres) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatQuatreCentsMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatQuatreCentsMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatQuatreCentsMetres().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.MilleCinqCentsMetres) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatMilleCinqCentsMetres()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatMilleCinqCentsMetres(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatMilleCinqCentsMetres().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.LancerDeDisque) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeDisque()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeDisque(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDeDisque().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.LancerDeJavelot) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDeJavelot()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDeJavelot(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDeJavelot().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.LancerDePoids) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatLancerDePoids()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatLancerDePoids(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatLancerDePoids().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.SautEnLongueur) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnLongueur()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnLongueur(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautEnLongueur().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.SautEnHauteur) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautEnHauteur()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautEnHauteur(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautEnHauteur().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
    }
    else if (epreuve instanceof e.SautALaPerche) {
        if ((athlete === null || athlete === void 0 ? void 0 : athlete.getResultatSautALaPerche()) == undefined) {
            athlete === null || athlete === void 0 ? void 0 : athlete.setResultatSautALaPerche(result);
            athlete === null || athlete === void 0 ? void 0 : athlete.ajouterPoints(athlete.getResultatSautALaPerche().getPoints());
        }
        else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        // On affiche un message d'erreur si "epreuve" est l'instance d'une classe non attendue
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
        epreuve = choixEpreuveParJour(date);
        do {
            athlete = choixAthlete();
            if (athlete != undefined) {
                saisieResultat(epreuve, athlete);
            }
        } while (athlete != undefined);
        console.log("\n--------------------");
        epreuve === null || epreuve === void 0 ? void 0 : epreuve.afficherClassement(epreuve === null || epreuve === void 0 ? void 0 : epreuve.getClassement(decathlon.getParticipants()));
        decathlon.afficherClassementGlobal();
        console.log("\nLes meilleurs sauteurs, lanceurs, coureurs :");
        decathlon.afficherMeilleurAthleteParCateg("saut");
        decathlon.afficherMeilleurAthleteParCateg("lancer");
        decathlon.afficherMeilleurAthleteParCateg("course");
        decathlon.afficherMeilleurAthletePays("FRA");
        console.log("\n======================================================================================\n");
    }
    else {
        console.log("Fermeture...");
    }
} while (jour != 0);
