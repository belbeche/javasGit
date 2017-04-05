<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8"/>
    <title> Page </title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="css/styles1.css"/>
</head>


<body>
    <div>
        <h1>Inscription JavaScript</h1>
    </div>
    
    <div>
        <article>
            <img src="https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/Alternative1.png">
        </article>
    </div>
    
    <article class="validation">
        <div class="formulaire"> 
            <form id="myForm">
                <div>Formulaire d'inscription</div>
                <label>Sexe : </label>
                    <label><span class="form_col">Homme</span></label>
                        <input name="sex" type="radio" value="H"/>
                    <label><span>Femme</span></label>
                        <input name="sex" type="radio" value="F"/>
                    <label>
                        <span class="tooltip"> Veuillez séléctionnez votre sexe</span>
                    </label><br/>
                    <label class="form_col" for="user">User:</label>
                        <input name="user" id="user" type="text" placeholder="Nom user please"/>
                        <label><span class="tooltip"> 4 caractères minimums</span></label>
                    <label class="form_col" for="mail">Prénom:</label>
                        <input name="prenom" type="text" placeholder="Votre prenom" />
                        <label><span class="tooltip"> 4 caractère minimums </span></label>
                    <label class="form_col" for="age">Âge :</label>
                        <input name="age" id="age" type="text" placeholder="Votre âge"/>
                        <label><span class="tooltip">Entre 5 et 160</span></label>
                    <label class="form_col" for="mdp">Mot de passe:</label>
                        <input name="mdp" id="mdp" type="password" placeholder="Votre mot de passe"/>
                            <span class="tooltip"> Le mot de passe doit pas faire moins de 6 caractère</span>
                    <label class="form_col" for="mdp_confirm"><span>Confirmation mdp:</span></label>
                        <input name="mdp_confirm" id="mdp_confirm" type="password" placeholder="Identique au mot de passe"/>
                        <span class="tooltip"> Le mot de passe de confirmation doit être identique à celui d'origine</span><br/>
                    <label class="form_col" for="country">Pays</label>
                        <select name="country" id="country">
                            <option value="none">...</option>
                            <option value="en">Angleterre</option>
                            <option value="us">États-Unis</option>
                            <option value="fr">France</option>
                        </select>
                            <span class="tooltip"> 1 case dois être cocher</span>
                    <br/>
                <span class="form_col"></span>
                    <label><input name="news" type="checkbox"/>Je désire recevoir la newsletter chaque mois.</label>
                    <span class="form_col"></span>
                <span><input type="submit" value="Inscription"/></span>
                <span><input type="reset" value="Réinitialiser les champs"/></span>
            </form>
        </div>
    </article>


    <!--<script src="js/chap_3.js"></script>-->
    
    <footer> @walid Belbeche </footer>
    
</body>
    
</html>
