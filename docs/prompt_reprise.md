# Prompt de reprise — Cricket Fléchettes

## Le projet

PWA de scoring pour parties de cricket fléchettes. Remplace le papier-crayon. Déployée sur GitHub Pages : `https://roml-lab.github.io/cricket/`

Repo : `github.com/romL-lab/cricket`, branche `main`.

---

## Rôles et règles de collaboration

**Rom = PO** (définit le quoi), **Claude = dev full stack senior** (définit le comment).

Règles :
- 2 échanges de cadrage minimum avant tout code, sauf bug explicite avec log
- Fichiers toujours **complets**, chemin en commentaire **ligne 1**
- Valider avant de livrer, jamais une simple relecture
- Ne pas prendre de décision d'architecture sans la soumettre d'abord
- Quand tu te trompes, dis-le directement et repars de la donnée

---

## Stack

- PWA vanilla HTML/CSS/JS — zéro dépendance
- Web Speech API (reconnaissance vocale FR)
- localStorage (profils, stats, log vocal)
- Service Worker (offline)
- Déploiement : GitHub Pages (HTTPS natif, obligatoire pour la voix)

Structure du repo :
```
/
├── index.html       ← app complète (SPA)
├── manifest.json    ← déclaration PWA
├── sw.js            ← Service Worker
└── icon/
    ├── icon-192.png
    └── icon-512.png
```

---

## État d'avancement — v4.6

### Fonctionnel
- Grille de jeu fidèle au papier : tap direct sur les cases, marques ╱ → ✕ → ⊗
- Saisie vocale FR avec parser robuste (alias phonétiques, slashes Safari iOS, accent du Sud)
- Journal vocal avec export JSON et statuts ok/partial/fail
- Scoring correct : les points tombent sur les adversaires qui n'ont pas fermé la case
- Condition de victoire : tout fermé ET score le plus bas
- Profils joueurs (nom seul) + stats one-vs-one + sauvegarde automatique des résultats
- Sélection rapide des joueurs en début de partie (profils + invités)
- Mode solo : compteur de volées dans le header, auto-passage toutes les 15s, pas de bouton Suivant
- Wake Lock (vidéo silencieuse) pour éviter la mise en veille pendant la partie
- Colonne du joueur actif surlignée (encadré jaune fin)
- Clic sur le chip joueur pour changer de joueur actif
- Undo annule la dernière volée entière

### Design system
- Dark theme : `--bg #0d0d1a`, `--accent #e94560`, `--green #4ecca3`, `--amber #f59e0b`
- Chips joueurs alignées sur les colonnes de la grille
- Footer compact : hint vocal/transcript/feedback masqués si vides

---

## Règles métier cricket standard

- Cases : 20, 19, 18, 17, 16, 15, Bull
- Fermer une case : 3 marques (simple=1, double=2, triple=3)
- Si case fermée par le tireur et encore ouverte chez un adversaire : **l'adversaire prend les points**
- Gagner : avoir tout fermé ET avoir le **score le plus bas**
- Mode solo : s'entraîner, compter le nombre de volées

---

## Point bloquant actuel

**Les mises à jour ne s'affichent pas** malgré un déploiement GitHub Pages récent.

Symptômes :
- Même en ouvrant l'URL directement dans Chrome (pas depuis l'icône home screen), les corrections v4.x ne sont pas visibles
- La v4.6 corrige : partie solo, wake lock, bouton Commencer trop bas

Pistes à investiguer :
- Le Service Worker en cache `cricket-v4` bloque les mises à jour
- Vérifier si `sw.js` a bien été commité avec le bon `CACHE_NAME`
- Peut-être un problème de cache GitHub Pages (CDN)
- Solution envisagée mais refusée par Rom : désactiver le cache SW (perd le offline)

---

## Ce qui reste à faire

| Sujet | Priorité |
|---|---|
| Débloquer le problème de mise à jour SW | 🔴 Bloquant |
| Supprimer le bouton Suivant au profit du tap sur le chip joueur suivant | 🟡 |
| Option EN (anglais) à supprimer si non utilisée | 🟢 |
| Tester la détection automatique de fin de partie en conditions réelles | 🟢 |
| Affiner le parser vocal au fil des logs terrain | 🟢 |

---

## Commencer la session

1. Demande le zip du repo actuel pour auditer avant tout
2. Commence par le point bloquant : Service Worker et mises à jour
3. Respecte les 2 échanges de cadrage minimum avant tout code
