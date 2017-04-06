// On crée la fonction qui désactive l'affichage des "tooltips"

function disableTooltips(){
    
    var tooltips = document.querySelectorAll('.tooltip'),
        tooltipsLength = tooltips.length;
    
    for(var i = 0; i < tooltipsLength; i++ ){
        tooltips[i].style.display = 'none';
    }
};

// Récupere l'input qui correspond à notre "tooltip"

function getTooltip(elements) {
    while(elements = elements.nextSibling){
        if(elements.className === 'tooltip') {
            return elements;
        }
    }
    return false;
};

// Fonctions qui check le formulaire , si ok > TRUE else FALSE

var check = {}; // On met toutes nos fonctions dans un objet littéral 

check['sex'] = function(){
    
    var sex = document.getElementById('sex'),
        tooltipStyle = getTooltip(sex[1].parentNode).style;
    
    if (sex[0].checked || sex[1].checked) {
        tooltipStyle.display = 'none';
        return true;
    }
    else{
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['user'] = function(id){
    
    var name = document.getElementById(id),
        tooltipStyle.display = getTooltip(name).style;
    
    if (name.value.length >= 4){
        name.className = 'Correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        name.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};
    
check['prenom'] = check['user']; // même fonction que user


check['age'] = function() { // check age entre 5 et 160
    
    var age = document.getElementById('age'),
        tooltipStyle = getTooltip(age).style,
        ageValue = parseInt(age.value);
    if (!isNan(ageValue) && ageValue >= 5 && ageValue <= 160) {
        age.className = 'Correct';
        tooltipStyle.display = 'inline-block';
        return false;
    }
    else {
        age.className = 'inccorect';
        tooltilStyle.display = 'inline-block';
        return false;
    }
};

check['mdp'] = function() {
    
    var login = document.getElementById('mdp'),
        tooltipStyle = getTooltip(mdp).style;
    
    if (mdp.value.length >= 4) {
        mdp.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        mdp.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }
};

check['mdp_confirm'] = function() {
    
  var mdp = document.getElementById('mdp'),
      mdp_confirm = document.getElementById('mdp_confirm'),
      tooltipStyle = getTooltip(mdp_confirm).style;
    
    if(mdp.value == mdp_confirm.value && mdp_confirm.value != '') {
        mdp_confirm.className = 'correct';
        tooltipStyle.display = 'none';
        return true;
    } else {
        mdp_confirm.className = 'incorrect';
        tooltipStyle.display = 'inline-block';
        return false;
    }  
};

check['country'] = function() {
    
    var country = document.getElementById('country'),
        tooltipStyle = getTooltip(country).style;
    
    if (country.options[country.selectedIndex].value != 'none'){
        tooltipStyle.display = 'none';
        return true;
    } else {
        tooltipStyle.display = 'inline-block';
        return false
    }    
};

// Mise en place des évenements 

    (function() {
        
       var myForm = document.getElementById('myForm'),
           inputs = document.querySelectorAll('input[type=text], input[type=password]'),
           inputsLength = inputs.length;
        
        for (var i = 0; i < inputsLength; i++){
            inputs[i].addEventListener('keyup', function(e) {
                check[e.target.id]; // e.target = inputs en cours de modif
            });
        }
        
        myForm.addEventListener('submit', function(e) {
           var result = true; 
            
            for (var i in check) {
                result = check[i](i) && result;
            }
            
        });
    });


    /*
    var prenom = document.getElementById(id),
        tooltilStyle.display = getTooltip(prenom).style;

    if (prenom.value.length >= 2) {
        prenom.className = 'Correct';
        tooltilStyle.display = 'none';
            return true;
        } else {
            prenom.className = 'incorrect';
            tooltilStyle.display = 'inline-block';
            return false;
        }/*
    
}