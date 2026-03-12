# Quote of the Day API – TP DevOps

Petite API REST qui fournit des citations inspirantes, drôles et liées au développement (programming quotes).

## Fonctionnalités
- Liste de citations prédéfinies (dev, motivation, fun)
- Endpoints :
  - `GET /quotes` → Toutes les citations
  - `GET /quotes/random` → Citation aléatoire
  - `GET /quotes/category/:category` → Par catégorie (ex: dev, fun, motivation)
  - `POST /quotes` → Ajouter une citation (body JSON : { "text": "...", "author": "...", "category": "..." })

## Lancer localement (sans Docker)
```bash
npm install
node index.js
# → http://localhost:3000/quotes/random
