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


    // afficherClassement() : void;

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
}

export class CentDixMetresHaies extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "110 mètres haies";
        this.recordMonde = 13.44;
    }
}


export class QuatreCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "400 mètres";
        this.recordMonde = 45;
    }
}


export class MilleCinqCentsMetres extends Course {
    constructor(date : Date){
        super(date);
        this.nom = "1500 mètres";
        this.recordMonde = 239.13;

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
}

export class LancerDeJavelot extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de javelot";
        this.recordMonde = 78.29;
    }
}

export class LancerDePoids extends Lancer {
    constructor(date : Date){
        super(date);
        this.nom = "Lancer de poids";
        this.mesure = "metres";
        this.recordMonde = 18.03;
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
}


export class SautEnHauteur extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut en hauteur";
        this.recordMonde = 2.27;
    }
}


export class SautALaPerche extends Saut {
    constructor(date : Date){
        super(date);
        this.nom = "Saut à la perche";
        this.recordMonde = 55.7;
    }
}
