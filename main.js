"use strict";
exports.__esModule = true;
var decathlon_1 = require("./decathlon");
var dateDebut = new Date(2022, 9, 17);
var dateFin = new Date(2022, 9, 18);
var decathlon = new decathlon_1.Decathlon(dateDebut, dateFin, "Décastar", "Talence");
decathlon.afficher();
