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
exports.SautALaPerche = exports.SautEnHauteur = exports.SautEnLongueur = exports.LancerDePoids = exports.LancerDeJavelot = exports.LancerDeDisque = exports.MilleCinqCentsMetres = exports.QuatreCentsMetres = exports.CentDixMetresHaies = exports.CentMetres = void 0;
var Resultat = /** @class */ (function () {
    function Resultat(perf, valA, valB, valC) {
        this.points = 0;
        this.performance = perf;
        this.valA = valA;
        this.valB = valB;
        this.valC = valC;
    }
    Resultat.prototype.getPoints = function () {
        return this.points;
    };
    Resultat.prototype.getPerformanceBrut = function () {
        return this.performance;
    };
    Resultat.prototype.getPerformance = function () {
        return this.performance + " " + this.unite;
    };
    return Resultat;
}());
// =============================================
//             EPREUVE DE COURSE
// =============================================
var ResultatCourse = /** @class */ (function (_super) {
    __extends(ResultatCourse, _super);
    function ResultatCourse(perf, valA, valB, valC) {
        var _this = _super.call(this, perf, valA, valB, valC) || this;
        _this.unite = "secondes";
        // Formule pour calculer le nombre de points remportés pour les épreuves de course
        _this.points = Math.round(_this.valA * Math.pow((_this.valB - _this.performance), _this.valC));
        if (_this.points < 700 || _this.performance > _this.valB) {
            _this.points = 0;
        }
        else if (_this.points > 1000) {
            _this.points = 1000;
        }
        return _this;
    }
    return ResultatCourse;
}(Resultat));
// ---------------------------------------------
var CentMetres = /** @class */ (function (_super) {
    __extends(CentMetres, _super);
    function CentMetres(perf) {
        return _super.call(this, perf, 25.4347, 18, 1.81) || this;
    }
    return CentMetres;
}(ResultatCourse));
exports.CentMetres = CentMetres;
var CentDixMetresHaies = /** @class */ (function (_super) {
    __extends(CentDixMetresHaies, _super);
    function CentDixMetresHaies(perf) {
        return _super.call(this, perf, 5.74352, 28.5, 1.92) || this;
    }
    return CentDixMetresHaies;
}(ResultatCourse));
exports.CentDixMetresHaies = CentDixMetresHaies;
var QuatreCentsMetres = /** @class */ (function (_super) {
    __extends(QuatreCentsMetres, _super);
    function QuatreCentsMetres(perf) {
        return _super.call(this, perf, 1.53775, 82, 1.81) || this;
    }
    return QuatreCentsMetres;
}(ResultatCourse));
exports.QuatreCentsMetres = QuatreCentsMetres;
var MilleCinqCentsMetres = /** @class */ (function (_super) {
    __extends(MilleCinqCentsMetres, _super);
    function MilleCinqCentsMetres(perf) {
        return _super.call(this, perf, 0.03768, 480, 1.85) || this;
    }
    return MilleCinqCentsMetres;
}(ResultatCourse));
exports.MilleCinqCentsMetres = MilleCinqCentsMetres;
// =============================================
//             EPREUVES DE LANCER
// =============================================
var ResultatLancer = /** @class */ (function (_super) {
    __extends(ResultatLancer, _super);
    function ResultatLancer(perf, valA, valB, valC) {
        var _this = _super.call(this, perf, valA, valB, valC) || this;
        _this.unite = "mètres";
        // Formule pour calculer le nombre de points remportés pour les épreuves de lancer
        _this.points = Math.round(_this.valA * Math.pow((_this.performance - _this.valB), _this.valC));
        if (_this.points < 700) {
            _this.points = 0;
        }
        else if (_this.points > 1000) {
            _this.points = 1000;
        }
        return _this;
    }
    return ResultatLancer;
}(Resultat));
// ---------------------------------------------
var LancerDeDisque = /** @class */ (function (_super) {
    __extends(LancerDeDisque, _super);
    function LancerDeDisque(perf) {
        return _super.call(this, perf, 12.91, 4, 1.1) || this;
    }
    return LancerDeDisque;
}(ResultatLancer));
exports.LancerDeDisque = LancerDeDisque;
var LancerDeJavelot = /** @class */ (function (_super) {
    __extends(LancerDeJavelot, _super);
    function LancerDeJavelot(perf) {
        return _super.call(this, perf, 10.14, 7, 1.08) || this;
    }
    return LancerDeJavelot;
}(ResultatLancer));
exports.LancerDeJavelot = LancerDeJavelot;
var LancerDePoids = /** @class */ (function (_super) {
    __extends(LancerDePoids, _super);
    function LancerDePoids(perf) {
        return _super.call(this, perf, 51.39, 1.5, 1.05) || this;
    }
    return LancerDePoids;
}(ResultatLancer));
exports.LancerDePoids = LancerDePoids;
// =============================================
//             EPREUVES DE SAUT
// =============================================
var ResultatSaut = /** @class */ (function (_super) {
    __extends(ResultatSaut, _super);
    function ResultatSaut(perf, valA, valB, valC) {
        var _this = _super.call(this, perf, valA, valB, valC) || this;
        _this.unite = "centimètres";
        // Formule pour calculer le nombre de points remportés pour les épreuves de saut
        _this.points = Math.round(_this.valA * Math.pow((_this.performance - _this.valB), _this.valC));
        if (_this.points < 700) {
            _this.points = 0;
        }
        else if (_this.points > 1000) {
            _this.points = 1000;
        }
        return _this;
    }
    return ResultatSaut;
}(Resultat));
// ---------------------------------------------
var SautEnLongueur = /** @class */ (function (_super) {
    __extends(SautEnLongueur, _super);
    function SautEnLongueur(perf) {
        return _super.call(this, perf, 0.14354, 220, 1.4) || this;
    }
    return SautEnLongueur;
}(ResultatSaut));
exports.SautEnLongueur = SautEnLongueur;
var SautEnHauteur = /** @class */ (function (_super) {
    __extends(SautEnHauteur, _super);
    function SautEnHauteur(perf) {
        return _super.call(this, perf, 0.8465, 75, 1.42) || this;
    }
    return SautEnHauteur;
}(ResultatSaut));
exports.SautEnHauteur = SautEnHauteur;
var SautALaPerche = /** @class */ (function (_super) {
    __extends(SautALaPerche, _super);
    function SautALaPerche(perf) {
        return _super.call(this, perf, 0.2797, 100, 1.35) || this;
    }
    return SautALaPerche;
}(ResultatSaut));
exports.SautALaPerche = SautALaPerche;
