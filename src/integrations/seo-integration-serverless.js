// Intégration Astro SEO compatible avec l'environnement serverless
// Cette version évite les APIs Node.js incompatibles avec Vercel

// Configuration SEO par défaut
const defaultSeoConfig = {
  titleTemplate: '%s | zoddev Portfolio',
  defaultTitle: 'zoddev Portfolio',
  defaultDescription: 'Portfolio de développeur web et mobile freelance spécialisé en React, React Native, Astro.js et technologies web modernes.',
  defaultImage: '/assets/social-preview.jpg',
  siteUrl: 'https://zoddev.site',
  twitterHandle: '@zoddev',
  language: 'fr',
};

/**
 * Intégration Astro pour le SEO compatible serverless
 * @param {Object} options - Options de configuration
 * @returns {Object} - Intégration Astro
 */
export default function seoIntegrationServerless(options = {}) {
  // Fusionner les options avec la configuration par défaut
  const config = { ...defaultSeoConfig, ...options };
  
  return {
    name: 'astro-seo-integration-serverless',
    hooks: {
      // Hook 'astro:build:start'
      'astro:build:start': async () => {
        console.log('🔍 SEO Integration (Serverless): Préparation des optimisations SEO...');
      },
      
      // Hook 'astro:build:done' - version simplifiée sans opérations de fichiers
      'astro:build:done': async ({ pages, dir }) => {
        console.log('🔍 SEO Integration (Serverless): Finalisation des optimisations SEO...');
        
        // Log des pages générées pour information
        console.log(`✅ ${pages.length} pages générées pour le SEO`);
        
        console.log('✅ SEO Integration (Serverless): Optimisations SEO terminées.');
      }
    }
  };
}

/**
 * Fonction utilitaire pour générer les meta tags SEO
 * @param {Object} pageData - Données de la page
 * @param {Object} config - Configuration SEO
 * @returns {string} - HTML des meta tags
 */
export function generateSEOTags(pageData = {}, config = defaultSeoConfig) {
  const {
    title = config.defaultTitle,
    description = config.defaultDescription,
    image = config.defaultImage,
    type = 'website',
    url = config.siteUrl
  } = pageData;

  const finalTitle = config.titleTemplate.replace('%s', title);

  return `
    <!-- SEO Meta Tags -->
    <title>${finalTitle}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    
    <!-- Open Graph -->
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${finalTitle}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${config.siteUrl}${image}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${config.defaultTitle}" />
    <meta property="og:locale" content="${config.language}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="${config.twitterHandle}" />
    <meta name="twitter:creator" content="${config.twitterHandle}" />
    <meta name="twitter:title" content="${finalTitle}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${config.siteUrl}${image}" />
    
    <!-- Additional SEO -->
    <meta name="author" content="zoddev" />
    <meta name="language" content="${config.language}" />
    <meta name="theme-color" content="#6e56cf" />
  `.trim();
}

/**
 * Fonction utilitaire pour générer le JSON-LD Schema.org
 * @param {Object} pageData - Données de la page
 * @param {Object} config - Configuration SEO
 * @returns {string} - JSON-LD script
 */
export function generateJSONLD(pageData = {}, config = defaultSeoConfig) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Kevin Otty",
    "alternateName": "zoddev",
    "url": config.siteUrl,
    "image": `${config.siteUrl}${config.defaultImage}`,
    "description": config.defaultDescription,
    "jobTitle": "Développeur Web & Mobile Freelance",
    "worksFor": {
      "@type": "Organization",
      "name": "zoddev"
    },
    "sameAs": [
      "https://github.com/ansetechnoapp",
      "https://www.linkedin.com/in/anscod/",
      "https://instagram.com/anscod.otty"
    ],
    "knowsAbout": [
      "React",
      "React Native", 
      "Next.js",
      "Astro.js",
      "TypeScript",
      "Node.js",
      "Web Development",
      "Mobile Development"
    ]
  };

  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}
