abstract class Resultat {
    protected points : number = 0;
    protected performance : number;
    protected unite : string;

    // Pour calculer le nombre de points remportés selon une performance, Constantes utilisées depuis 1984 dans le calcul des points gagnés selon la performance de l'athlète
    protected valA : number;
    protected valB : number;
    protected valC : number;

    constructor(perf : number, valA : number, valB: number, valC: number) {
        this.performance = perf;
        this.valA = valA;
        this.valB = valB;
        this.valC = valC;
    }

    
    getPoints(): number {
        return this.points;
    }

    getPerformanceBrut(): number {
        return this.performance;
    }

    getPerformance(): string {
        return this.performance + " " + this.unite;
    }


}




// =============================================
//             EPREUVE DE COURSE
// =============================================

abstract class ResultatCourse extends Resultat {
    constructor(perf : number, valA : number, valB: number, valC: number) {
        super(perf, valA, valB, valC);
        this.unite = "secondes";
        // Formule pour calculer le nombre de points remportés pour les épreuves de course
        this.points = Math.round(this.valA * (this.valB - this.performance) ** this.valC )
        if (this.points < 700 || this.performance > this.valB) {
            this.points = 0;
        } else if(this.points > 1000) {
            this.points = 1000;
        }
    }
}

// ---------------------------------------------

export class CentMetres extends ResultatCourse {
    constructor(perf : number) {
        super(perf, 25.4347, 18, 1.81);
    }
}

export class CentDixMetresHaies extends ResultatCourse {
    constructor(perf : number) {
        super(perf, 5.74352, 28.5, 1.92);
    }
}

export class QuatreCentsMetres extends ResultatCourse {
    constructor(perf : number) {
        super(perf, 1.53775, 82, 1.81);
    }
}

export class MilleCinqCentsMetres extends ResultatCourse {
    constructor(perf : number) {
        super(perf, 0.03768, 480, 1.85);
    }
}




// =============================================
//             EPREUVES DE LANCER
// =============================================

abstract class ResultatLancer extends Resultat {
    constructor(perf : number, valA : number, valB: number, valC: number) {
        super(perf, valA, valB, valC);
        this.unite = "mètres";
        // Formule pour calculer le nombre de points remportés pour les épreuves de lancer
        this.points = Math.round(this.valA * (this.performance - this.valB) ** this.valC )
        if (this.points < 700) {
            this.points = 0;
        } else if(this.points > 1000) {
            this.points = 1000;
        }
    }
}

// ---------------------------------------------

export class LancerDeDisque extends ResultatLancer {
    constructor(perf : number) {
        super(perf, 12.91, 4, 1.1);
    }
}

export class LancerDeJavelot extends ResultatLancer {
    constructor(perf : number) {
        super(perf, 10.14, 7, 1.08);
    }
}

export class LancerDePoids extends ResultatLancer {
    constructor(perf : number) {
        super(perf, 51.39, 1.5, 1.05);
    }
}




// =============================================
//             EPREUVES DE SAUT
// =============================================

abstract class ResultatSaut extends Resultat {

    constructor(perf : number, valA : number, valB: number, valC: number) {
        super(perf, valA, valB, valC);
        this.unite = "centimètres";
        // Formule pour calculer le nombre de points remportés pour les épreuves de saut
        this.points = Math.round(this.valA * (this.performance - this.valB) ** this.valC )
        if (this.points < 700) {
            this.points = 0;
        } else if(this.points > 1000) {
            this.points = 1000;
        }
    }
}

// ---------------------------------------------

export class SautEnLongueur extends ResultatSaut {
    constructor(perf : number) {
        super(perf, 0.14354, 220, 1.4);
    }
}

export class SautEnHauteur extends ResultatSaut {
    constructor(perf : number) {
        super(perf, 0.8465, 75, 1.42);
    }
}

export class SautALaPerche extends ResultatSaut {
    constructor(perf : number) {
        super(perf, 0.2797, 100, 1.35);
    }
}
