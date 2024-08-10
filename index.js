/* variables */

const form = document.getElementById('impôtFormulaire');

const Nom = document.getElementById('Nom');
const Prenom = document.getElementById('Prenom');
const Sexe = document.getElementById('Sexe');
const DateNaissance = document.getElementById('DateNaissance');

const Email = document.getElementById('Email');
const Téléphone = document.getElementById('Téléphone');
const Adresse = document.getElementById('Adresse');
const Ville = document.getElementById('Ville');
const CodePostal = document.getElementById('CodePostal');   
const Pays = document.getElementById('Pays');

const Ressources = document.getElementById('Ressources');
const statut =  document.getElementById('statut');
const Enfants = document.getElementById('Enfants');

const Password = document.getElementById('Password');
const ConfirmPassword = document.getElementById('ConfirmPassword');

const submit = document.getElementById('submit');   


form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    Validate()
})

/* Fonction de validation de l'email */

/* forme simpliste */

/*
function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

*/

function isValidEmail(email) {
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    // Vérifie si l'adresse e-mail contient un @ et un .
    return atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1;
}




    // ConfirmPasswordValue
    if (ConfirmPasswordValue === '') {
        setErrorMsg(ConfirmPassword, 'Confirmer le mot de passe ne peut pas être vide');
    } else if (PasswordValue !== ConfirmPasswordValue) {
        setErrorMsg(ConfirmPassword, 'Les mots de passe ne correspondent pas');
    } else {
        setSuccessMsg(ConfirmPassword);
    }
    setSuccessMsg(NomValue);


/*  Fonctions pour afficher les messages d'erreur et de succès */

function setErrorMsg(input, message) {  
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}


function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function validerNom() {
    var inputAdresse = document.getElementById('Nom');
    var small = document.querySelector('.form-control small');

    if (inputAdresse.value === "") {
        // Affiche le message d'erreur si l'adresse n'est pas remplie
        small.style.visibility = 'visible';
        small.textContent = 'Veuillez entrer un Nom valide.';
    } else {
        // Cache le message d'erreur si l'adresse est remplie
        small.style.visibility = 'hidden';
    }
}




function validerAdresse() {
    var inputAdresse = document.getElementById('Adresse');
    var small = document.querySelector('.form-control small');

    if (inputAdresse.value === "") {
        // Affiche le message d'erreur si l'adresse n'est pas remplie
        small.style.visibility = 'visible';
        small.textContent = 'Veuillez entrer une adresse valide.';
    } else {
        // Cache le message d'erreur si l'adresse est remplie
        small.style.visibility = 'hidden';
    }
}

/* Fonction pour valider le mot de passe */

function isValidPassword(password) {
    // Cette regex vérifie que le mot de passe a au moins 8 caractères et contient au moins un chiffre, une lettre minuscule,
    // une lettre majuscule et un caractère spécial parmi [@#$%].
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,}$/.test(password);
}



/* Fonction reset   Validation */

function resetValidationStates() {
    document.querySelectorAll('.form-control').forEach(formControl => {
        formControl.classList.remove('error');
        formControl.classList.remove('success');
    });
}



 /* Fonction pour reset le formulaire */

function resetForm() {
    // Réinitialiser les champs
    form.reset();

    // Exemple de réinitialisation des messages d'erreur
    document.querySelectorAll('.form-control small').forEach(small => {
        small.style.visibility = 'hidden';
    });

    // Autres réinitialisations spécifiques si nécessaire
    console.log("Formulaire réinitialisé");
}



/*fonctions de validation*/

function Validate() {
    resetValidationStates();  // Appel cette fonction au début de Validate()
    // Votre logique de validation existante ici

    const NomValue = Nom.value.trim();
    const PrenomValue = Prenom.value.trim();
    const SexeValue = Sexe.value.trim();
    const DateNaissanceValue = DateNaissance.value.trim();

    const EmailValue = Email.value.trim();
    const TéléphoneValue = Téléphone.value.trim();  
    const AdresseValue = Adresse.value.trim();
    const VilleValue = Ville.value.trim();
    const CodePostalValue = CodePostal.value.trim();
    const PaysValue = Pays.value.trim();

    const RessourcesValue = Ressources.value.trim();
    const statutValue = statut.value.trim();
    const EnfantsValue = Enfants.value.trim();

    const PasswordValue = Password.value.trim();
    const ConfirmPasswordValue = ConfirmPassword.value.trim();

   /* Validationv des champs   */

    // NomValue
    if (NomValue === '') {
        setErrorMsg(Nom, 'Nom ne peut pas être vide');
    }
    else if (NomValue.length <= 2) {
        setErrorMsg(Nom, 'Nom doit être supérieur à 2 caractères');
    } else {
        setSuccessMsg(Nom);
    }

    // PrenomValue
    if (PrenomValue === '') {
        setErrorMsg(Prenom, 'Le Prenom ne peut pas être vide');
    }
    else if (PrenomValue.length <= 2) {
        setErrorMsg(Prenom, 'le Prenom doit être supérieur à 2 caractères');
    } else {
        setSuccessMsg(Prenom);
    }

    // SexeValue
    if (SexeValue === '') {
        setErrorMsg(Sexe, 'Case Sexe ne peut pas être vide');
    } 
    else if (SexeValue.length !== 5) {
        setErrorMsg(Sexe, 'Le Sexe doit être égal à 5 caractères');
    }   
    else {
        // Convertit SexeValue en minuscules pour la comparaison
        const normalizedSexe = SexeValue.toLowerCase();
        if (normalizedSexe !== 'homme' && normalizedSexe !== 'femme') {
            setErrorMsg(Sexe, 'Le Sexe doit être Homme ou Femme');
        } else {
        setSuccessMsg(Sexe);
        }
    }
    
    // DateNaissanceValue
    if (DateNaissanceValue === '') {
        setErrorMsg(DateNaissance, 'La Date de Naissance ne peut pas être vide');
    } else {
        setSuccessMsg(DateNaissance);
    }

    // EmailValue
    if (EmailValue === '') {
        setErrorMsg(Email, 'Email ne peut pas être vide');
    } else if (!isValidEmail(EmailValue)) {
        setErrorMsg(Email, 'Email n est pas valide');
    } else {
        setSuccessMsg(Email);
    }

    // TéléphoneValue       
    if (TéléphoneValue === '') {
        setErrorMsg(Téléphone, 'Le Téléphone ne peut pas être vide');
    } else if (TéléphoneValue.length <= 9 && TéléphoneValue.length >=  10) {
        setErrorMsg(Téléphone, 'le Numero de téléphone doit être supérieur ou égal à 10 caractères');
    } else {
        setSuccessMsg(Téléphone);
    }

    // AdresseValue 
    if (AdresseValue === '') {
        setErrorMsg(Adresse, 'L Adresse ne peut pas être vide');
    } else if (AdresseValue.length <= 6) {
            setErrorMsg(Prenom, 'L Adresse doit être supérieur à 6 caractères');    
    } else {
        setSuccessMsg(Adresse);
    }

    // VilleValue
    if (VilleValue === '') {
        setErrorMsg(Ville, 'La Ville ne peut pas être vide');
    } else {
        setSuccessMsg(Ville);
    }

    // CodePostalValue
    if (CodePostalValue === '') {
        setErrorMsg(CodePostal, 'Le Code Postal ne peut pas être vide');
    } 
    else if (CodePostalValue.length <= 5  && CodePostalValue.length > 6) {
        setErrorMsg(CodePostal, 'Le Code postal est constitué de 5 chiffres');
    } else {
        setSuccessMsg(CodePostal);
    }

    // PaysValue
    if (PaysValue === '') {
        setErrorMsg(Pays, 'Le Pays ne peut pas être vide');
    } else {
        setSuccessMsg(Pays);
    }

    // RessourcesValue
    if (RessourcesValue === '') {
        setErrorMsg(Ressources, 'Ressources ne peut pas être vide');
    } else if (RessourcesValue < 0) {
        setErrorMsg(Ressources, 'Les revenus ne peuvent être négatifs');   
    } else {
        setSuccessMsg(Ressources);
    }

    // statutValue
    if (statutValue === '') {
        setErrorMsg(statut, 'Le statut ne peut pas être vide');
    } else {
        setSuccessMsg(statut);
    }

    // EnfantsValue
    if (EnfantsValue === '') {
        setErrorMsg(Enfants, 'Le nombre d enfants ne peut pas être vide');
    } else if (EnfantsValue < 0) {
        setErrorMsg(Enfants, 'Le nombre d enfants ne peut pas être négatif');       
    } else {
        setSuccessMsg(Enfants);
    }

    // PasswordValue
    if (PasswordValue === '') {
        setErrorMsg(Password, 'Le Mot de passe ne peut pas être vide');
    } 
    else if(PasswordValue.length <= 7) {    
        setErrorMsg(Password, 'Le mot de passe doit être supérieur à 7 caractères');
    }
    else if (!isValidPassword(PasswordValue)) {
        setErrorMsg(Password, 'Le mot de passe doit contenir au moins un chiffre, une majuscule, une minuscule et un caractère spécial [@#$%]');
    }
    else {
        setSuccessMsg(Password);
    }
}
