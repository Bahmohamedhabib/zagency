# Kouassi Campus & Visa - Website

Site web complet réalisé avec Next.js 14, Tailwind CSS et TypeScript pour une agence d'accompagnement étudiant (Campus France / Visa).

## 🚀 Démarrage Rapide

1.  **Installation des dépendances**
    ```bash
    npm install
    ```

2.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    Ouvrez [http://localhost:3000](http://localhost:3000) pour voir le site.

## 📁 Structure du Projet

- `app/` : Pages du site (App Router)
- `components/` : Composants Réutilisables (Navbar, Footer, UI)
- `config/` : Configuration globale (textes, prix, contact)
- `public/images/` : Images et assets

## 🛠 Configuration

Pour modifier les informations principales (numéro téléphone, prix, email), éditez simplement le fichier :
`src/config/site.ts` (ou `config/site.ts` selon votre structure)

## 📦 Déploiement

Le site est optimisé pour être déployé sur **Vercel** ou **Netlify**.

### Déploiement sur Vercel (Recommandé)
1. Poussez votre code sur GitHub.
2. Créez un compte sur [Vercel.com](https://vercel.com).
3. Importez votre projet GitHub.
4. Cliquez sur "Deploy". Vercel détectera automatiquement Next.js.

### Variables d'environnement
Aucune variable d'environnement complexe n'est requise pour la version de base.
Si vous implémentez l'envoi d'email réel via API, ajoutez vos clés API dans `.env.local`.

## 🎨 Crédits Images
Toutes les images sont générées par IA ou libres de droits pour cet usage de démonstration.

---
*Service d'accompagnement indépendant non affilié à Campus France.*
