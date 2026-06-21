# portfolio-astro

Un portfolio moderne construit avec Astro, featuring un système d'optimisation d'images automatique et performant.

## ✨ Fonctionnalités

- 🖼️ **Optimisation d'images automatique** lors du build
- 📱 **Images responsives** générées automatiquement
- 🎨 **Formats modernes** (WebP, AVIF) avec fallbacks
- ⚡ **Performance optimisée** pour Core Web Vitals
- 🚀 **Déploiement Vercel** compatible
- 🎯 **SEO optimisé** avec métadonnées automatiques

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🚀 Quick Start

1. **Clone et installation :**
   ```bash
   git clone <repository-url>
   cd portfolio
   pnpm install
   ```

2. **Développement :**
   ```bash
   pnpm dev
   ```
   Ouvre `http://localhost:4321`

3. **Build et déploiement :**
   ```bash
   pnpm build  # Optimise automatiquement les images
   ```

## 🖼️ Optimisation d'Images Automatique

### ✅ Fonctionnalités
- **Optimisation automatique** lors du build
- **Formats modernes** (WebP, AVIF) avec fallbacks
- **Images responsives** (320w, 480w, 640w, 1024w, 1440w)
- **Performance optimisée** pour Core Web Vitals

### 🎯 Utilisation Simple
```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage
  src="/assets/mon-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### 📖 Documentation Complète
- **[Guide d'Optimisation d'Images](docs/IMAGE_OPTIMIZATION_GUIDE.md)**
- **[Page de Démonstration](/demo-images)** - Voir les exemples en action

## 🧞 Commandes Disponibles

| Commande                  | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installe les dépendances                        |
| `pnpm dev`                | Démarre le serveur de développement             |
| `pnpm build`              | Build + optimisation automatique des images     |
| `pnpm build:only`         | Build sans optimisation d'images                |
| `pnpm preview`            | Prévisualise le build localement                |
| `pnpm optimize-images`    | Optimise manuellement les nouvelles images      |
| `pnpm cleanup-images`     | Organise les images existantes                  |
| `pnpm setup-images`       | Nettoyage + optimisation complète               |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
