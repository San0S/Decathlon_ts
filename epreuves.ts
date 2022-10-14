abstract class Epreuve {
    protected date : Date;
    protected recordMonde : number;
    // protected participants : Participants[ ]


}


abstract class Sauts extends Epreuve {

}


class SautEnLongueur extends Sauts {

}


class SautEnHauteur extends Sauts {

}


class SautALaPerche extends Sauts {

}




abstract class Lancers extends Epreuve {

}

class LancerDeDisque extends Lancers {

}

class LancerDeJavelot extends Lancers {

}

class LancerDePoids extends Lancers {
    
}


