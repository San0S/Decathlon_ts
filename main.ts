import { Decathlon } from "./decathlon";
import { Participant } from "./participant";
import * as readlineSync from "readline-sync";
import * as e from "./epreuves";

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





function choixEpreuveByDay(jour: Date): e.Epreuve | undefined {
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


function saisieResultat(epreuve: e.Epreuve | undefined, athlete: Participant | undefined) {
    
    let result = Number(readlineSync.question("Veuillez saisir le resultat en " + epreuve?.getMesure() + " : "));
    if (epreuve instanceof e.CentMetres) {
        athlete?.setResultatCentMetres(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatCentMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatCentMetres().getPoints(), "points");

    } else if (epreuve instanceof e.CentDixMetresHaies) {
        athlete?.setResultatCentDixMetresHaies(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatCentDixMetresHaies().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatCentDixMetresHaies().getPoints(), "points");

    } else if (epreuve instanceof e.QuatreCentsMetres) {
        athlete?.setResultatQuatreCentsMetres(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatQuatreCentsMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatQuatreCentsMetres().getPoints(), "points");

    } else if (epreuve instanceof e.MilleCinqCentsMetres) {
        athlete?.setResultatMilleCinqCentsMetres(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatMilleCinqCentsMetres().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatMilleCinqCentsMetres().getPoints(), "points");

    } else if (epreuve instanceof e.LancerDeDisque) {
        athlete?.setResultatLancerDeDisque(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatLancerDeDisque().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatLancerDeDisque().getPoints(), "points");

    } else if (epreuve instanceof e.LancerDeJavelot) {
        athlete?.setResultatLancerDeJavelot(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatLancerDeJavelot().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatLancerDeJavelot().getPoints(), "points");

    } else if (epreuve instanceof e.LancerDePoids) {
        athlete?.setResultatLancerDePoids(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatLancerDePoids().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatLancerDePoids().getPoints(), "points");

    } else if (epreuve instanceof e.SautEnLongueur) {
        athlete?.setResultatSautEnLongueur(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatSautEnLongueur().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatSautEnLongueur().getPoints(), "points");

    } else if (epreuve instanceof e.SautEnHauteur) {
        athlete?.setResultatSautEnHauteur(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatSautEnHauteur().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatSautEnHauteur().getPoints(), "points");

    } else if (epreuve instanceof e.SautALaPerche) {
        athlete?.setResultatSautALaPerche(result)
        // DEBUG
        console.log("l'athlète : ", athlete?.getNom(), athlete?.getPrenom(), ", a réalisé au", epreuve?.getNom(), "une performance de :", athlete?.getResultatSautALaPerche().getPerformance());
        console.log("Ce qui équivaut à :", athlete?.getResultatSautALaPerche().getPoints(), "points");

    } else {
        console.log("Erreur, épreuve inconnue")
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
        saisieResultat(epreuve, athlete);
    } else {
        console.log("Sauvegarde...");
    }

} while (jour != 0);

