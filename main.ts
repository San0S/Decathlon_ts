import { Decathlon } from "./decathlon";
import { Participant } from "./participant";
import * as readlineSync from "readline-sync";
import * as e from "./epreuves";


// Initialisation du décathlon
let dateDebut = new Date(2022, 9, 17);
let dateFin = new Date(2022, 9, 18);
let decathlon = new Decathlon(dateDebut, dateFin, "Décastar", "Talence")
decathlon.afficher();

// Création des participants
let athlete1 = new Participant("Mayer", "Kévin", "FRA", 23, 1);
let athlete2 = new Participant("Frohlich" , "Stefan", "GER", 32, 156);
let athlete3 = new Participant("Roka", "Zsuzsanna", "HUN", 36, 24);


// Ajout des participants au décathlon
decathlon.ajouterParticipant(athlete1);
decathlon.ajouterParticipant(athlete2);
decathlon.ajouterParticipant(athlete3);


function choixEpreuveParJour(jour: Date): e.Epreuve | undefined {
    console.log("Voici les épreuves de ce jour :");
    let epreuves = decathlon.getEpreuvesByDay(jour);

    // Affichage des épreuves
    for (let i = 0; i < epreuves.length; i++) {
        console.log("\t" + (i+1) + " : " + epreuves[i].getNom());
    }

    // Récupération et contrôle de l'entrée de l'utilisateur
    let choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    while(choix < 1 || choix > epreuves.length) {
        console.log("Erreur, vous avez saisi un numéro d'épreuve incorrect.");
        choix = Number(readlineSync.question("Quel epreuve voulez-vous gerer ? "));
    }

    // Retourne l'épreuve correspondant au numéro saisi
    for (let i = 0; i < epreuves.length; i++) {
        if (choix == i+1) {
            console.log("Gestion du", epreuves[i].getNom(), "(record du monde :", epreuves[i].getRecordMonde(), epreuves[i].getMesure(),")" );
            return epreuves[i];
        }
    }
    return undefined;
}


function choixAthlete(): Participant | undefined {
    let athletes = decathlon.getParticipants();

    // Affichage des athlètes
    console.log("Voici la liste des athlètes :");
    for (let i = 0; i < athletes.length; i++) {
        console.log("\t" + (i+1) + " : " + athletes[i].formatAfficher());
    }

    // Récupération et contrôle de l'entrée de l'utilisateur
    let choix = Number(readlineSync.question("\nQuel athlete voulez-vous gerer (0 pour sortir) ? "));
    while (choix < 0 || choix > athletes.length) {
        console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
        choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
    }

    let find = false;
    if (choix != 0) {
        do {
            for (let i = 0; i < athletes.length; i++) {
                // Retourne l'athlète correspondant au numéro saisi
                if (choix == i+1) {
                    return athletes[i];
                }
            }

            // Dans le cas où l'utilisateur saisi un numéro étant dans l'intervalle référençant les athlètes (0 à athletes.length)
            // mais qui ne correspond à aucun athlète (par exemple : 1.5), on lui demande de resaisir un numéro correct.
            console.log("Erreur, vous avez saisi un numéro d'athlète incorrect.");
            choix = Number(readlineSync.question("Quel athlete voulez-vous gerer (0 pour sortir) ? "));
        } while (find == false) {
            
        }

    // Si l'utilisateur saisi "0" pour sortir, on retourne "undefined" pour signifier qu'aucun athlète n'a été choisi
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

    // On vérifie de quelle classe "epreuve" est l'instance pour saisir un résultat correspondant à la bonne épreuve
    if (epreuve instanceof e.CentMetres) {
        // Si aucun résultat n'a été saisi précédement concernant l'athlète, on enregistre sa performance et on lui ajoute les points correspondants
        if (athlete?.getResultatCentMetres() == undefined) {
            athlete?.setResultatCentMetres(result);
            athlete?.ajouterPoints(athlete.getResultatCentMetres().getPoints());
        // Sinon, on affiche un message d'avertissement et on ne tient pas compte du résultat saisi
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.CentDixMetresHaies) {
        if (athlete?.getResultatCentDixMetresHaies() == undefined) {
            athlete?.setResultatCentDixMetresHaies(result);
            athlete?.ajouterPoints(athlete.getResultatCentDixMetresHaies().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.QuatreCentsMetres) {
        if (athlete?.getResultatQuatreCentsMetres() == undefined) {
            athlete?.setResultatQuatreCentsMetres(result);
            athlete?.ajouterPoints(athlete.getResultatQuatreCentsMetres().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.MilleCinqCentsMetres) {
        if (athlete?.getResultatMilleCinqCentsMetres() == undefined) {
            athlete?.setResultatMilleCinqCentsMetres(result);
            athlete?.ajouterPoints(athlete.getResultatMilleCinqCentsMetres().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.LancerDeDisque) {
        if (athlete?.getResultatLancerDeDisque() == undefined) {
            athlete?.setResultatLancerDeDisque(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDeDisque().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.LancerDeJavelot) {
        if (athlete?.getResultatLancerDeJavelot() == undefined) {
            athlete?.setResultatLancerDeJavelot(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDeJavelot().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.LancerDePoids) {
        if (athlete?.getResultatLancerDePoids() == undefined) {
            athlete?.setResultatLancerDePoids(result);
            athlete?.ajouterPoints(athlete.getResultatLancerDePoids().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.SautEnLongueur) {
        if (athlete?.getResultatSautEnLongueur() == undefined) {
            athlete?.setResultatSautEnLongueur(result);
            athlete?.ajouterPoints(athlete.getResultatSautEnLongueur().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.SautEnHauteur) {
        if (athlete?.getResultatSautEnHauteur() == undefined) {
            athlete?.setResultatSautEnHauteur(result);
            athlete?.ajouterPoints(athlete.getResultatSautEnHauteur().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    } else if (epreuve instanceof e.SautALaPerche) {
        if (athlete?.getResultatSautALaPerche() == undefined) {
            athlete?.setResultatSautALaPerche(result);
            athlete?.ajouterPoints(athlete.getResultatSautALaPerche().getPoints());
        } else {
            console.log("Un résultat a déjà été saisi pour cet athlète dans cette épreuve !");
        }

    // On affiche un message d'erreur si "epreuve" est l'instance d'une classe non attendue
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
        epreuve = choixEpreuveParJour(date);
        do {
            athlete = choixAthlete();
            if (athlete != undefined) {
                saisieResultat(epreuve, athlete);
            }
        } while (athlete != undefined);
        console.log("\n--------------------");
        epreuve?.afficherClassement(epreuve?.getClassement(decathlon.getParticipants()));
        decathlon.afficherClassementGlobal();
        console.log("\nLes meilleurs sauteurs, lanceurs, coureurs :");
        decathlon.afficherMeilleurAthleteParCateg("saut");
        decathlon.afficherMeilleurAthleteParCateg("lancer");
        decathlon.afficherMeilleurAthleteParCateg("course");

        decathlon.afficherMeilleurAthletePays("FRA");
        console.log("\n======================================================================================\n")
    } else {
        console.log("Fermeture...");
    }
} while (jour != 0);

