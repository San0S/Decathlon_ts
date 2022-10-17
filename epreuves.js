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
exports.MilleCinqCentsMetres = exports.QuatreCentsMetres = exports.CentDixMetresHaies = exports.CentMetres = exports.LancerDePoids = exports.LancerDeJavelot = exports.LancerDeDisque = exports.SautALaPerche = exports.SautEnHauteur = exports.SautEnLongueur = exports.Epreuve = void 0;
var Epreuve = /** @class */ (function () {
    function Epreuve(date, recordMonde) {
        this.date = date;
        this.recordMonde = recordMonde;
    }
    return Epreuve;
}());
exports.Epreuve = Epreuve;
// EPREUVES DE SAUT
// abstract class Sauts extends Epreuve {
// }
var SautEnLongueur = /** @class */ (function (_super) {
    __extends(SautEnLongueur, _super);
    function SautEnLongueur(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Saut en longueur";
        return _this;
    }
    SautEnLongueur.prototype.getNom = function () { return this.nom; };
    SautEnLongueur.prototype.getDate = function () { return this.date; };
    SautEnLongueur.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    SautEnLongueur.prototype.afficherClassement = function () {
    };
    return SautEnLongueur;
}(Epreuve));
exports.SautEnLongueur = SautEnLongueur;
var SautEnHauteur = /** @class */ (function (_super) {
    __extends(SautEnHauteur, _super);
    function SautEnHauteur(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Saut en hauteur";
        return _this;
    }
    SautEnHauteur.prototype.getNom = function () { return this.nom; };
    SautEnHauteur.prototype.getDate = function () { return this.date; };
    SautEnHauteur.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    SautEnHauteur.prototype.afficherClassement = function () {
    };
    return SautEnHauteur;
}(Epreuve));
exports.SautEnHauteur = SautEnHauteur;
var SautALaPerche = /** @class */ (function (_super) {
    __extends(SautALaPerche, _super);
    function SautALaPerche(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Saut à la perche";
        return _this;
    }
    SautALaPerche.prototype.getNom = function () { return this.nom; };
    SautALaPerche.prototype.getDate = function () { return this.date; };
    SautALaPerche.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    SautALaPerche.prototype.afficherClassement = function () {
    };
    return SautALaPerche;
}(Epreuve));
exports.SautALaPerche = SautALaPerche;
// EPREUVES DE LANCER
// // abstract class Lancers extends Epreuve {
// // }
var LancerDeDisque = /** @class */ (function (_super) {
    __extends(LancerDeDisque, _super);
    function LancerDeDisque(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Lancer de disque";
        return _this;
    }
    LancerDeDisque.prototype.getNom = function () { return this.nom; };
    LancerDeDisque.prototype.getDate = function () { return this.date; };
    LancerDeDisque.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    LancerDeDisque.prototype.afficherClassement = function () {
    };
    return LancerDeDisque;
}(Epreuve));
exports.LancerDeDisque = LancerDeDisque;
var LancerDeJavelot = /** @class */ (function (_super) {
    __extends(LancerDeJavelot, _super);
    function LancerDeJavelot(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Lancer de javelot";
        return _this;
    }
    LancerDeJavelot.prototype.getNom = function () { return this.nom; };
    LancerDeJavelot.prototype.getDate = function () { return this.date; };
    LancerDeJavelot.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    LancerDeJavelot.prototype.afficherClassement = function () {
    };
    return LancerDeJavelot;
}(Epreuve));
exports.LancerDeJavelot = LancerDeJavelot;
var LancerDePoids = /** @class */ (function (_super) {
    __extends(LancerDePoids, _super);
    function LancerDePoids(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "Lancer de poids";
        return _this;
    }
    LancerDePoids.prototype.getNom = function () { return this.nom; };
    LancerDePoids.prototype.getDate = function () { return this.date; };
    LancerDePoids.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    LancerDePoids.prototype.afficherClassement = function () {
    };
    return LancerDePoids;
}(Epreuve));
exports.LancerDePoids = LancerDePoids;
// EPREUVE DE COURSE
var CentMetres = /** @class */ (function (_super) {
    __extends(CentMetres, _super);
    function CentMetres(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "100 mètres";
        return _this;
    }
    CentMetres.prototype.getNom = function () { return this.nom; };
    CentMetres.prototype.getDate = function () { return this.date; };
    CentMetres.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    CentMetres.prototype.afficherClassement = function () {
    };
    return CentMetres;
}(Epreuve));
exports.CentMetres = CentMetres;
var CentDixMetresHaies = /** @class */ (function (_super) {
    __extends(CentDixMetresHaies, _super);
    function CentDixMetresHaies(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "110 mètres haies";
        return _this;
    }
    CentDixMetresHaies.prototype.getNom = function () { return this.nom; };
    CentDixMetresHaies.prototype.getDate = function () { return this.date; };
    CentDixMetresHaies.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    CentDixMetresHaies.prototype.afficherClassement = function () {
    };
    return CentDixMetresHaies;
}(Epreuve));
exports.CentDixMetresHaies = CentDixMetresHaies;
var QuatreCentsMetres = /** @class */ (function (_super) {
    __extends(QuatreCentsMetres, _super);
    function QuatreCentsMetres(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "400 mètres";
        return _this;
    }
    QuatreCentsMetres.prototype.getNom = function () { return this.nom; };
    QuatreCentsMetres.prototype.getDate = function () { return this.date; };
    QuatreCentsMetres.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    QuatreCentsMetres.prototype.afficherClassement = function () {
    };
    return QuatreCentsMetres;
}(Epreuve));
exports.QuatreCentsMetres = QuatreCentsMetres;
var MilleCinqCentsMetres = /** @class */ (function (_super) {
    __extends(MilleCinqCentsMetres, _super);
    function MilleCinqCentsMetres(date, recordMonde) {
        var _this = _super.call(this, date, recordMonde) || this;
        _this.nom = "1500 mètres";
        return _this;
    }
    MilleCinqCentsMetres.prototype.getNom = function () { return this.nom; };
    MilleCinqCentsMetres.prototype.getDate = function () { return this.date; };
    MilleCinqCentsMetres.prototype.afficher = function () {
        console.log(this.nom, ", jour :", this.date.getDate(), ", record :", this.recordMonde);
    };
    MilleCinqCentsMetres.prototype.afficherClassement = function () {
    };
    return MilleCinqCentsMetres;
}(Epreuve));
exports.MilleCinqCentsMetres = MilleCinqCentsMetres;
