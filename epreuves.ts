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
    getRecordMonde(): number { return this.recordMonde; }
    setRecordMonde(record : number ): void { this.recordMonde = record; }

    afficher(): void { console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde); }


    // affichage du classement des athlètes au sein de l'épreuve
    afficherClassement(classement: Participant[] | undefined): void {
        if (classement != undefined) {
            console.log("\nVoici le classement de cette épreuve :")
            for (let i = 0; i < classement.length; i++) {
                console.log((i+1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        } else {
            // Si tous les athlètes n'ont pas un résultat enregistré dans l'épreuve, on affiche le suivant
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    }

    // On trie les athlètes selon les points qu'ils ont marqués à l'épreuve dans l'ordre décroissant
    // Si tous les athlètes ne possèdent un résultat enregistré dans l'épreuve, on retourne "undefined"
    abstract getClassement(athletes : Participant[]): Participant[] | undefined;
}




// =============================================
//             EPREUVE DE COURSE
// =============================================

abstract class Course extends Epreuve {
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

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatCentMetres().getPoints() - a.getResultatCentMetres().getPoints());
            return classement;
        } catch (TypeError) {
            return undefined;
        }
    }
}

export class CentDixMetresHaies extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "110 mètres haies";
        this.recordMonde = 13.44;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatCentDixMetresHaies().getPoints() - a.getResultatCentDixMetresHaies().getPoints());
            return classement;
        } catch (TypeError) {
            return undefined;
        }
    }
}

export class QuatreCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "400 mètres";
        this.recordMonde = 45;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatQuatreCentsMetres().getPoints() - a.getResultatQuatreCentsMetres().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}

export class MilleCinqCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "1500 mètres";
        this.recordMonde = 239.13;

    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatMilleCinqCentsMetres().getPoints() - a.getResultatMilleCinqCentsMetres().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}




// =============================================
//             EPREUVES DE LANCER
// =============================================

abstract class Lancer extends Epreuve {
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

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDeDisque().getPoints() - a.getResultatLancerDeDisque().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}

export class LancerDeJavelot extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de javelot";
        this.recordMonde = 78.29;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDeJavelot().getPoints() - a.getResultatLancerDeJavelot().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
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

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatLancerDePoids().getPoints() - a.getResultatLancerDePoids().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}




// =============================================
//             EPREUVES DE SAUT
// =============================================

abstract class Saut extends Epreuve {
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
        this.recordMonde = 824;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautEnLongueur().getPoints() - a.getResultatSautEnLongueur().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}

export class SautEnHauteur extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut en hauteur";
        this.recordMonde = 227;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautEnHauteur().getPoints() - a.getResultatSautEnHauteur().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}


export class SautALaPerche extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut à la perche";
        this.recordMonde = 570;
    }

    getClassement(athletes: Participant[]): Participant[] | undefined {
        try {
            let classement = athletes.sort((a,b) => b.getResultatSautALaPerche().getPoints() - a.getResultatSautALaPerche().getPoints());
            return classement
        } catch (TypeError) {
            return undefined;
        }
    }
}
