# Ouirani Cars — Site Web de Location de Voitures

Site web moderne pour **Ouirani Cars**, société de location de voitures basée à **Agadir, Maroc**.

## Pages

- **Accueil** — Hero section, statistiques, voitures populaires, avantages, processus, témoignages
- **Nos Voitures** — Catalogue complet avec filtres (catégorie, transmission, tri par prix)
- **Réservation** — Formulaire de réservation en ligne avec récapitulatif de prix
- **Contact** — Formulaire de contact + coordonnées

## Stack Technique

- **Framework** : Next.js 15 (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS
- **Composants UI** : shadcn/ui
- **Icônes** : Lucide React

## Démarrer en local

```bash
npm install
npm run dev
```

Le site sera accessible sur [http://localhost:3456](http://localhost:3456).

## Personnalisation

- **Coordonnées** : Modifier `components/Navbar.tsx` et `components/Footer.tsx`
- **Véhicules** : Modifier `lib/cars.ts`
- **Couleurs** : Orange (#f97316) comme couleur principale — modifiable dans Tailwind
