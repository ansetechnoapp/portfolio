import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderComponent, b as addAttribute, d as renderTemplate } from './astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { $ as $$ThemeToggle } from './Layout_BwB_lZY-.mjs';
/* empty css                         */

const $$Astro = createAstro("https://zoddev.site/");
const $$MenuLinkNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuLinkNav;
  const { namepage } = Astro2.props;
  function test() {
    let iconImgLinks = [];
    if (namepage === "home") {
      iconImgLinks = [
        {
          label: `/assets/icone_optimized/icons8-home-50.png`,
          href: "#hero_home"
        },
        {
          label: `/assets/icone_optimized/icons8-maintenance-50.png`,
          href: "#skills"
        },
        { label: `/assets/icone_optimized/icons8-about.svg`, href: "#about" },
        {
          label: `/assets/icone_optimized/icons8-development-skill-50.png`,
          href: "#service"
        },
        {
          label: `/assets/icone_optimized/icons8-development-service-50.png`,
          href: "#work"
        },
        {
          label: `/assets/icone_optimized/icons8-contact-50.png`,
          href: "#contact"
        }
      ];
    }
    if (namepage === "about") {
      iconImgLinks = [
        { label: `/assets/icone_optimized/icons8-home-50.png`, href: "#about" }
      ];
    }
    if (namepage === "work") {
      iconImgLinks = [
        { label: `/assets/icone_optimized/icons8-home-50.png`, href: "#work" }
      ];
    }
    return iconImgLinks;
  }
  return renderTemplate`${maybeRenderHead()}<div class="menu-link-nav" data-astro-cid-hk3zn5ek> ${test().map(({ href, label }) => renderTemplate`<a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute(href, "href")}${addAttribute([
    "social",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")} data-astro-cid-hk3zn5ek> <span class="sr-only" data-astro-cid-hk3zn5ek>${label}</span> <img width="15" height="15"${addAttribute(label, "src")}${addAttribute(label, "alt")} data-astro-cid-hk3zn5ek> </a>`)} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "togglelightdarktheme": "toggleside", "toggleiconelightdarktheme": "lighty", "data-astro-cid-hk3zn5ek": true })} </div> `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/menuLinkNav.astro", void 0);

export { $$MenuLinkNav as $ };
