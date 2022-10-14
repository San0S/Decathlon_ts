import { Decathlon } from "./decathlon";


let dateDebut = new Date(2022, 9, 17);
let dateFin = new Date(2022, 9, 18);



let decathlon = new Decathlon(dateDebut, dateFin, "Décastar", "Talence")
decathlon.afficher();