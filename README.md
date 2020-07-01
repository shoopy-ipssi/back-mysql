# back-mysql

Pour exploiter cette API sur votre machine local voici les prérequis:
- NodeJs 14.0.0/NPM 6.14.4
- Nodemon v2.0.3
- un serveur ou faire tourner mysql MariaDB 15.1 (xampp v3.2.4 est recommandé)
- La base de donnée importée

## Initialiser le projet

1. Extraire le fichier sur votre machine

2. Lancer la commande:
> npm install
Cela installera vos dépendances

3. Installez et lancer Xampp

4. initialisez le serveur avec la commande:
> nodemeon

5. En parrallèle dans le dossier **config** dans le fichier `db.config.js` ajouter la configuration de votre serveur mysql

6. pour la création de la base de données ajouter la depuis l'adresse localhost/phpmyadmin
