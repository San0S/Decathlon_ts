import { Participant } from "./participant";
import { CentDixMetresHaies, CentMetres, Epreuve, LancerDeDisque, LancerDeJavelot, LancerDePoids, MilleCinqCentsMetres, QuatreCentsMetres, SautALaPerche, SautEnHauteur, SautEnLongueur } from "./epreuves";

export class Decathlon {
    private dateDebut : Date;
    private dateFin : Date;
    private lieu : string;
    private nom : string;
    private participants : Participant[] = [];
    private epreuves : Epreuve[] = [];


    constructor (dateDebut : Date, dateFin : Date, nom : string, lieu : string) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.nom = nom;

        // Initialisation des épreuves
        // Jour 1
        let centMetres = new CentMetres(this.dateDebut);
        this.epreuves.push(centMetres);
        let sautEnLongueur = new SautEnLongueur(this.dateDebut);
        this.epreuves.push(sautEnLongueur);
        let lancerDePoids = new LancerDePoids(this.dateDebut);
        this.epreuves.push(lancerDePoids);
        let sautEnHauteur = new SautEnHauteur(this.dateDebut);
        this.epreuves.push(sautEnHauteur);
        let quatreCentsMetres = new QuatreCentsMetres(this.dateDebut);
        this.epreuves.push(quatreCentsMetres);
        // Jour2
        let centDixMetresHaies = new CentDixMetresHaies(this.dateFin);
        this.epreuves.push(centDixMetresHaies);
        let lancerDeDisque = new LancerDeDisque(this.dateFin);
        this.epreuves.push(lancerDeDisque);
        let sautALaPerche = new SautALaPerche(this.dateFin);
        this.epreuves.push(sautALaPerche);
        let lancerDeJavelot = new LancerDeJavelot(this.dateFin);
        this.epreuves.push(lancerDeJavelot);
        let milleCinqCentsMetres = new MilleCinqCentsMetres(this.dateFin);
        this.epreuves.push(milleCinqCentsMetres);
    }

    getEpreuves(): Epreuve[] { return this.epreuves; }
    
    getParticipants(): Participant[] { return this.participants; }

    ajouterParticipant(athlete : Participant): void {
        this.participants.push(athlete);
    }
    
    // Récupération des épreuves selon le jour où elle se déroule
    getEpreuvesByDay(day: Date): Epreuve[] {
        let epreuves: Epreuve[] = [];
        for (let i = 0; i < this.epreuves.length; i++) {
            if (this.epreuves[i].getDate().getDate() == day.getDate()) {
                epreuves.push(this.epreuves[i]);
            }
        }
        return epreuves;
    }
    
    // Affichage du décathlon (son nom, son lieu et ses dates)
    afficher(): void {
        let formatDateDebut : string = this.dateDebut.getDate() + "/" + this.dateDebut.getMonth() + "/" + this.dateDebut.getFullYear();
        let formatDateFin : string = this.dateFin.getDate() + "/" + this.dateFin.getMonth() + "/" + this.dateFin.getFullYear();
        console.log("Décathlon " + this.nom + " " + this.lieu + ", du " + formatDateDebut + " au " + formatDateFin);
    }


    // Affichage du classement général des athlètes selon leurs points
    afficherClassementGlobal(): void {
        let classement = this.participants.sort((a,b) => b.getPoints() - a.getPoints());
        console.log("\n Voici le classement général :")
        for (let i = 0; i < classement.length; i++) {
            console.log((i+1) + ") " + classement[i].formatAfficher() + " : " + classement[i].getPoints());
        }
    }


    // Affichage du meilleur athlète selon la catégorie (saut, lancer ou course) d'épreuve souhaitée
    afficherMeilleurAthleteParCateg(categ: string) {
        // Par défaut, on considère que le meilleur athlète est le premier dans la liste des participants
        let meilleur: Participant = this.participants[0];
        let meilleurPtsCateg: number = 0;
        let scoreCateg: number = 0;

        switch (categ) {
            case "saut":
                // Si l'utilisateur n'a aucun résultat enregistré pour une épreuve appartenant à la catégorie sélectionnée, on considère qu'il a un score de 0 points dans l'épreuve
                meilleurPtsCateg =  ((this.participants[0].getResultatSautEnLongueur() == undefined) ? 0 : this.participants[0].getResultatSautEnLongueur().getPoints()) + 
                                    ((this.participants[0].getResultatSautEnHauteur() == undefined) ? 0 : this.participants[0].getResultatSautEnHauteur().getPoints()) + 
                                    ((this.participants[0].getResultatSautALaPerche() == undefined) ? 0 : this.participants[0].getResultatSautALaPerche().getPoints());
                for (let i = 0; i < this.participants.length; i++) {
                    scoreCateg =    ((this.participants[i].getResultatSautEnLongueur() == undefined) ? 0 : this.participants[i].getResultatSautEnLongueur().getPoints()) + 
                                    ((this.participants[i].getResultatSautEnHauteur() == undefined) ? 0 : this.participants[i].getResultatSautEnHauteur().getPoints()) + 
                                    ((this.participants[i].getResultatSautALaPerche() == undefined) ? 0 : this.participants[i].getResultatSautALaPerche().getPoints());
                    if (meilleurPtsCateg < scoreCateg) {
                        meilleurPtsCateg = scoreCateg;
                        meilleur = this.participants[i];
                    }
                }
                break;

            case "lancer":
                meilleurPtsCateg =  ((this.participants[0].getResultatLancerDeDisque() == undefined) ? 0 : this.participants[0].getResultatLancerDeDisque().getPoints()) + 
                                    ((this.participants[0].getResultatLancerDeJavelot() == undefined) ? 0 : this.participants[0].getResultatLancerDeJavelot().getPoints()) + 
                                    ((this.participants[0].getResultatLancerDePoids() == undefined) ? 0 : this.participants[0].getResultatLancerDePoids().getPoints());
                for (let i = 0; i < this.participants.length; i++) {
                    scoreCateg =    ((this.participants[i].getResultatLancerDeDisque() == undefined) ? 0 : this.participants[i].getResultatLancerDeDisque().getPoints()) + 
                                    ((this.participants[i].getResultatLancerDeJavelot() == undefined) ? 0 : this.participants[i].getResultatLancerDeJavelot().getPoints()) + 
                                    ((this.participants[i].getResultatLancerDePoids() == undefined) ? 0 : this.participants[i].getResultatLancerDePoids().getPoints());
                    if (meilleurPtsCateg < scoreCateg) {
                        meilleurPtsCateg = scoreCateg;
                        meilleur = this.participants[i];
                    }
                }
                break;

            case "course":
                meilleurPtsCateg =  ((this.participants[0].getResultatCentMetres() == undefined) ? 0 : this.participants[0].getResultatCentMetres().getPoints()) + 
                                    ((this.participants[0].getResultatCentDixMetresHaies() == undefined) ? 0 : this.participants[0].getResultatCentDixMetresHaies().getPoints()) + 
                                    ((this.participants[0].getResultatQuatreCentsMetres() == undefined) ? 0 : this.participants[0].getResultatQuatreCentsMetres().getPoints()) + 
                                    ((this.participants[0].getResultatMilleCinqCentsMetres() == undefined) ? 0 : this.participants[0].getResultatMilleCinqCentsMetres().getPoints());
                for (let i = 0; i < this.participants.length; i++) {
                    scoreCateg =    ((this.participants[i].getResultatCentMetres() == undefined) ? 0 : this.participants[i].getResultatCentMetres().getPoints()) + 
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
    }

    // Affichage du meilleur athlète représentant le pays souhaité
    afficherMeilleurAthletePays(pays: string): void {
        let participantsByPays: Participant[] = [];

        // On récupère tous les athlètes représentant le pays sélectionné
        for (let i = 0; i < this.participants.length; i++) {
            if (this.participants[i].getNationnalite() == pays) {
                participantsByPays.push(this.participants[i]);
            }
        }

        // On trie les athlètes selon leur score dans l'ordre décroissant
        participantsByPays = participantsByPays.sort((a,b) => b.getPoints() - a.getPoints());
        console.log("Le meilleur", pays, ":");
        console.log(participantsByPays[0].formatAfficher() + " : " + participantsByPays[0].getPoints());
    }
}
