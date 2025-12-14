La Grande Soirée Gnawa - Application Mobile & API Backend

📖 Contexte du Projet

Vous venez d’être embauché par le comité d'organisation de "La Grande Soirée Gnawa" à agadir pour développer une application mobile et une API backend afin de gérer cet événement culturel.

La soirée met en avant :

Plusieurs artistes Gnawa de renommée nationale

Un programme varié réparti sur une soirée

Un public nombreux à Agadir

L’objectif est de créer une application mobile simple permettant de gérer les artistes, les réservations, et de partager facilement les informations sur l’événement.

📋 Besoins Fonctionnels
Application Mobile

Affichage des informations de l'événement

Liste des artistes Gnawa participants

Réservation de billets simple

Affichage des réservations personnelles

Deep linking pour partager l’événement ou une réservation

Fonctionnement offline minimal (cache des données)

Backend API REST

Gestion des artistes

Gestion des réservations

Authentification JWT et sécurité avec Bcrypt (optionnel pour admin)

Hébergement sur PostgreSQL avec Sequelize ORM

🎯 Objectifs de la Mission

Développer une application mobile React Native (Expo)

Créer une API REST Node.js/Express avec Sequelize et PostgreSQL

Gérer l’état global avec Zustand

Utiliser React Query pour le fetching et le cache

Persistance locale avec AsyncStorage

Implémenter le deep linking pour le partage

🗄️ Base de Données

3 tables PostgreSQL uniquement :

artists – informations sur les artistes

bookings – réservations des spectateurs

event_info – informations générales sur l’événement

📡 Endpoints API
Event (Public)

GET /api/event – Informations de l'événement

Artists (Public)

GET /api/artists – Liste de tous les artistes

GET /api/artists/:id – Détails d’un artiste

Bookings

GET /api/bookings/code/:code – Réservation par code de confirmation

GET /api/bookings/email/:email – Réservations par email

POST /api/bookings – Créer une réservation

Admin (Protégé par JWT, optionnel)

POST /api/auth/login – Connexion admin

POST /api/artists – Créer un artiste

PUT /api/artists/:id – Modifier un artiste

DELETE /api/artists/:id – Supprimer un artiste

🔒 Ces routes sont protégées par JWT si le temps le permet

🛠️ Tech Stack
Backend

Node.js + Express.js

PostgreSQL + Sequelize ORM

JWT (auth admin, optionnel)

Bcrypt (optionnel pour sécuriser les mots de passe)

Dotenv + CORS

Frontend Mobile

React Native (Expo)

Zustand (gestion d’état)

React Query (fetching et cache)

AsyncStorage (persistance locale)

React Navigation + Deep Linking

Outils

Git + GitHub

Postman pour tester l’API

📱 Écrans de l’Application

Home – Informations générales + bannière

Artists List – Liste des artistes avec photos

Artist Detail – Détails d’un artiste + programme

Booking Form – Formulaire de réservation

My Bookings – Liste des réservations personnelles

🚀 Installation & Démarrage
Backend
cd backend
npm install

# Configurer les variables : DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT

npm run dev

Frontend
cd frontend
npm install
npx expo start
