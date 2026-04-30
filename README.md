# 🎯 Cricket Fléchettes — MVP

> Remplace le papier-crayon pour scorer une partie de cricket fléchettes.

## Stack
- PWA pure (HTML / CSS / JS vanilla) — zéro dépendance
- Web Speech API pour la saisie vocale (FR + EN)
- Stockage : aucun en v1 (partie en mémoire)
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
