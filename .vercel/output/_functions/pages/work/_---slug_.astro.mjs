/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$ContactCTA } from '../../chunks/ContactCTA_DH4FdnHn.mjs';
import { a as $$Layout, I as Icon } from '../../chunks/Layout_BwB_lZY-.mjs';
import { P as Pill } from '../../chunks/Pill_BMU9NLRa.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const projectMetadata = {
    publishedTime: entry.data.publishDate ? new Date(entry.data.publishDate).toISOString() : (/* @__PURE__ */ new Date()).toISOString(),
    modifiedTime: (/* @__PURE__ */ new Date()).toISOString(),
    // Pas de date de mise à jour dans le schéma
    tags: entry.data.tags || []
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.description, "image": entry.data.img || "/assets/social-preview.jpg", "type": "project", "article": projectMetadata, "data-astro-cid-qwekciqp": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="project-container site-content-spacing" data-astro-cid-qwekciqp> <div class="project-header" data-astro-cid-qwekciqp> <div class="header-content" data-astro-cid-qwekciqp> <a class="back-link" href="/work/" data-astro-cid-qwekciqp>${renderComponent($$result2, "Icon", Icon, { "icon": "arrow-left", "data-astro-cid-qwekciqp": true })} Back to Projects</a> <h1 class="project-title" data-astro-cid-qwekciqp>${entry.data.title}</h1> <p class="project-description" data-astro-cid-qwekciqp>${entry.data.description}</p> <div class="meta-container" data-astro-cid-qwekciqp> <div class="tags-container" data-astro-cid-qwekciqp> <h3 data-astro-cid-qwekciqp>Category</h3> <div class="tags" data-astro-cid-qwekciqp> ${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result2, "Pill", Pill, { "data-astro-cid-qwekciqp": true }, { "default": async ($$result3) => renderTemplate`${t}` })}`)} </div> </div> ${entry.data.tech && renderTemplate`<div class="tech-container" data-astro-cid-qwekciqp> <h3 data-astro-cid-qwekciqp>Technologies</h3> <div class="tech-list" data-astro-cid-qwekciqp> ${entry.data.tech.map((tech) => renderTemplate`${renderComponent($$result2, "Pill", Pill, { "data-astro-cid-qwekciqp": true }, { "default": async ($$result3) => renderTemplate`${tech}` })}`)} </div> </div>`} </div> <div class="cta-buttons" data-astro-cid-qwekciqp> ${entry.data.liveDemo && renderTemplate`<a${addAttribute(entry.data.liveDemo, "href")} class="btn primary" target="_blank" rel="noopener" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Icon", Icon, { "icon": "rocket-launch", "data-astro-cid-qwekciqp": true })} Live Demo
</a>`} ${entry.data.github && renderTemplate`<a${addAttribute(entry.data.github, "href")} class="btn secondary" target="_blank" rel="noopener" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Icon", Icon, { "icon": "github-logo", "data-astro-cid-qwekciqp": true })} View Code
</a>`} </div> </div> </div> <div class="project-showcase" data-astro-cid-qwekciqp> ${entry.data.img && renderTemplate`<div class="main-image" data-astro-cid-qwekciqp> <picture data-astro-cid-qwekciqp>  <source type="image/avif"${addAttribute(`${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.avif")} 1x, ${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.avif")} 640w, ${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.avif")} 1024w`, "srcset")} sizes="(max-width: 768px) 100vw, 1200px" data-astro-cid-qwekciqp>  <source type="image/webp"${addAttribute(`${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.webp")} 1x, ${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.webp")} 640w, ${entry.data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.webp")} 1024w`, "srcset")} sizes="(max-width: 768px) 100vw, 1200px" data-astro-cid-qwekciqp>  <img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-qwekciqp> </picture> </div>`} </div> <div class="project-content" data-astro-cid-qwekciqp> <div class="content-wrapper" data-astro-cid-qwekciqp> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-qwekciqp": true })} </div> ${entry.data.additionalImages && entry.data.additionalImages.length > 0 && renderTemplate`<div class="additional-images" data-astro-cid-qwekciqp> <h2 data-astro-cid-qwekciqp>Project Gallery</h2> <div class="image-grid" data-astro-cid-qwekciqp> ${entry.data.additionalImages.map((img) => renderTemplate`<div class="gallery-image" data-astro-cid-qwekciqp> <picture data-astro-cid-qwekciqp>  <source type="image/avif"${addAttribute(`${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.avif")} 1x, ${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.avif")} 640w, ${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.avif")} 1024w`, "srcset")} sizes="(max-width: 768px) 100vw, 400px" data-astro-cid-qwekciqp>  <source type="image/webp"${addAttribute(`${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.webp")} 1x, ${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.webp")} 640w, ${img.url.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.webp")} 1024w`, "srcset")} sizes="(max-width: 768px) 100vw, 400px" data-astro-cid-qwekciqp>  <img${addAttribute(img.url, "src")}${addAttribute(img.alt || "", "alt")} loading="lazy" decoding="async" data-astro-cid-qwekciqp> </picture> </div>`)} </div> </div>`} </div> <div class="next-section" data-astro-cid-qwekciqp> <h2 data-astro-cid-qwekciqp>Interested in working together?</h2> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-qwekciqp": true })} </div> </div> ` })} `;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/work/[...slug].astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
