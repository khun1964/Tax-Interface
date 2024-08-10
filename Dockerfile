# Étape 1: Utiliser une image Python officielle comme image de base
FROM python:3.10-slim

# Étape 2: Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Étape 3: Copier les fichiers de dépendances
COPY requirements.txt .

# Étape 4: Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Étape 5: Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Étape 6: Exposer le port que Flask utilisera
EXPOSE 5000

# Étape 7: Définir la variable d'environnement pour Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Étape 8: Définir la commande pour démarrer l'application
CMD ["flask", "run"]


