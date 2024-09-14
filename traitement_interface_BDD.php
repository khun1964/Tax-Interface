<?php
// Exemple de traitement en PHP pour stocker les données dans la base de données
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Connexion à la base de données
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    // Vérification des mots de passe
    $pwd = password_hash($data['pwd'], PASSWORD_BCRYPT);


    // Insertion dans la table Impot
    $stmt = $conn->prepare("INSERT INTO Impot (ContribuableID, RessourcesBrut, StatutMarital, NombreEnfants, MontantImpot, DateCalcul) VALUES (?, ?, ?, ?, ?, NOW())");
    $stmt->bind_param("idssi", $contribuableID, $data['ressourcesBrut'], $data['statutMarital'], $data['nombreEnfants'], $data['montantImpot']);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false]);
    }

    $stmt->close();
    $conn->close();
}
?>