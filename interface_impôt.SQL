CREATE TABLE Contribuable (
    ContribuableID INT PRIMARY KEY AUTO_INCREMENT,  -- Clé primaire auto-incrémentée
    NuméroFiscale VARCHAR(20) UNIQUE NOT NULL,       -- Numéro fiscal unique et obligatoire
    Nom VARCHAR(100) NOT NULL,                       -- Nom obligatoire
    Prénom VARCHAR(100) NOT NULL,                    -- Prénom obligatoire
    Sexe CHAR(1) CHECK (Sexe IN ('M', 'F')),         -- Sexe (M ou F)
    DateNaissance DATE NOT NULL                      -- Date de naissance obligatoire
);

CREATE TABLE Contact (
    ContactID INT PRIMARY KEY AUTO_INCREMENT,
    ContribuableID INT,
    Adresse VARCHAR(255),
    Tel VARCHAR(20),
    Email VARCHAR(100),
    FOREIGN KEY (ContribuableID) REFERENCES Contribuable(ContribuableID)
);

CREATE TABLE Adresse (
    AdresseID INT PRIMARY KEY AUTO_INCREMENT,
    ContactID INT,
    NuméroRue VARCHAR(50),
    Ville VARCHAR(100),
    CodePostal VARCHAR(20),
    Pays VARCHAR(50),
    FOREIGN KEY (ContactID) REFERENCES Contact(ContactID)
);
CREATE TABLE CalculImpot (
    ImpotID INT PRIMARY KEY AUTO_INCREMENT,
    ContribuableID INT,
    RessourcesBrut DECIMAL(15, 2),
    StatutMarital ENUM('Célibataire', 'Marié', 'Divorcé', 'Veuf'),
    NombreEnfants INT,
    MontantImpot DECIMAL(15, 2),
    DateCalcul DATE,
    FOREIGN KEY (ContribuableID) REFERENCES Contribuable(ContribuableID)
);

CREATE TABLE Bastion (
    BastionID INT PRIMARY KEY AUTO_INCREMENT,
    ContribuableID INT,
    PWD VARCHAR(255),
    ConfirmationPWD VARCHAR(255),
    DateValidation DATE,
    FOREIGN KEY (ContribuableID) REFERENCES Contribuable(ContribuableID)
);



DELIMITER $$


-- Procédure pour changer le nom dans Contribuable
CREATE PROCEDURE changerNom(IN p_ContribuableID INT, IN p_NouveauNom VARCHAR(100))
BEGIN
    UPDATE Contribuable
    SET Nom = p_NouveauNom
    WHERE ContribuableID = p_ContribuableID;
END $$

-- Procédure pour changer le prénom dans Contribuable
CREATE PROCEDURE changerPrénom(IN p_ContribuableID INT, IN p_NouveauPrénom VARCHAR(100))
BEGIN
    UPDATE Contribuable
    SET Prénom = p_NouveauPrénom
    WHERE ContribuableID = p_ContribuableID;
END $$


CREATE PROCEDURE changerTel(IN p_ContactID INT, IN p_NouveauTel VARCHAR(20))
BEGIN
    UPDATE Contact
    SET Tel = p_NouveauTel
    WHERE ContactID = p_ContactID;
END $$

CREATE PROCEDURE changerEmail(IN p_ContactID INT, IN p_NouveauEmail VARCHAR(100))
BEGIN
    UPDATE Contact
    SET Email = p_NouveauEmail
    WHERE ContactID = p_ContactID;
END $$



CREATE PROCEDURE changerNuméroRue(IN p_AdresseID INT, IN p_NouveauNuméroRue VARCHAR(50))
BEGIN
    UPDATE Adresse
    SET NuméroRue = p_NouveauNuméroRue
    WHERE AdresseID = p_AdresseID;
END $$

CREATE PROCEDURE changerVille(IN p_AdresseID INT, IN p_NouvelleVille VARCHAR(100))
BEGIN
    UPDATE Adresse
    SET Ville = p_NouvelleVille
    WHERE AdresseID = p_AdresseID;
END $$

CREATE PROCEDURE changerCodePostal(IN p_AdresseID INT, IN p_NouveauCodePostal VARCHAR(20))
BEGIN
    UPDATE Adresse
    SET CodePostal = p_NouveauCodePostal
    WHERE AdresseID = p_AdresseID;
END $$

CREATE PROCEDURE changerPays(IN p_AdresseID INT, IN p_NouveauPays VARCHAR(50))
BEGIN
    UPDATE Adresse
    SET Pays = p_NouveauPays
    WHERE AdresseID = p_AdresseID;
END $$




- Procédure pour changer le mot de passe dans Bastion
CREATE PROCEDURE changerPWD(IN p_ContribuableID INT, IN p_NouveauPWD VARCHAR(255))
BEGIN
    UPDATE Bastion
    SET PWD = p_NouveauPWD, ConfirmationPWD = p_NouveauPWD, DateValidation = NOW()
    WHERE ContribuableID = p_ContribuableID;
END $$




-- Procédure pour calculer l'impôt et enregistrer le résultat
CREATE PROCEDURE calculerImpot(
    IN p_ContribuableID INT,
    IN p_RessourcesBrut DECIMAL(15, 2),
    IN p_StatutMarital ENUM('Célibataire', 'Marié', 'Divorcé', 'Veuf'),
    IN p_NombreEnfants INT
)
BEGIN
    DECLARE v_MontantImpot DECIMAL(15, 2);
    
    -- Exemple de logique de calcul de l'impôt
    SET v_MontantImpot = p_RessourcesBrut * 0.2;  -- Impôt de base à 20% des ressources brutes
    
    IF p_StatutMarital = 'Marié' THEN
        SET v_MontantImpot = v_MontantImpot * 0.9;  -- Réduction pour les mariés
    END IF;
    
    SET v_MontantImpot = v_MontantImpot - (p_NombreEnfants * 500);  -- Réduction pour chaque enfant
    
    -- Enregistrement du calcul dans la table Impot
    INSERT INTO Impot (ContribuableID, RessourcesBrut, StatutMarital, NombreEnfants, MontantImpot, DateCalcul)
    VALUES (p_ContribuableID, p_RessourcesBrut, p_StatutMarital, p_NombreEnfants, v_MontantImpot, NOW());
END $$

DELIMITER ;
