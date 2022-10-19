import { Participant } from "./participant";

export abstract class Epreuve {
    protected nom : string;
    protected date : Date;
    protected recordMonde : number;
    protected mesure : string;

    

    constructor(date : Date){
        this.date = date;
    }


    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }

    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    abstract afficherClassement(athletes : Participant[]): void 
}



// EPREUVE DE COURSE

export abstract class Course extends Epreuve {
    constructor(date : Date) {
        super(date);
        this.mesure = "secondes";
    }
}

// ---------------------------------------------

export class CentMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "100 mètres";
        this.recordMonde = 10.12;
    }



    // REMPLACER LES AUTRES METHODES AFFICHERCLASSEMENT PAR CETTE VERSION :
    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatCentMetres().getPoints() - a.getResultatCentMetres().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}

export class CentDixMetresHaies extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "110 mètres haies";
        this.recordMonde = 13.44;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatCentDixMetresHaies().getPoints() - a.getResultatCentDixMetresHaies().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}


export class QuatreCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "400 mètres";
        this.recordMonde = 45;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatQuatreCentsMetres().getPoints() - a.getResultatQuatreCentsMetres().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}


export class MilleCinqCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "1500 mètres";
        this.recordMonde = 239.13;

    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatMilleCinqCentsMetres().getPoints() - a.getResultatMilleCinqCentsMetres().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}



// EPREUVES DE LANCER

export abstract class Lancer extends Epreuve {
    constructor(date : Date) {
        super(date);
        this.mesure = "metres";
    }
}

// ---------------------------------------------

export class LancerDeDisque extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de disque";
        this.recordMonde = 55.87;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDeDisque().getPoints() - a.getResultatLancerDeDisque().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}

export class LancerDeJavelot extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de javelot";
        this.recordMonde = 78.29;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDeJavelot().getPoints() - a.getResultatLancerDeJavelot().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}

export class LancerDePoids extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de poids";
        this.mesure = "metres";
        this.recordMonde = 18.03;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDePoids().getPoints() - a.getResultatLancerDePoids().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}




// EPREUVES DE SAUT

export abstract class Saut extends Epreuve {
    constructor(date : Date) {
        super(date);
        this.mesure = "centimetres";
    }
}

// ---------------------------------------------

export class SautEnLongueur extends Saut {
    
    constructor(date : Date){
        super(date);
        this.nom = "Saut en longueur";
        this.recordMonde = 8.24;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautEnLongueur().getPoints() - a.getResultatSautEnLongueur().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}


export class SautEnHauteur extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut en hauteur";
        this.recordMonde = 2.27;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautEnHauteur().getPoints() - a.getResultatSautEnHauteur().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}


export class SautALaPerche extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut à la perche";
        this.recordMonde = 55.7;
    }

    afficherClassement(athletes: Participant[]): void {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautALaPerche().getPoints() - a.getResultatSautALaPerche().getPoints());
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.")
        }

    }
}
