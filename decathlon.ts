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
        let sautEnLongueur = new SautEnLongueur(this.dateDebut);
        this.epreuves.push(sautEnLongueur);
        let sautEnHauteur = new SautEnHauteur(this.dateDebut);
        this.epreuves.push(sautEnHauteur);
        let sautALaPerche = new SautALaPerche(this.dateFin);
        this.epreuves.push(sautALaPerche);
        let lancerDeDisque = new LancerDeDisque(this.dateFin);
        this.epreuves.push(lancerDeDisque);
        let lancerDeJavelot = new LancerDeJavelot(this.dateFin);
        this.epreuves.push(lancerDeJavelot);
        let lancerDePoids = new LancerDePoids(this.dateDebut);
        this.epreuves.push(lancerDePoids);
        let centMetres = new CentMetres(this.dateDebut);
        this.epreuves.push(centMetres);
        let centDixMetresHaies = new CentDixMetresHaies(this.dateFin);
        this.epreuves.push(centDixMetresHaies);
        let quatreCentsMetres = new QuatreCentsMetres(this.dateDebut);
        this.epreuves.push(quatreCentsMetres);
        let milleCinqCentsMetres = new MilleCinqCentsMetres(this.dateFin);
        this.epreuves.push(milleCinqCentsMetres);
    }


    afficher(): void {
        let formatDateDebut : string = this.dateDebut.getDate() + "/" + this.dateDebut.getMonth() + "/" + this.dateDebut.getFullYear();
        let formatDateFin : string = this.dateFin.getDate() + "/" + this.dateFin.getMonth() + "/" + this.dateFin.getFullYear();
        console.log("Décathlon " + this.nom + " " + this.lieu + ", du " + formatDateDebut + " au " + formatDateFin);
    }

    getParticipants(): Participant[] { return this.participants; }
    getEpreuves(): Epreuve[] { return this.epreuves; }


    getEpreuvesByDay(day: Date): Epreuve[] {
        let epreuves: Epreuve[] = [];
        for (let i = 0; i < this.epreuves.length; i++) {
            if (this.epreuves[i].getDate().getDate() == day.getDate()) {
                epreuves.push(this.epreuves[i]);
            }
        }
        return epreuves;
    }

    // afficherClassementGlobal(): void {}

    // afficherMeilleurAthletePays(): void {}

    ajouterParticipant(athlete : Participant): void {
        this.participants.push(athlete);
    }




}
