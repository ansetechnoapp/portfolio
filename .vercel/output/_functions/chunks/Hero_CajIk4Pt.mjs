import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://zoddev.site/");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, tagline1, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["hero stack gap-4", align], "class:list")} data-astro-cid-bbe6dxrz> <div class="hero-background container" data-astro-cid-bbe6dxrz> <div class="hero-bg-element hero-bg-element-1" data-astro-cid-bbe6dxrz></div> <div class="hero-bg-element hero-bg-element-2" data-astro-cid-bbe6dxrz></div> <div class="hero-bg-element hero-bg-element-3" data-astro-cid-bbe6dxrz></div> <div class="hero-bg-grid" data-astro-cid-bbe6dxrz></div> </div> <div class="hero-text-container" data-astro-cid-bbe6dxrz> <div class="hero-eyebrow" data-astro-cid-bbe6dxrz>Welcome to my portfolio</div> <h1 class="title" data-astro-cid-bbe6dxrz> <span class="highlight" data-astro-cid-bbe6dxrz>${title}</span> </h1> ${tagline && renderTemplate`<h3 class="tagline" data-astro-cid-bbe6dxrz>${tagline}</h3>`} ${tagline1 && renderTemplate`<p class="tagline1" data-astro-cid-bbe6dxrz>${tagline1}</p>`} </div> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/Hero.astro", void 0);

export { $$Hero as $ };
