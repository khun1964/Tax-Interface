
/*
function setErrorMsg(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const checkIcon = formControl.querySelector('.fa-check-circle');
    const errorIcon = formControl.querySelector('.fa-exclamation-circle');  

    // Afficher le message d'erreur et l'icône d'erreur
    small.innerText = message;
    small.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';

    // Masquer l'icône de succès
    if (checkIcon) {
        checkIcon.style.visibility = 'hidden';
    }

    formControl.classList.remove('success');
    formControl.classList.add('error');

}
*/

/* 
// SexeValue
    if (SexeValue === '') {
        setErrorMsg(Sexe, 'Case Sexe ne peut pas être vide');
    } 
    else if (SexeValue.length <= 5) {
        setErrorMsg(Sexe, 'Le Sexe doit être égal à 5 caractères');
    }   
    else if (SexeValue !== 'Homme' && SexeValue !== 'Femme' ||  SexeValue !== 'homme' && SexeValue !== 'femme') {  
        setErrorMsg(Sexe, 'Le Sexe doit être Homme ou Femme');
    }
    else {
        setSuccessMsg(Sexe);
    } 

   */ 


/*
function Validate() {
const SuccessMsg = (NomValue) => {
    let formControl = getElementsByClassName('form-control');
    var Count = formControl.length - 1 ;
    for(var i = 0; i < formControl.length; i++) {
        if(formControl[i].className === 'form-control success') {           
        var sRate = 0 + i;
        console.log(sRate);
        }   
        else {
            return false;
        }   
    }
    return true;
}



const isEmail = (EmailValue) => {   
    var atSymbol = EmailValue.indexOf("@");
    if (atSymbol < 1) return false;
    var dot = EmailValue.lastIndexOf('.');
    if (dot <= atSymbol + 2) return false;
    if (dot === EmailValue.length - 1) return false;

    // Utilisation d'une expression régulière pour une vérification plus précise
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(EmailValue);
    
}
*/


/*
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
*/


/*
<!-- Contenu de votre page -->
<script>
    document.body.addEventListener('click', function() {
        console.log("Le body a été cliqué !");
    });
</script>
*/

/*

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

*/

/*/
function setErrorMsg(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const checkIcon = formControl.querySelector('.fa-check-circle');
    const errorIcon = formControl.querySelector('.fa-exclamation-circle');

    // Afficher le message d'erreur et l'icône d'erreur
    small.innerText = message;
    small.style.visibility = 'visible';
    errorIcon.style.visibility = 'visible';

    // Masquer l'icône de succès
    if (checkIcon) {
        checkIcon.style.visibility = 'hidden';
    }

    formControl.classList.remove('success');
    formControl.classList.add('error');
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const checkIcon = formControl.querySelector('.fa-check-circle');
    const errorIcon = formControl.querySelector('.fa-exclamation-circle');

    // Cacher le message d'erreur et l'icône d'erreur
    small.style.visibility = 'hidden';
    errorIcon.style.visibility = 'hidden';

    // Afficher l'icône de succès
    checkIcon.style.visibility = 'visible';

    formControl.classList.remove('error');
    formControl.classList.add('success');
}

*/

/*
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
*/


/*
<!-- Code injected by live-server -->

        <script src="D%C3%A9claration%20des%20revenus%20et%20du%20statut%20du%20foyer%20d%C3%A9clarant_fichiers/index.js" defer="defer"></script>  
       
*/