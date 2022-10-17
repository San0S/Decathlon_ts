export abstract class Epreuve {
    protected nom : string;
    protected date : Date;
    protected recordMonde : number;
    protected mesure : string;

    constructor(date : Date){
        this.date = date;
    }

    abstract getNom(): string;
    abstract getDate(): Date;
    abstract getMesure(): string;

    //debug
    abstract afficher(): void;


    abstract afficherClassement() : void;

}

// EPREUVES DE SAUT

export class SautEnLongueur extends Epreuve {
    
    constructor(date : Date){
        super(date);
        this.nom = "Saut en longueur";
        this.mesure = "metres";
        this.recordMonde = 8.24;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }

    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }

}


export class SautEnHauteur extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "Saut en hauteur";
        this.mesure = "metres";
        this.recordMonde = 2.27;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}


export class SautALaPerche extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "Saut à la perche";
        this.mesure = "metres";
        this.recordMonde = 55.7;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}





// EPREUVES DE LANCER


export class LancerDeDisque extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de disque";
        this.mesure = "metres";
        this.recordMonde = 55.87;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}

export class LancerDeJavelot extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de javelot";
        this.mesure = "metres";
        this.recordMonde = 78.29;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}

export class LancerDePoids extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de poids";
        this.mesure = "metres";
        this.recordMonde = 18.03;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}




// EPREUVE DE COURSE

export class CentMetres extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "100 mètres";
        this.mesure = "secondes";
        this.recordMonde = 10.12;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}


export class CentDixMetresHaies extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "110 mètres haies";
        this.mesure = "secondes";
        this.recordMonde = 13.44;

    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}


export class QuatreCentsMetres extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "400 mètres";
        this.mesure = "secondes";
        this.recordMonde = 45;
    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}


export class MilleCinqCentsMetres extends Epreuve {
    constructor(date : Date){
        super(date);
        this.nom = "1500 mètres";
        this.mesure = "secondes";
        this.recordMonde = 239.13;

    }

    getNom(): string { return this.nom; }
    getDate(): Date { return this.date; }
    getMesure(): string { return this.mesure; }



    afficher(): void {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    }

    afficherClassement(): void {
        
    }
}