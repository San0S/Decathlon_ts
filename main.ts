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
    let find = false;
    if (choix != 0) {
        do {
            for (let i = 0; i < athletes.length; i++) {
                if (choix == i+1) {
                    // DEBUG
                    console.log("#DEBUG# pts athlete :", athletes[i].getPoints())
                    return athletes[i];
                }
            }
            console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
            choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
        } while (find == false) {
            
        }

    } else {
        return undefined;
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
        if (athlete?.getResultatCentMetres() == undefined) {
            athlete?.setResultatCentMetres(result);
            athlete?.ajouterPoints(athlete.getResultatCentMetres().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatCentMetres().getPerformance(), "pts :", athlete?.getResultatCentMetres().getPoints());


    } else if (epreuve instanceof e.CentDixMetresHaies) {
        if (athlete?.getResultatCentDixMetresHaies() == undefined) {
            athlete?.setResultatCentDixMetresHaies(result);
            athlete?.ajouterPoints(athlete.getResultatCentDixMetresHaies().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }
        
        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatCentDixMetresHaies().getPerformance(), "pts :", athlete?.getResultatCentDixMetresHaies().getPoints());


    } else if (epreuve instanceof e.QuatreCentsMetres) {
        if (athlete?.getResultatQuatreCentsMetres() == undefined) {
            athlete?.setResultatQuatreCentsMetres(result);
            athlete?.ajouterPoints(athlete.getResultatQuatreCentsMetres().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatQuatreCentsMetres().getPerformance(), "pts :", athlete?.getResultatQuatreCentsMetres().getPoints());


    } else if (epreuve instanceof e.MilleCinqCentsMetres) {
        if (athlete?.getResultatMilleCinqCentsMetres() == undefined) {
            athlete?.setResultatMilleCinqCentsMetres(result);
            athlete?.ajouterPoints(athlete.getResultatMilleCinqCentsMetres().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatMilleCinqCentsMetres().getPerformance(), "pts :", athlete?.getResultatMilleCinqCentsMetres().getPoints());


    } else if (epreuve instanceof e.LancerDeDisque) {
        if (athlete?.getResultatLancerDeDisque() == undefined) {
            athlete?.setResultatLancerDeDisque(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDeDisque().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatLancerDeDisque().getPerformance(), "pts :", athlete?.getResultatLancerDeDisque().getPoints());


    } else if (epreuve instanceof e.LancerDeJavelot) {
        if (athlete?.getResultatLancerDeJavelot() == undefined) {
            athlete?.setResultatLancerDeJavelot(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDeJavelot().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatLancerDeJavelot().getPerformance(), "pts :", athlete?.getResultatLancerDeJavelot().getPoints());


    } else if (epreuve instanceof e.LancerDePoids) {
        if (athlete?.getResultatLancerDePoids() == undefined) {
            athlete?.setResultatLancerDePoids(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDePoids().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatLancerDePoids().getPerformance(), "pts :", athlete?.getResultatLancerDePoids().getPoints());


    } else if (epreuve instanceof e.SautEnLongueur) {
        if (athlete?.getResultatSautEnLongueur() == undefined) {
            athlete?.setResultatSautEnLongueur(result);
            athlete?.ajouterPoints(athlete.getResultatSautEnLongueur().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatSautEnLongueur().getPerformance(), "pts :", athlete?.getResultatSautEnLongueur().getPoints());


    } else if (epreuve instanceof e.SautEnHauteur) {
        if (athlete?.getResultatSautEnHauteur() == undefined) {
            athlete?.setResultatSautEnHauteur(result);
            athlete?.ajouterPoints(athlete.getResultatSautEnHauteur().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

       // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatSautEnHauteur().getPerformance(), "pts :", athlete?.getResultatSautEnHauteur().getPoints());


    } else if (epreuve instanceof e.SautALaPerche) {
        if (athlete?.getResultatSautALaPerche() == undefined) {
            athlete?.setResultatSautALaPerche(result);
            athlete?.ajouterPoints(athlete.getResultatSautALaPerche().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

        // DEBUG
        console.log("#DEBUG# athlete: ", athlete?.getNom(), "epreuve :", epreuve?.getNom(),  "perf :",athlete?.getResultatSautALaPerche().getPerformance(), "pts :", athlete?.getResultatSautALaPerche().getPoints());


    } else {
        console.log("Erreur, épreuve inconnue")
    }
}

let jour: number;
let athlete: Participant | undefined;
let epreuve: e.Epreuve | undefined;

// Boucle principale
do {
    jour = choixJour()
    if (jour != 0) {
        let date = ((jour == 1) ? dateDebut : dateFin);
        epreuve = choixEpreuveByDay(date);
        do {
            athlete = choixAthlete();
            if (athlete != undefined) {
                saisieResultat(epreuve, athlete);
            }
        } while (athlete != undefined);
        console.log("\n--------------------");
        epreuve?.afficherClassement(decathlon.getParticipants());
        decathlon.afficherClassementGlobal();
        console.log("\nLes meilleurs sauteurs, lanceurs, coureurs :");
        decathlon.afficherMeilleurAthleteByCateg("saut");
        decathlon.afficherMeilleurAthleteByCateg("lancer");
        decathlon.afficherMeilleurAthleteByCateg("course");

        decathlon.afficherMeilleurAthletePays("FRA");
        console.log("\n======================================================================================\n")
    } else {
        console.log("Sauvegarde...");
    }

} while (jour != 0);

