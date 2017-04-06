/*
Exercice : construire et afficher une progression 

var ligne = prompt("Progression level");
for (var i = 0; i <= 40 ;i++ ) {
    ligne = ligne + "";
    // Autre possibilité avec l'opérateur += 
    // ligne += "#" 
    console.log(ligne);
}*/

// Exercice tour manège 

var nbTours = Number(prompt("Argent souhaitez"));

var chiffre = "";
while(chiffre <= nbTours){
    console.log("L'argent sur votre compte est de" + chiffre);
    chiffre++;
}
alert("Argent reçus" + " : " + nbTours +"\n ATTENTION: regardez la console pour voir le déroulement");


// Contrôle de la données saisi par l'utilisateur
// Tant que X n'es pas saisie on enregistre les informations dans lettre
var lettre = "";
while (lettre !== "x") {
    lettre = prompt("Tapez une lettre ou x pour sortir :");
    console.log(lettre);
}

// Script qui compte le nombre de visiteurs sur une page exemple 
console.log("Début du script");
var compteur; 
// Initiliation = valeur par défault 
// conditions = objectif à atteindre 
// étape = incrémentation valeur ++ 
for(compteur = 0; compteur <= 10; compteur++){
    console.log("Personnes en ligne" + " : " + compteur );
}
console.log("Fin du script");


/*
// Script while 0 à 55 ( affiche 1 article sur x articles)
console.log("Début du programme");
var nombre = 0;

// while = condition (variables = valeur )
// Une fois qu'on rentre dans la condition , on indique l'objectif atteint et l'incrémentation ++

while (nombre <= 55) {
    console.log(nombre)
    nombre++;
}
console.log("Script exécuter avec succéss");
*/



/*
// Test logique , code. 

var number_1 = Number(prompt("Premier résultat"));
    console.log("number 1:" + number_1);
var number_2 = Number(prompt("Deuxieme résultat"));
    console.log("number 2:" + number_2);
var number_3 = Number(prompt("3eme nombre"));
    console.log("number 3:" + number_3);

if (number_1 > number_2) {
    number_1 = number_3 * 2;
    console.log(" number_1 + number_3 est de " + number_1);
}
else 
    {
        number_1++;
        if (number_2 > number_3) {
            number_1 += number_3 * 3;
            
        }
        else {
            number_1 = 0;
            number_3 = number_3 * 2 + number_2;
            console.log(number_3 + "le résultat de la 3eme variables");
        }
            
    }
*/
/*
// Exercice : afficher une heure plus tard 
    var heure = Number(prompt("Veuillez indiquez une heure : "));
    var minute = Number(prompt("Veuillez indiquez les minutes : "));
    var secondes = Number(prompt("Veuillez indiquez les secondes : "));

    // on test les cas d'erreur 
    if ((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (secondes >= 0) && (secondes <= 59)) {
        heure++; // on incremente l'heure
        secondes++; // on incrémente les secondes pour revenir à 0
        if (secondes === 60) {
            // on passe à la minute suivantes 
            secondes = 0;
            minute++;
            if (minute === 60) {
                // on remet les minutes à 0
                heure++;
                if(heure === 24) {
                    // l'heure suivante est 00:00
                    heure = 0;
                }
            }
        }
        console.log("Dans une seconde,il sera \n" + heure + "heures \n" + minute + " minutes et \n" + secondes + "secondes");
    }
    
    else {
        console.log("Heure incorrecte ! ");
    }

 */

/*
var semaine = String(prompt("Veuillez indiquez un jour dans la semaine "));


        switch(semaine){
        case "lundi":
            console.log("demain nous serons mardi");
            break;
        case "mardi":
            console.log("demain nous serons mercredi");
            break;
        case "mercredi":
            console.log("demain nous serons jeudi");
            break;
        case "jeudi":
            console.log("demain nous serons vendredi");
            break;
        case "vendredi":
            console.log("demain nous serons en week_end");
            break;
        default: 
            console.log("Un champ est mal renseigné");
            break;
        }/*
        
        // L'instructions switch permet l'exécution d'un bloc d'instructions , parmis plusieurs case 
        /*var meteo = prompt("Quel temps fait t'il dehors ? \n" + " vent" + " soleil" + " pluie" + " neige");*/
        /*
        var soleil = "soleil";
        
        if(meteo === soleil) {
            console.log("Sortez, il fait beau dehors");
        }
        else if (meteo === "vent"){
            console.log("Sortez couvert");
        }
        
        else if ( meteo === "pluie") {
            console.log("Sortez bien couvert");
        }
        else if (meteo === "neige"){
            console.log("Rentrez chez vous");
        }
        else {
            console.log("Temps indéfini ");
        }*/
        
        /*var test = "apprenti";
        switch (test){
                
            case "apprenti":
                console.log("test vaut apprenti");
                // on execute le second bloc 
                break;
            case "look and work":
                console.log("test vaut look and work");
                break; // on stop l'exécution du switch 
        }

        var nombre = Number(prompt("Entrez un nombre :"));
        if (nombre > 0) {
            console.log(nombre + "est positif");
        }
        /*
        
        /*switch(meteo) {
            case "soleil": // instruction choix case 
                console.log("Sortez , il fait beau dehors");
                break;
            case "vent": // instruction choix case
                // conditions pour l'instruction
                console.log("Il y'a du vent prés de chez vous");
                break;
            case "pluie": // instruction choix case
                // conditions pour l'instruction
                console.log("N'oubliez pas votre parapluie")
                break;
            case "neige": // instruction choix case
                // conditions pour l'instruction
                console.log("Il y'a de la neige prés de chez vous");
                break;
            default:  // instruction choix case
                // conditions pour l'instruction
                console.log("Temps indéfini");
                break;
        }*/
        
        /*
        var number = Number(prompt("Entrez votre nombre s'il vous plais"));
        if (number > 0) {
            console.log("Test positif est de " + number);
        }
        else if (number < 0){
            console.log("Le chiffre est supérieur à 0" + " " + number + "donc pas de réponse possible.");
        }
        else {
            console.log(number + " est null ");
        }
        */