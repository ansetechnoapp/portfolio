import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderComponent, d as renderTemplate } from './astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$ThemeToggle } from './Layout_B_Ak2Euc.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import { RiHome5Line, RiToolsFill, RiUser3Line, RiCodeSSlashLine, RiBriefcase2Line, RiMailLine } from 'react-icons/ri';
/* empty css                         */

const MenuLinks = ({ namepage, pathname }) => {
  const getIconLinks = () => {
    let iconLinks = [];
    if (namepage === "home") {
      iconLinks = [
        {
          icon: /* @__PURE__ */ jsx(RiHome5Line, { size: 20 }),
          href: "#hero_home",
          label: "Accueil"
        },
        {
          icon: /* @__PURE__ */ jsx(RiToolsFill, { size: 20 }),
          href: "#skills",
          label: "Compétences"
        },
        {
          icon: /* @__PURE__ */ jsx(RiUser3Line, { size: 20 }),
          href: "#about",
          label: "À propos"
        },
        {
          icon: /* @__PURE__ */ jsx(RiCodeSSlashLine, { size: 20 }),
          href: "#service",
          label: "Services"
        },
        {
          icon: /* @__PURE__ */ jsx(RiBriefcase2Line, { size: 20 }),
          href: "#work",
          label: "Travaux"
        },
        {
          icon: /* @__PURE__ */ jsx(RiMailLine, { size: 20 }),
          href: "#contact",
          label: "Contact"
        }
      ];
    } else if (namepage === "about") {
      iconLinks = [
        {
          icon: /* @__PURE__ */ jsx(RiUser3Line, { size: 20 }),
          href: "#about",
          label: "À propos"
        }
      ];
    } else if (namepage === "work") {
      iconLinks = [
        {
          icon: /* @__PURE__ */ jsx(RiBriefcase2Line, { size: 20 }),
          href: "#work",
          label: "Travaux"
        }
      ];
    } else if (namepage === "widgets") {
      iconLinks = [
        {
          icon: /* @__PURE__ */ jsx(RiCodeSSlashLine, { size: 20 }),
          href: "/docs/",
          label: "Documentation"
        }
      ];
    }
    return iconLinks;
  };
  return /* @__PURE__ */ jsx("ul", { className: "menu-links-container", children: getIconLinks().map(({ href, icon, label }) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
    "a",
    {
      "aria-current": pathname === href,
      href,
      className: `menu-link-item ${pathname === href ? "active" : ""}`,
      title: label,
      children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: label }),
        icon
      ]
    }
  ) }, href)) });
};

const $$Astro = createAstro("https://zoddev.site/");
const $$MenuLinkNav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MenuLinkNav;
  const { namepage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="menu-link-nav" data-astro-cid-hk3zn5ek> ${renderComponent($$result, "MenuLinks", MenuLinks, { "client:load": true, "namepage": namepage, "pathname": Astro2.url.pathname, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/MenuLinks", "client:component-export": "default", "data-astro-cid-hk3zn5ek": true })} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "togglelightdarktheme": "toggleside", "toggleiconelightdarktheme": "lighty", "data-astro-cid-hk3zn5ek": true })} </div> `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/menuLinkNav.astro", void 0);

export { $$MenuLinkNav as $ };
