"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SautALaPerche = exports.SautEnHauteur = exports.SautEnLongueur = exports.Saut = exports.LancerDePoids = exports.LancerDeJavelot = exports.LancerDeDisque = exports.Lancer = exports.MilleCinqCentsMetres = exports.QuatreCentsMetres = exports.CentDixMetresHaies = exports.CentMetres = exports.Course = exports.Epreuve = void 0;
var Epreuve = /** @class */ (function () {
    function Epreuve(date) {
        this.date = date;
    }
    Epreuve.prototype.getNom = function () { return this.nom; };
    Epreuve.prototype.getDate = function () { return this.date; };
    Epreuve.prototype.getMesure = function () { return this.mesure; };
    Epreuve.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    return Epreuve;
}());
exports.Epreuve = Epreuve;
// EPREUVE DE COURSE
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "secondes";
        return _this;
    }
    return Course;
}(Epreuve));
exports.Course = Course;
// ---------------------------------------------
var CentMetres = /** @class */ (function (_super) {
    __extends(CentMetres, _super);
    function CentMetres(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "100 mètres";
        _this.recordMonde = 10.12;
        return _this;
    }
    // REMPLACER LES AUTRES METHODES AFFICHERCLASSEMENT PAR CETTE VERSION :
    CentMetres.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatCentMetres().getPoints() - a.getResultatCentMetres().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return CentMetres;
}(Course));
exports.CentMetres = CentMetres;
var CentDixMetresHaies = /** @class */ (function (_super) {
    __extends(CentDixMetresHaies, _super);
    function CentDixMetresHaies(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "110 mètres haies";
        _this.recordMonde = 13.44;
        return _this;
    }
    CentDixMetresHaies.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatCentDixMetresHaies().getPoints() - a.getResultatCentDixMetresHaies().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return CentDixMetresHaies;
}(Course));
exports.CentDixMetresHaies = CentDixMetresHaies;
var QuatreCentsMetres = /** @class */ (function (_super) {
    __extends(QuatreCentsMetres, _super);
    function QuatreCentsMetres(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "400 mètres";
        _this.recordMonde = 45;
        return _this;
    }
    QuatreCentsMetres.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatQuatreCentsMetres().getPoints() - a.getResultatQuatreCentsMetres().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return QuatreCentsMetres;
}(Course));
exports.QuatreCentsMetres = QuatreCentsMetres;
var MilleCinqCentsMetres = /** @class */ (function (_super) {
    __extends(MilleCinqCentsMetres, _super);
    function MilleCinqCentsMetres(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "1500 mètres";
        _this.recordMonde = 239.13;
        return _this;
    }
    MilleCinqCentsMetres.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatMilleCinqCentsMetres().getPoints() - a.getResultatMilleCinqCentsMetres().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return MilleCinqCentsMetres;
}(Course));
exports.MilleCinqCentsMetres = MilleCinqCentsMetres;
// EPREUVES DE LANCER
var Lancer = /** @class */ (function (_super) {
    __extends(Lancer, _super);
    function Lancer(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "metres";
        return _this;
    }
    return Lancer;
}(Epreuve));
exports.Lancer = Lancer;
// ---------------------------------------------
var LancerDeDisque = /** @class */ (function (_super) {
    __extends(LancerDeDisque, _super);
    function LancerDeDisque(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Lancer de disque";
        _this.recordMonde = 55.87;
        return _this;
    }
    LancerDeDisque.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDeDisque().getPoints() - a.getResultatLancerDeDisque().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return LancerDeDisque;
}(Lancer));
exports.LancerDeDisque = LancerDeDisque;
var LancerDeJavelot = /** @class */ (function (_super) {
    __extends(LancerDeJavelot, _super);
    function LancerDeJavelot(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Lancer de javelot";
        _this.recordMonde = 78.29;
        return _this;
    }
    LancerDeJavelot.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDeJavelot().getPoints() - a.getResultatLancerDeJavelot().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return LancerDeJavelot;
}(Lancer));
exports.LancerDeJavelot = LancerDeJavelot;
var LancerDePoids = /** @class */ (function (_super) {
    __extends(LancerDePoids, _super);
    function LancerDePoids(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Lancer de poids";
        _this.mesure = "metres";
        _this.recordMonde = 18.03;
        return _this;
    }
    LancerDePoids.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDePoids().getPoints() - a.getResultatLancerDePoids().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return LancerDePoids;
}(Lancer));
exports.LancerDePoids = LancerDePoids;
// EPREUVES DE SAUT
var Saut = /** @class */ (function (_super) {
    __extends(Saut, _super);
    function Saut(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "centimetres";
        return _this;
    }
    return Saut;
}(Epreuve));
exports.Saut = Saut;
// ---------------------------------------------
var SautEnLongueur = /** @class */ (function (_super) {
    __extends(SautEnLongueur, _super);
    function SautEnLongueur(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Saut en longueur";
        _this.recordMonde = 8.24;
        return _this;
    }
    SautEnLongueur.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautEnLongueur().getPoints() - a.getResultatSautEnLongueur().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return SautEnLongueur;
}(Saut));
exports.SautEnLongueur = SautEnLongueur;
var SautEnHauteur = /** @class */ (function (_super) {
    __extends(SautEnHauteur, _super);
    function SautEnHauteur(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Saut en hauteur";
        _this.recordMonde = 2.27;
        return _this;
    }
    SautEnHauteur.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautEnHauteur().getPoints() - a.getResultatSautEnHauteur().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return SautEnHauteur;
}(Saut));
exports.SautEnHauteur = SautEnHauteur;
var SautALaPerche = /** @class */ (function (_super) {
    __extends(SautALaPerche, _super);
    function SautALaPerche(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Saut à la perche";
        _this.recordMonde = 55.7;
        return _this;
    }
    SautALaPerche.prototype.afficherClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautALaPerche().getPoints() - a.getResultatSautALaPerche().getPoints(); });
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        catch (TypeError) {
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return SautALaPerche;
}(Saut));
exports.SautALaPerche = SautALaPerche;
