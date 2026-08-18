# 🎯 Cricket Fléchettes — MVP

> Remplace le papier-crayon pour scorer une partie de cricket fléchettes.

## Stack
- PWA pure (HTML / CSS / JS vanilla) — zéro dépendance
- Web Speech API pour la saisie vocale (FR uniquement pour l'instant)
- Stockage : localStorage (profils, stats, journal vocal)
- Hébergement : GitHub Pages

## Structure du projet

```
/
├── index.html       # Application complète (SPA)
├── manifest.json    # Déclaration PWA (icône, couleurs, mode standalone)
├── sw.js            # Service Worker — cache offline
├── icons/
│   ├── icon-192.png # Icône PWA (à générer)
│   └── icon-512.png # Icône PWA haute résolution (à générer)
└── README.md
```

## Fonctionnalités MVP

- 2 à 4 joueurs (saisie du prénom uniquement)
- Cricket standard : cases 15 à 20 + Bull
- Saisie vocale : annonce de la volée entière ("double 20, un 17, rien")
- Saisie manuelle : tapotage sur la cible ou les boutons
- Grille fidèle au papier : `╱` → `✕` → `⊗` (fermée)
- Annulation du dernier lancer
- Calcul du score en temps réel
- Écran de résultat avec revanche

## Déploiement GitHub Pages

1. Pousser le code sur `main`
2. `Settings → Pages → Source : main / root`
3. L'app est accessible sur `https://<ton-pseudo>.github.io/<repo>/`

> ⚠️ La reconnaissance vocale nécessite HTTPS — GitHub Pages le fournit nativement.

## Icônes (à générer)

Utiliser [favicon.io](https://favicon.io) ou [realfavicongenerator.net](https://realfavicongenerator.net) avec l'emoji 🎯, exporter en 192×192 et 512×512, placer dans `/icons/`.

## Roadmap (post-MVP)

- [ ] Profils joueurs + historique (localStorage)
- [ ] Statistiques avancées (taux de fermeture, moyenne/volée)
- [ ] Variantes cut-throat
- [ ] Animations sur les actions clés
- [ ] Mode multijoueur réseau (WebSocket)

## Contribuer — ajouter le support de la reconnaissance vocale en anglais

Le parser vocal (fonction `processVoice` dans `index.html`) ne comprend que le
français : les alias de nombres, multiplicateurs ("double", "triple") et
variantes phonétiques du Sud sont codés en dur pour le FR. La reconnaissance
elle-même (`recog.lang`, piloté par `cfg.lang`) peut techniquement écouter
n'importe quelle langue supportée par la Web Speech API, mais rien
aujourd'hui n'interprète une transcription anglaise.

Pour ajouter l'anglais :

1. Repérer `processVoice(raw)` dans `index.html` et la table d'alias qu'elle
   utilise pour convertir le texte transcrit en coups (nombre + multiplicateur).
2. Construire l'équivalent anglais de cette table (ex : "double twenty",
   "treble" ou "triple", "miss"/"nothing" pour une volée vierge...).
3. Utiliser le **journal vocal** intégré à l'app (icône journal pendant une
   partie → export JSON) pour collecter de vraies transcriptions ratées en
   conditions réelles : chaque entrée contient le texte brut reconnu, le
   résultat interprété et un statut `ok` / `partial` / `fail`. C'est la
   meilleure source pour calibrer les alias sur de la prononciation réelle
   plutôt que des cas théoriques.
4. Réintroduire un sélecteur de langue (retiré en v10 car non fonctionnel)
   une fois qu'un vrai parser EN existe, en repassant `cfg.lang` à `'en-US'`.

Une PR avec quelques logs JSON réels à l'appui est plus utile qu'une
implémentation sans exemples de terrain.
