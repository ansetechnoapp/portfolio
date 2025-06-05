// Enhanced Sitemap Generator with SEO Optimization
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import chalk from 'chalk';
import { getCollection } from 'astro:content';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Site configuration
const SITE_CONFIG = {
  baseUrl: 'https://zoddev.site',
  defaultChangefreq: 'monthly',
  defaultPriority: '0.5',
  lastmod: new Date().toISOString().split('T')[0], // YYYY-MM-DD format
};

// Page priorities and change frequencies
const PAGE_CONFIG = {
  '/': { priority: '1.0', changefreq: 'weekly' },
  '/work/': { priority: '0.9', changefreq: 'weekly' },
  '/blog/': { priority: '0.8', changefreq: 'weekly' },
  '/services/': { priority: '0.8', changefreq: 'monthly' },
  '/contact/': { priority: '0.7', changefreq: 'monthly' },
  '/about/': { priority: '0.7', changefreq: 'monthly' },
};

// Generate enhanced sitemap
async function generateEnhancedSitemap() {
  console.log(chalk.blue.bold('🗺️  ENHANCED SITEMAP GENERATION'));
  console.log(chalk.blue('Creating comprehensive XML sitemap with SEO optimization'));
  console.log('');

  try {
    const urls = [];
    
    // 1. Add static pages
    await addStaticPages(urls);
    
    // 2. Add dynamic work projects
    await addWorkProjects(urls);
    
    // 3. Add blog posts (if any)
    await addBlogPosts(urls);
    
    // 4. Generate XML sitemap
    const sitemapXML = generateSitemapXML(urls);
    
    // 5. Save sitemap
    await saveSitemap(sitemapXML);
    
    // 6. Generate robots.txt updates
    await updateRobotsTxt();
    
    console.log(chalk.green.bold('✅ Enhanced sitemap generated successfully!'));
    console.log(chalk.blue(`📊 Total URLs: ${urls.length}`));
    
  } catch (error) {
    console.error(chalk.red('Error generating sitemap:'), error);
  }
}

// Add static pages to sitemap
async function addStaticPages(urls) {
  console.log(chalk.yellow('📄 Adding static pages...'));
  
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/work/', priority: '0.9', changefreq: 'weekly' },
    { url: '/services/', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact/', priority: '0.7', changefreq: 'monthly' },
    { url: '/about/', priority: '0.7', changefreq: 'monthly' },
  ];
  
  staticPages.forEach(page => {
    urls.push({
      loc: `${SITE_CONFIG.baseUrl}${page.url}`,
      lastmod: SITE_CONFIG.lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
      alternates: [
        { hreflang: 'fr', href: `${SITE_CONFIG.baseUrl}${page.url}` },
        { hreflang: 'en', href: `${SITE_CONFIG.baseUrl}/en${page.url}` },
      ]
    });
  });
  
  console.log(chalk.green(`✓ Added ${staticPages.length} static pages`));
}

// Add work projects to sitemap
async function addWorkProjects(urls) {
  console.log(chalk.yellow('💼 Adding work projects...'));
  
  try {
    // Read work projects from content directory
    const workDir = path.join(rootDir, 'src/content/work');
    const projectFiles = await glob('**/*.md', { cwd: workDir });
    
    for (const file of projectFiles) {
      const slug = file.replace(/\.md$/, '').replace(/\\/g, '/');
      const projectUrl = `/work/${slug}/`;
      
      // Read file to get publish date
      const filePath = path.join(workDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      let publishDate = SITE_CONFIG.lastmod;
      if (frontmatterMatch) {
        const publishDateMatch = frontmatterMatch[1].match(/publishDate:\s*(.+)/);
        if (publishDateMatch) {
          publishDate = new Date(publishDateMatch[1]).toISOString().split('T')[0];
        }
      }
      
      urls.push({
        loc: `${SITE_CONFIG.baseUrl}${projectUrl}`,
        lastmod: publishDate,
        changefreq: 'monthly',
        priority: '0.8',
        alternates: [
          { hreflang: 'fr', href: `${SITE_CONFIG.baseUrl}${projectUrl}` },
          { hreflang: 'en', href: `${SITE_CONFIG.baseUrl}/en${projectUrl}` },
        ]
      });
    }
    
    console.log(chalk.green(`✓ Added ${projectFiles.length} work projects`));
  } catch (error) {
    console.warn(chalk.yellow('⚠️  Could not read work projects:', error.message));
  }
}

// Add blog posts to sitemap
async function addBlogPosts(urls) {
  console.log(chalk.yellow('📝 Adding blog posts...'));
  
  try {
    const blogDir = path.join(rootDir, 'src/content/blog');
    
    // Check if blog directory exists
    try {
      await fs.access(blogDir);
    } catch {
      console.log(chalk.gray('ℹ️  No blog directory found, skipping blog posts'));
      return;
    }
    
    const blogFiles = await glob('**/*.md', { cwd: blogDir });
    
    for (const file of blogFiles) {
      const slug = file.replace(/\.md$/, '').replace(/\\/g, '/');
      const blogUrl = `/blog/${slug}/`;
      
      // Read file to get publish date
      const filePath = path.join(blogDir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
      
      let publishDate = SITE_CONFIG.lastmod;
      if (frontmatterMatch) {
        const publishDateMatch = frontmatterMatch[1].match(/publishDate:\s*(.+)/);
        if (publishDateMatch) {
          publishDate = new Date(publishDateMatch[1]).toISOString().split('T')[0];
        }
      }
      
      urls.push({
        loc: `${SITE_CONFIG.baseUrl}${blogUrl}`,
        lastmod: publishDate,
        changefreq: 'weekly',
        priority: '0.7',
        alternates: [
          { hreflang: 'fr', href: `${SITE_CONFIG.baseUrl}${blogUrl}` },
          { hreflang: 'en', href: `${SITE_CONFIG.baseUrl}/en${blogUrl}` },
        ]
      });
    }
    
    console.log(chalk.green(`✓ Added ${blogFiles.length} blog posts`));
  } catch (error) {
    console.warn(chalk.yellow('⚠️  Could not read blog posts:', error.message));
  }
}

// Generate XML sitemap content
function generateSitemapXML(urls) {
  console.log(chalk.yellow('🔧 Generating XML sitemap...'));
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';
  
  urls.forEach(url => {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    
    // Add alternate language versions
    if (url.alternates) {
      url.alternates.forEach(alt => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}"/>\n`;
      });
    }
    
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  console.log(chalk.green('✓ XML sitemap generated'));
  return xml;
}

// Save sitemap to public directory
async function saveSitemap(sitemapXML) {
  console.log(chalk.yellow('💾 Saving sitemap...'));
  
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  await fs.writeFile(sitemapPath, sitemapXML, 'utf-8');
  
  console.log(chalk.green(`✓ Sitemap saved to ${sitemapPath}`));
}

// Update robots.txt with sitemap reference
async function updateRobotsTxt() {
  console.log(chalk.yellow('🤖 Updating robots.txt...'));
  
  const robotsPath = path.join(publicDir, 'robots.txt');
  
  try {
    let robotsContent = await fs.readFile(robotsPath, 'utf-8');
    
    // Check if sitemap is already referenced
    if (!robotsContent.includes('Sitemap:')) {
      robotsContent += `\n# Sitemap\nSitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml\n`;
      await fs.writeFile(robotsPath, robotsContent, 'utf-8');
      console.log(chalk.green('✓ Added sitemap reference to robots.txt'));
    } else {
      // Update existing sitemap reference
      robotsContent = robotsContent.replace(
        /Sitemap:\s*.*/g,
        `Sitemap: ${SITE_CONFIG.baseUrl}/sitemap.xml`
      );
      await fs.writeFile(robotsPath, robotsContent, 'utf-8');
      console.log(chalk.green('✓ Updated sitemap reference in robots.txt'));
    }
  } catch (error) {
    console.warn(chalk.yellow('⚠️  Could not update robots.txt:', error.message));
  }
}

// Generate sitemap index for large sites (future-proofing)
async function generateSitemapIndex() {
  console.log(chalk.yellow('📑 Generating sitemap index...'));
  
  const sitemapIndexXML = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_CONFIG.baseUrl}/sitemap.xml</loc>
    <lastmod>${SITE_CONFIG.lastmod}</lastmod>
  </sitemap>
</sitemapindex>`;
  
  const sitemapIndexPath = path.join(publicDir, 'sitemap-index.xml');
  await fs.writeFile(sitemapIndexPath, sitemapIndexXML, 'utf-8');
  
  console.log(chalk.green('✓ Sitemap index generated'));
}

// Run the sitemap generation
generateEnhancedSitemap().catch(error => {
  console.error(chalk.red('Failed to generate sitemap:'), error);
});
