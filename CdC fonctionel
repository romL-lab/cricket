# Cahier des Charges Fonctionnel
## Application Mobile PWA — Suivi de partie Cricket Fléchettes
**Version** : 1.0 — Document de référence  
**Date** : Avril 2026  
**Statut** : À valider

---

## 1. Contexte & Objectifs

### 1.1 Contexte
Développement d'une Progressive Web App (PWA) permettant de scorer une partie de cricket fléchettes en temps réel, utilisable directement depuis le navigateur mobile sans installation native.

### 1.2 Objectifs principaux
- Offrir une saisie de score fluide : tapotage sur cible interactive **ou** annonce vocale
- Gérer des profils joueurs persistants avec statistiques avancées
- Fonctionner hors connexion (mode offline obligatoire via Service Worker)
- Être installable sur l'écran d'accueil (manifest PWA)

---

## 2. Périmètre fonctionnel

### 2.1 Ce qui est inclus (v1.0)
- Mode de jeu : Cricket standard (cases 15, 16, 17, 18, 19, 20, Bull)
- Nombre de joueurs : 2 à N (configurable à la création de partie)
- Saisie par tapotage (cible interactive) et/ou reconnaissance vocale (FR + EN)
- Correction d'un lancer : bouton annuler **et** commande vocale « annuler »
- Validation de volée : manuelle (bouton) ou automatique après 3 fléchettes (préférence utilisateur)
- Profils joueurs avec historique et statistiques avancées
- Jeu en local uniquement (même appareil)

### 2.2 Ce qui est exclu (hors scope v1.0)
- Multijoueur réseau (LAN ou en ligne)
- Autres variantes de cricket (cut-throat, etc.)
- Classement global / leaderboard en ligne
- Monétisation

---

## 3. Description des fonctionnalités

### 3.1 Gestion des profils joueurs

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| P-01 | Créer un profil avec pseudo et avatar | MUST |
| P-02 | Consulter l'historique des parties jouées | MUST |
| P-03 | Afficher les statistiques avancées par profil | MUST |
| P-04 | Modifier ou supprimer un profil | SHOULD |

**Statistiques avancées calculées :**
- Nombre de parties jouées / gagnées
- Taux de fermeture par case (15 à 20, Bull)
- Moyenne de points marqués par volée
- Meilleure volée (single / double / triple combinés)
- Série de victoires consécutives

---

### 3.2 Création de partie

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| C-01 | Sélectionner les joueurs parmi les profils existants | MUST |
| C-02 | Ajouter un joueur invité (sans profil) | SHOULD |
| C-03 | Définir l'ordre de passage (drag & drop ou aléatoire) | MUST |
| C-04 | Choisir le mode de validation : manuel ou automatique | MUST |
| C-05 | Choisir la langue de reconnaissance vocale (FR / EN) | MUST |

---

### 3.3 Écran de jeu — Saisie par tapotage

L'écran principal affiche une **cible de fléchettes interactive** :

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| T-01 | Afficher la cible avec zones cliquables : simple, double, triple pour chaque case + bull / double bull | MUST |
| T-02 | Mettre en évidence les cases encore ouvertes vs fermées (par joueur) | MUST |
| T-03 | Enregistrer chaque tap comme un lancer | MUST |
| T-04 | Afficher un récapitulatif de la volée en cours (lancer 1, 2, 3) | MUST |
| T-05 | Bouton « Annuler dernier lancer » visible en permanence | MUST |
| T-06 | Bouton « Valider la volée » (si mode manuel activé) | MUST |
| T-07 | Passage automatique au joueur suivant après 3 fléchettes (si mode auto) | MUST |

---

### 3.4 Écran de jeu — Saisie vocale

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| V-01 | Activation/désactivation de l'écoute par bouton micro | MUST |
| V-02 | Reconnaissance vocale continue ou à la demande (selon préférence) | SHOULD |
| V-03 | Reconnaissance des annonces en français et en anglais | MUST |
| V-04 | Vocabulaire reconnu : chiffres (15 à 20), « bull », « double », « triple », « simple », « manqué », « annuler » | MUST |
| V-05 | Exemples d'annonces valides : « triple 20 », « double bull », « simple 17 », « manqué », « annuler » | MUST |
| V-06 | Retour visuel et sonore confirmant la reconnaissance | MUST |
| V-07 | Confirmation explicite avant enregistrement si score ambigu | SHOULD |
| V-08 | Fallback vers saisie manuelle si la reconnaissance échoue 2 fois | MUST |

---

### 3.5 Logique de scoring — Règles Cricket Standard

- **Cases jouées** : 15, 16, 17, 18, 19, 20, Bull (bull = 25, double bull = 50)
- **Fermeture d'une case** : atteindre 3 touches (single=1, double=2, triple=3)
- **Marquer des points** : une case fermée par le joueur actif mais encore ouverte chez au moins un adversaire génère des points
- **Victoire** : avoir fermé toutes ses cases ET avoir le score total le plus élevé (ou égalité si scores identiques → premier à fermer gagne)
- **Détection automatique de fin de partie** avec écran de résultat

---

### 3.6 Scoreboard en temps réel

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| S-01 | Afficher pour chaque joueur : cases fermées (✗ ✗✗ ✗✗✗), score total | MUST |
| S-02 | Indiquer clairement le joueur en cours de tour | MUST |
| S-03 | Historique des volées de la partie en cours (déroulable) | SHOULD |
| S-04 | Affichage paysage et portrait optimisés | MUST |

---

### 3.7 Fin de partie

| ID | Fonctionnalité | Priorité |
|----|---------------|----------|
| F-01 | Écran de résultat avec podium et récapitulatif | MUST |
| F-02 | Sauvegarde automatique de la partie dans l'historique des profils | MUST |
| F-03 | Mise à jour des statistiques de chaque joueur profilé | MUST |
| F-04 | Proposer « Revanche » (même joueurs, ordre inversé) ou « Nouvelle partie » | SHOULD |

---

## 4. Exigences techniques

### 4.1 PWA
- **Service Worker** : mise en cache des assets, fonctionnement offline complet
- **Manifest** : icône, nom, couleur de thème, mode `standalone`
- **Installation** : invite « Ajouter à l'écran d'accueil » sur iOS et Android

### 4.2 Reconnaissance vocale
- API Web Speech (SpeechRecognition) — intégrée navigateur
- Fallback : bouton de saisie manuelle si API non supportée
- Langues : `fr-FR` et `en-US` (sélection en début de partie)

### 4.3 Persistance des données
- **LocalStorage / IndexedDB** : stockage local des profils, historiques et préférences
- Pas de backend requis en v1.0
- Export des données (JSON) prévu en v1.1

### 4.4 Compatibilité
- Safari iOS 16+ et Chrome Android 110+
- Taille d'écran cible : 375px à 430px (mobiles courants)
- Support tablette en bonus (non bloquant)

### 4.5 Performance
- Chargement initial < 3s sur 4G
- Score réactif : enregistrement d'un lancer < 100ms
- Animations fluides : 60fps minimum

---

## 5. Parcours utilisateur principal

```
Accueil
  ├─ Gérer les profils (créer / modifier / stats)
  └─ Nouvelle partie
        ├─ Sélection des joueurs + paramètres
        └─ Écran de jeu
              ├─ Tapotage sur cible
              ├─ Saisie vocale
              ├─ Annulation lancer
              ├─ Validation volée
              └─ Fin de partie
                    ├─ Résultat + stats mises à jour
                    ├─ Revanche
                    └─ Accueil
```

---

## 6. Contraintes & Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| API SpeechRecognition non supportée sur certains navigateurs | Moyen | Fallback saisie manuelle systématique |
| Latence reconnaissance vocale en environnement bruyant (salle de jeu) | Élevé | Bouton de confirmation avant validation, sensibilité réglable |
| Perte de données si fermeture accidentelle | Élevé | Sauvegarde automatique de l'état à chaque lancer |
| UX difficile avec de nombreux joueurs sur petit écran | Moyen | Scroll horizontal sur le scoreboard, vue résumée |

---

## 7. Livrables attendus

- [ ] Maquettes (wireframes) écrans principaux
- [ ] Prototype interactif (Figma ou HTML)
- [ ] Application PWA développée et testée
- [ ] Documentation technique (architecture, API utilisées)
- [ ] Guide utilisateur (FR)

---

## 8. Critères d'acceptation (Definition of Done)

Une fonctionnalité est considérée terminée si :
1. Elle fonctionne sur Safari iOS et Chrome Android
2. Elle fonctionne en mode offline
3. Elle est testée avec au moins 2, 3 et 6 joueurs
4. La saisie vocale reconnaît correctement ≥ 90% des annonces dans les deux langues
5. Les statistiques sont correctement mises à jour après chaque partie

---

*Document généré pour validation — à faire évoluer après retour des parties prenantes.*
