
        // Classe JavaScript pour calculer les impôts
class TaxCalculator {
    constructor(income, isCouple = false, children = 0) {
        this.income = income; // Revenu de l'utilisateur
        this.isCouple = isCouple; // Statut marital (couple ou non)
        this.children = children; // Nombre d'enfants
        this.taxRate = this.determineTaxRate(); // Calcul du taux d'imposition
        this.taxDue = this.calculateTax(); // Calcul de l'impôt
    }

    // Déterminer le taux d'imposition en fonction du statut familial et du nombre d'enfants
    determineTaxRate() {
        let taxRate = this.isCouple ? 15 : 20; // 15% si couple, sinon 20%
        taxRate -= this.children; // Réduction d'1% par enfant
        return Math.max(taxRate, 0); // Assurer que le taux ne soit pas négatif
    }

    // Calculer l'impôt dû en fonction des tranches de revenu
    calculateTax() {
        let taxDue;
        if (this.income <= 20000) {
            taxDue = this.income * 0.10; // 10% pour les revenus jusqu'à 20,000€
        } else if (this.income <= 40000) {
            taxDue = 2000 + (this.income - 20000) * 0.15; // 15% pour les revenus entre 20,001€ et 40,000€
        } else {
            taxDue = 5000 + (this.income - 40000) * 0.25; // 25% pour les revenus au-delà de 40,001€
        }
        return taxDue * (this.taxRate / 100); // Appliquer le taux d'imposition
    }

    // Retourner une chaîne de caractères avec les informations sur l'impôt
    displayTaxInformation() {
        return `Revenu: ${this.income} €<br>Couple: ${this.isCouple ? 'Oui' : 'Non'}<br>Nombre d'enfants: ${this.children}<br>Taux d'imposition: ${this.taxRate}%<br>Impôt à payer: ${this.taxDue.toFixed(2)} €`;
    }
}

// Fonction pour gérer le clic sur le bouton de validation et déclencher le calcul de l'impôt
document.getElementById('validerRessources').addEventListener('click', function() {
    // Récupérer les valeurs du formulaire
    let income = parseFloat(document.getElementById('Ressources').value);
    let isCouple = document.getElementById('statut').value === 'couple';
    let children = parseInt(document.getElementById('Enfants').value) || 0;

    // Créer une instance de TaxCalculator avec les valeurs du formulaire
    let calculator = new TaxCalculator(income, isCouple, children);

    // Afficher le résultat dans le div approprié
    document.getElementById('contenuResultat').innerHTML = calculator.displayTaxInformation();
    document.getElementById('resultatImpot').style.display = 'block';
});
