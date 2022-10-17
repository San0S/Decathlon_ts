import { Decathlon } from "./decathlon";
import { Participant } from "./participant";
import * as readlineSync from "readline-sync";
import { Epreuve } from "./epreuves";

let dateDebut = new Date(2022, 9, 17);
let dateFin = new Date(2022, 9, 18);

let decathlon = new Decathlon(dateDebut, dateFin, "Décastar", "Talence")
decathlon.afficher();

let athlete1 = new Participant("Mayer", "Kévin", "FRA", 23, 1);
let athlete2 = new Participant("Frohlich" , "Stefan", "GER", 32, 156);
let athlete3 = new Participant("Roka", "Zsuzsanna", "HUN", 36, 24);

decathlon.ajouterParticipant(athlete1);
decathlon.ajouterParticipant(athlete2);
decathlon.ajouterParticipant(athlete3);





function choixEpreuveByDay(jour: Date): Epreuve | undefined {
    console.log("Voici les épreuves de ce jour :");
    let epreuves = decathlon.getEpreuvesByDay(jour);
    for (let i = 0; i < epreuves.length; i++) {
        
        console.log("\t" + (i+1) + " : " + epreuves[i].getNom());
    }
    let choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    while(choix < 1 || choix > epreuves.length) {
        console.log("Erreur, vous avez saisi un numéro d'épreuve incorrect.");
        choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    }
    for (let i = 0; i < epreuves.length; i++) {
        if (choix == i+1) {
            console.log("Gestion du " + epreuves[i].getNom());
            return epreuves[i];
        }
    }
    return undefined;
}


function choixAthlete(): Participant | undefined {
    let athletes = decathlon.getParticipants();
    console.log("Voici la liste des athlètes :");
    for (let i = 0; i < athletes.length; i++) {
        console.log("\t" + (i+1) + " : " + athletes[i].formatAfficher());
    }
    let choix = Number(readlineSync.question("\nQuel athlete voulez-vous gerer (0 pour sortir) ? "));
    while (choix < 0 || choix > athletes.length) {
        console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
        choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
    }
    if (choix == 0) {
        return undefined;
    } else {
        for (let i = 0; i < athletes.length; i++) {
            if (choix == i+1) {
                console.log("Gestion de l'althèle : " + athletes[i].getNom() + " " + athletes[i].getPrenom());
                return athletes[i];
            }
            
        }
    }
}


function choixJour(): number {
    console.log("Le décathlon se déroule du " + dateDebut.getDate() + "/" + dateDebut.getMonth() + " (1) au " + dateFin.getDate() + "/" + dateFin.getMonth() + " (2)");
    let choix = Number(readlineSync.question("\nQuel jour voulez-vous gerer (1 ou 2 ; 0 pour quitter) ? "));
    while (choix < 0 || choix > 2) {
        console.log("Erreur, vous avez saisi un numéro de jour incorrect.");
        choix = Number(readlineSync.question("\nQuel jour voulez-vous gerer (1 ou 2 ; 0 pour quitter) ? "));
    }
    return choix;
    
}


function saisieResultat(epreuve: Epreuve | undefined, athlete: Participant | undefined) {
    let resultat: number = 0;
    if (epreuve?.getMesure() == "metres") {
        resultat = readlineSync.question("Veuillez saisir le resultat en metres : ");
    } else if (epreuve?.getMesure() == "secondes") {
        resultat = readlineSync.question("Veuillez saisir le resultat en secondes : ");
    } else {
        resultat = readlineSync.question("Veuillez saisir le resultat : ");
    }
}

let jour: number;

// Boucle principale
do {
    jour = choixJour()
    if (jour != 0) {
        let date = ((jour == 1) ? dateDebut : dateFin);
        let epreuve = choixEpreuveByDay(date);
        let athlete = choixAthlete();
    } else {
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

