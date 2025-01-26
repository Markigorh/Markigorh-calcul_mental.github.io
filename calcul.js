function tirageNombre(min, max){
    let nombre = Math.floor(Math.random() * (max-min+1)) + min ;
        return nombre 
}

function ecrireNombre(ID, valeur){
    document.querySelector(ID).value = valeur;
}

function lireNombre(ID){
    return Number(document.querySelector(ID).value);
}
function init(){
    ecrireNombre("#nombreA", tirageNombre(1,50));
    ecrireNombre("#nombreB", tirageNombre(1,50));
    document.querySelector("#reponse").value = "";
    document.querySelector("#reponse").style.backgroundColor = "white";

}

let nbreBonneReponse = 0;
let nbCoupJoue = 0;
init()




for (let t =0; t < 50; t++){
    console.log(tirageNombre(5,50));
} 



function repondre(){
    nbCoupJoue++
    let nombreA = lireNombre("#nombreA");
    let nombreB = lireNombre("#nombreB");
    
    let resultatJuste = nombreA + nombreB;
    let resultatUser = lireNombre("#reponse");
    
    if (resultatUser == resultatJuste){
        document.querySelector("#reponse").style.backgroundColor = "#77FF00";
        nbreBonneReponse++;
    }else {
        document.querySelector("#reponse").style.backgroundColor = "#FFAA00";
         
    }
    reussite(nbreBonneReponse , nbCoupJoue);
}

function reussite(bonne, coup) {
    // modifier la barre de réussite (MetroUI)
    let progression = Metro.getPlugin("#progression", "progress");
    progression.buff(100);
    progression.val(bonne/coup*100);
    document.querySelector("#preussite").innerHTML = "Réussite : "+ bonne + 
    "bonne(s) réponse(s) sur "+coup;
    }
    
