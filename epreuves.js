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
exports.SautALaPerche = exports.SautEnHauteur = exports.SautEnLongueur = exports.LancerDePoids = exports.LancerDeJavelot = exports.LancerDeDisque = exports.MilleCinqCentsMetres = exports.QuatreCentsMetres = exports.CentDixMetresHaies = exports.CentMetres = exports.Epreuve = void 0;
var Epreuve = /** @class */ (function () {
    function Epreuve(date) {
        this.date = date;
    }
    Epreuve.prototype.getNom = function () { return this.nom; };
    Epreuve.prototype.getDate = function () { return this.date; };
    Epreuve.prototype.getMesure = function () { return this.mesure; };
    Epreuve.prototype.getRecordMonde = function () { return this.recordMonde; };
    Epreuve.prototype.setRecordMonde = function (record) { this.recordMonde = record; };
    Epreuve.prototype.afficher = function () { console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde); };
    // affichage du classement des athlètes au sein de l'épreuve
    Epreuve.prototype.afficherClassement = function (classement) {
        if (classement != undefined) {
            console.log("\nVoici le classement de cette épreuve :");
            for (var i = 0; i < classement.length; i++) {
                console.log((i + 1) + ") " + classement[i].formatAfficherResultat(this.nom));
            }
        }
        else {
            // Si tous les athlètes n'ont pas un résultat enregistré dans l'épreuve, on affiche le suivant
            console.log("Veuillez entrer les performances de chaque athlète pour afficher le classement de cette épreuve.");
        }
    };
    return Epreuve;
}());
exports.Epreuve = Epreuve;
// =============================================
//             EPREUVE DE COURSE
// =============================================
var Course = /** @class */ (function (_super) {
    __extends(Course, _super);
    function Course(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "secondes";
        return _this;
    }
    return Course;
}(Epreuve));
// ---------------------------------------------
var CentMetres = /** @class */ (function (_super) {
    __extends(CentMetres, _super);
    function CentMetres(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "100 mètres";
        _this.recordMonde = 10.12;
        return _this;
    }
    CentMetres.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatCentMetres().getPoints() - a.getResultatCentMetres().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
    CentDixMetresHaies.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatCentDixMetresHaies().getPoints() - a.getResultatCentDixMetresHaies().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
    QuatreCentsMetres.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatQuatreCentsMetres().getPoints() - a.getResultatQuatreCentsMetres().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
    MilleCinqCentsMetres.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatMilleCinqCentsMetres().getPoints() - a.getResultatMilleCinqCentsMetres().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
        }
    };
    return MilleCinqCentsMetres;
}(Course));
exports.MilleCinqCentsMetres = MilleCinqCentsMetres;
// =============================================
//             EPREUVES DE LANCER
// =============================================
var Lancer = /** @class */ (function (_super) {
    __extends(Lancer, _super);
    function Lancer(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "metres";
        return _this;
    }
    return Lancer;
}(Epreuve));
// ---------------------------------------------
var LancerDeDisque = /** @class */ (function (_super) {
    __extends(LancerDeDisque, _super);
    function LancerDeDisque(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Lancer de disque";
        _this.recordMonde = 55.87;
        return _this;
    }
    LancerDeDisque.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDeDisque().getPoints() - a.getResultatLancerDeDisque().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
    LancerDeJavelot.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDeJavelot().getPoints() - a.getResultatLancerDeJavelot().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
    LancerDePoids.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatLancerDePoids().getPoints() - a.getResultatLancerDePoids().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
        }
    };
    return LancerDePoids;
}(Lancer));
exports.LancerDePoids = LancerDePoids;
// =============================================
//             EPREUVES DE SAUT
// =============================================
var Saut = /** @class */ (function (_super) {
    __extends(Saut, _super);
    function Saut(date) {
        var _this = _super.call(this, date) || this;
        _this.mesure = "centimetres";
        return _this;
    }
    return Saut;
}(Epreuve));
// ---------------------------------------------
var SautEnLongueur = /** @class */ (function (_super) {
    __extends(SautEnLongueur, _super);
    function SautEnLongueur(date) {
        var _this = _super.call(this, date) || this;
        _this.nom = "Saut en longueur";
        _this.recordMonde = 824;
        return _this;
    }
    SautEnLongueur.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautEnLongueur().getPoints() - a.getResultatSautEnLongueur().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
        _this.recordMonde = 227;
        return _this;
    }
    SautEnHauteur.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautEnHauteur().getPoints() - a.getResultatSautEnHauteur().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
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
        _this.recordMonde = 570;
        return _this;
    }
    SautALaPerche.prototype.getClassement = function (athletes) {
        try {
            var classement = athletes.sort(function (a, b) { return b.getResultatSautALaPerche().getPoints() - a.getResultatSautALaPerche().getPoints(); });
            return classement;
        }
        catch (TypeError) {
            return undefined;
        }
    };
    return SautALaPerche;
}(Saut));
exports.SautALaPerche = SautALaPerche;
