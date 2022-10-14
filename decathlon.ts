export class Decathlon {

    private dateDebut : Date;
    private dateFin : Date;
    private lieu : string;
    private nom : string;


    constructor (dateDebut : Date, dateFin : Date, nom : string, lieu : string) {
        this.dateDebut = dateDebut;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.nom = nom;
    }


    afficher(): void {
        let formatDateDebut : string = this.dateDebut.getDate() + "/" + this.dateDebut.getMonth() + "/" + this.dateDebut.getFullYear();
        let formatDateFin : string = this.dateFin.getDate() + "/" + this.dateFin.getMonth() + "/" + this.dateFin.getFullYear();
        console.log("Décathlon " + this.nom + " " + this.lieu + ", du " + formatDateDebut + " au " + formatDateFin);
    }


    // afficherClassementGlobal(): void {}

    // afficherMeilleurAthletePays(): void {}




}
