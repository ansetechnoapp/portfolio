import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, d as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, F as Fragment, h as renderHead, r as renderSlot } from './astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
/* empty css                         */
/* empty css                          */
import 'clsx';

const iconPaths = {
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`,
  "house-logo": `<path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>`
};

const Icon = ({
  color = "currentcolor",
  gradient,
  icon,
  size
}) => {
  const gradientId = `icon-gradient-${Math.round(Math.random() * 1e13).toString(36)}`;
  const svgStyle = size ? { "--size": size } : {};
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "40",
      height: "40",
      viewBox: "0 0 256 256",
      "aria-hidden": "true",
      stroke: gradient ? `url(#${gradientId})` : color,
      fill: gradient ? `url(#${gradientId})` : color,
      style: svgStyle,
      className: "icon",
      children: [
        /* @__PURE__ */ jsx("g", { dangerouslySetInnerHTML: { __html: iconPaths[icon] } }),
        gradient && /* @__PURE__ */ jsxs(
          "linearGradient",
          {
            id: gradientId,
            x1: "23",
            x2: "235",
            y1: "43",
            y2: "202",
            gradientUnits: "userSpaceOnUse",
            children: [
              /* @__PURE__ */ jsx("stop", { stopColor: "var(--gradient-stop-1)" }),
              /* @__PURE__ */ jsx("stop", { offset: ".5", stopColor: "var(--gradient-stop-2)" }),
              /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "var(--gradient-stop-3)" })
            ]
          }
        )
      ]
    }
  );
};

const $$Astro$5 = createAstro("https://zoddev.site/");
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { togglelightdarktheme, toggleiconelightdarktheme } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "data-astro-cid-x3pjskd3": true }, { "default": () => renderTemplate` ${maybeRenderHead()}<button${addAttribute([
    "",
    {
      toggleside: togglelightdarktheme === "toggleside",
      togglehigh: togglelightdarktheme === "togglehigh"
    }
  ], "class:list")} data-astro-cid-x3pjskd3> <span class="sr-only" data-astro-cid-x3pjskd3>Dark theme</span> <span${addAttribute([
    "icon",
    {
      lightx: toggleiconelightdarktheme === "lightx",
      lighty: toggleiconelightdarktheme === "lighty"
    }
  ], "class:list")} data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", Icon, { "icon": "sun", "data-astro-cid-x3pjskd3": true })}</span> <span class="icon dark" data-astro-cid-x3pjskd3>${renderComponent($$result, "Icon", Icon, { "icon": "moon-stars", "data-astro-cid-x3pjskd3": true })}</span> </button> ` })}  ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/kevin/Allproject/portfolio/src/components/ThemeToggle.astro", void 0);

const $$Astro$4 = createAstro("https://zoddev.site/");
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Project", href: "/work/" },
    // { label: 'My components', href: '/components/' },
    { label: "Blog", href: "/blog/" },
    { label: "Tools", href: "/widgetCss/" },
    { label: "Documentation", href: "/docs/" }
    // { label: 'Cv', href: '/portfolio/Cv/' },
  ];
  const iconLinks = [
    { label: "Twitter", href: "https://x.com/ottianselme", icon: "twitter-logo" },
    // { label: 'Twitch', href: 'https://twitch.tv/me', icon: 'twitch-logo' },
    {
      label: "GitHub",
      href: "https://github.com/ansetechnoapp/",
      icon: "github-logo"
    },
    // { label: 'CodePen', href: 'https://codepen.io/me', icon: 'codepen-logo' },
    // { label: 'dribbble', href: 'https://dribbble.com/me', icon: 'dribbble-logo' },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@zoddev/",
      icon: "youtube-logo"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<nav data-astro-cid-dmqpwcec> <div class="menu-header" data-astro-cid-dmqpwcec> <a href="/" class="site-title" data-astro-cid-dmqpwcec> <!-- Light mode logo with modern image optimization --> <picture class="site-logo light-logo" data-astro-cid-dmqpwcec> <source srcset="/assets/Anscod_logo/Anscod_logo_light_mode_320w.avif 320w,
                  /assets/Anscod_logo/Anscod_logo_light_mode_480w.avif 480w,
                  /assets/Anscod_logo/Anscod_logo_light_mode_optimized.avif 1x" type="image/avif" sizes="(max-width: 768px) 40px, (max-width: 1024px) 44px, 48px" data-astro-cid-dmqpwcec> <source srcset="/assets/Anscod_logo/Anscod_logo_light_mode_320w.webp 320w,
                  /assets/Anscod_logo/Anscod_logo_light_mode_480w.webp 480w,
                  /assets/Anscod_logo/Anscod_logo_light_mode_optimized.webp 1x" type="image/webp" sizes="(max-width: 768px) 40px, (max-width: 1024px) 44px, 48px" data-astro-cid-dmqpwcec> <img src="/assets/Anscod_logo/Anscod_logo_light_mode.png" alt="Anscod Logo - Kevin Otty développeur web et mobile freelance" width="48" height="48" loading="eager" decoding="async" data-astro-cid-dmqpwcec> </picture> <!-- Dark mode logo with modern image optimization --> <picture class="site-logo dark-logo" data-astro-cid-dmqpwcec> <source srcset="/assets/Anscod_logo/Anscod_logo_dark_mode_320w.avif 320w,
                  /assets/Anscod_logo/Anscod_logo_dark_mode_480w.avif 480w,
                  /assets/Anscod_logo/Anscod_logo_dark_mode_optimized.avif 1x" type="image/avif" sizes="(max-width: 768px) 40px, (max-width: 1024px) 44px, 48px" data-astro-cid-dmqpwcec> <source srcset="/assets/Anscod_logo/Anscod_logo_dark_mode_320w.webp 320w,
                  /assets/Anscod_logo/Anscod_logo_dark_mode_480w.webp 480w,
                  /assets/Anscod_logo/Anscod_logo_dark_mode_optimized.webp 1x" type="image/webp" sizes="(max-width: 768px) 40px, (max-width: 1024px) 44px, 48px" data-astro-cid-dmqpwcec> <img src="/assets/Anscod_logo/Anscod_logo_dark_mode.png" alt="Anscod Logo - Kevin Otty développeur web et mobile freelance" width="48" height="48" loading="eager" decoding="async" data-astro-cid-dmqpwcec> </picture> </a> <div class="mobile-only-menu" data-astro-cid-dmqpwcec> ${renderComponent($$result, "menu-button", "menu-button", { "data-astro-cid-dmqpwcec": true }, { "default": () => renderTemplate` <template data-astro-cid-dmqpwcec> <button class="menu-button" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Menu</span> ${renderComponent($$result, "Icon", Icon, { "icon": "list", "data-astro-cid-dmqpwcec": true })} </button> </template> ` })} </div> </div> <!-- Navigation items for desktop --> <div class="desktop-nav" data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> </div> <!-- Theme toggle and social icons for desktop --> <div class="desktop-theme-toggle" data-astro-cid-dmqpwcec> <div class="desktop-socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" target="_blank" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "togglelightdarktheme": "togglehigh", "toggleiconelightdarktheme": "lightx", "data-astro-cid-dmqpwcec": true })} </div> <!-- Fallback for users with JavaScript disabled --> <noscript> <div class="noscript-nav" data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" target="_blank" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> </div> </div> </noscript> <!-- Menu content for mobile with JavaScript enabled --> <div id="menu-content" class="menu-content" data-astro-cid-dmqpwcec> <ul class="nav-items" data-astro-cid-dmqpwcec> ${textLinks.map(({ label, href }) => renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "class:list")}${addAttribute(href, "href")} data-astro-cid-dmqpwcec> ${label} </a> </li>`)} </ul> <div class="menu-footer" data-astro-cid-dmqpwcec> <div class="socials" data-astro-cid-dmqpwcec> ${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social" target="_blank" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>${label}</span> ${renderComponent($$result, "Icon", Icon, { "icon": icon, "data-astro-cid-dmqpwcec": true })} </a>`)} </div> <div class="theme-toggle" data-astro-cid-dmqpwcec> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "togglelightdarktheme": "togglehigh", "toggleiconelightdarktheme": "lightx", "data-astro-cid-dmqpwcec": true })} </div> </div> </div> </nav> ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/components/Nav.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/Nav.astro", void 0);

const $$Astro$3 = createAstro("https://zoddev.site/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <div class="group" data-astro-cid-sz7xmlte> <p class="flex gap-3 md:gap-5 items-center justify-center md:justify-start" data-astro-cid-sz7xmlte> ${renderComponent($$result, "Icon", Icon, { "icon": "rocket-launch", "size": "1.2em", "data-astro-cid-sz7xmlte": true })} Designed & Developed with <a href="https://astro.build/" data-astro-cid-sz7xmlte>Astro</a> </p> </div> <div class="socials" data-astro-cid-sz7xmlte> <a href="https://github.com/ansetechnoapp" class="social-link touch-target" data-astro-cid-sz7xmlte> <i class="fab fa-github" data-astro-cid-sz7xmlte></i> </a> <a href="https://linkedin.com/in/zoddev" class="social-link touch-target" data-astro-cid-sz7xmlte> <i class="fab fa-linkedin-in" data-astro-cid-sz7xmlte></i> </a> <a href="https://pinterest.com/zoddevdesign" class="social-link touch-target" data-astro-cid-sz7xmlte> <i class="fab fa-pinterest" data-astro-cid-sz7xmlte></i> </a> <a href="https://instagram.com/zoddev.otty" class="social-link touch-target" data-astro-cid-sz7xmlte> <i class="fab fa-instagram" data-astro-cid-sz7xmlte></i> </a> </div> </div> <div class="description-container" data-astro-cid-sz7xmlte> <p class="description" data-astro-cid-sz7xmlte>
Both my portfolio and a blog about programming and technology. It is a
      place where I share my thoughts, ideas, and experiences in the field. I
      hope you find it useful and informative. I am always open to feedback and
      suggestions, so feel free to reach out to me if you have any questions or
      comments.
</p> </div> <div class="footer-links" data-astro-cid-sz7xmlte> <a href="/api-docs/" class="footer-link" data-astro-cid-sz7xmlte>API Documentation</a> <a href="/docs/" class="footer-link" data-astro-cid-sz7xmlte>Documentation Platform</a> </div> <p class="copyright" data-astro-cid-sz7xmlte>
&copy; ${currentYear} OTTY KEVIN ANSELME. All rights reserved.
</p> </footer> `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/Footer.astro", void 0);

const $$AccessibilityFeatures = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Skip to content link - invisible until focused -->${maybeRenderHead()}<a href="#main-content" class="skip-to-content" data-astro-cid-ytzvcab5>
Aller au contenu principal
</a> ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/components/AccessibilityFeatures.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/AccessibilityFeatures.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$FontAwesomeFallback = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script>
  // V\xE9rifier si Font Awesome est charg\xE9 correctement
  window.addEventListener('DOMContentLoaded', () => {
    // Fonction pour v\xE9rifier si Font Awesome est charg\xE9
    function isFontAwesomeLoaded() {
      // V\xE9rifier si les ic\xF4nes sont correctement affich\xE9es
      const testIcon = document.createElement('i');
      testIcon.className = 'fas fa-check';
      testIcon.style.visibility = 'hidden';
      document.body.appendChild(testIcon);
      
      // Obtenir le style calcul\xE9
      const computedStyle = window.getComputedStyle(testIcon);
      const fontFamily = computedStyle.getPropertyValue('font-family');
      
      // Nettoyer
      document.body.removeChild(testIcon);
      
      // Si Font Awesome est charg\xE9, la famille de police contiendra "Font Awesome"
      return fontFamily.includes('Font Awesome') || fontFamily.includes('FontAwesome');
    }
    
    // Fonction pour charger Font Awesome localement
    function loadLocalFontAwesome() {
      console.log('Chargement de Font Awesome localement...');
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/fontawesome/all.min.css';
      document.head.appendChild(link);
    }
    
    // V\xE9rifier apr\xE8s un court d\xE9lai pour laisser le temps au CDN de charger
    setTimeout(() => {
      if (!isFontAwesomeLoaded()) {
        loadLocalFontAwesome();
      }
    }, 1000);
  });
<\/script>`])));
}, "C:/Users/kevin/Allproject/portfolio/src/components/FontAwesomeFallback.astro", void 0);

const firstName = "KEVIN";
const lastName = "OTTY";
const email = "contact@zoddev.site";
const phone = "+229 97 27 90 01";
const nationality = "Béninoise";
const address = {"city":"Cotonou","country":"Bénin","rue":"Cotonou, Bénin","indicatif":"+229"};
const socialMedia = {"linkedin":"linkedin.com/in/zoddev","github":"github.com/ansetechnoapp","pinterest":"pinterest.com/zoddevdesign","instagram":"instagram.com/zoddev.otty"};
const dataUser = {
  firstName,
  lastName,
  email,
  phone,
  nationality,
  address,
  socialMedia};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://zoddev.site/");
const $$SchemaOrg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SchemaOrg;
  const {
    type = "Person",
    name = `${dataUser.firstName} ${dataUser.lastName}`,
    description = `D\xE9veloppeur Web & Mobile freelance sp\xE9cialis\xE9 en React, React Native, Astro.js et technologies web modernes.`,
    image = "/assets/social-preview.jpg",
    datePublished = (/* @__PURE__ */ new Date()).toISOString(),
    dateModified = (/* @__PURE__ */ new Date()).toISOString(),
    url = Astro2.site?.toString() || "https://zoddev.site/"
  } = Astro2.props;
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${url}#person`,
    name,
    givenName: dataUser.firstName,
    familyName: dataUser.lastName,
    description,
    image: {
      "@type": "ImageObject",
      url: typeof image === "string" ? new URL(image, Astro2.site).href : image,
      width: 1200,
      height: 630
    },
    url,
    mainEntityOfPage: url,
    jobTitle: "D\xE9veloppeur Web & Mobile Freelance",
    hasOccupation: {
      "@type": "Occupation",
      name: "D\xE9veloppeur Web & Mobile",
      occupationLocation: {
        "@type": "Place",
        name: dataUser.address.city,
        address: {
          "@type": "PostalAddress",
          addressLocality: dataUser.address.city,
          addressCountry: dataUser.address.country
        }
      },
      skills: [
        "React Development",
        "React Native Development",
        "Astro.js Development",
        "Next.js Development",
        "TypeScript Programming",
        "JavaScript Programming",
        "Mobile App Development",
        "Web Application Development",
        "Frontend Development",
        "Backend Development"
      ]
    },
    worksFor: {
      "@type": "Organization",
      "@id": `${url}#organization`,
      name: "zoddev",
      url: "https://zoddev.site/",
      logo: {
        "@type": "ImageObject",
        url: new URL("/assets/zoddev_logo/zoddev_logo_dark_mode.png", Astro2.site).href
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: dataUser.phone,
        email: dataUser.email,
        contactType: "customer service",
        availableLanguage: ["French", "English"]
      }
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: dataUser.address.city,
      addressCountry: dataUser.address.country
    },
    email: dataUser.email,
    telephone: dataUser.phone,
    nationality: dataUser.nationality,
    sameAs: [
      `https://${dataUser.socialMedia.linkedin}`,
      `https://${dataUser.socialMedia.github}`,
      `https://${dataUser.socialMedia.pinterest}`,
      `https://${dataUser.socialMedia.instagram}`
    ],
    knowsAbout: [
      "D\xE9veloppement Web",
      "D\xE9veloppement Mobile",
      "React",
      "React Native",
      "Astro.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Supabase",
      "Firebase",
      "Tailwind CSS",
      "Laravel",
      "WordPress",
      "Python",
      "PostgreSQL",
      "MySQL"
    ],
    knowsLanguage: [
      {
        "@type": "Language",
        name: "French",
        proficiencyLevel: "Native"
      },
      {
        "@type": "Language",
        name: "English",
        proficiencyLevel: "Intermediate"
      }
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "Licence en Syst\xE8mes Informatiques et Logiciels",
      credentialCategory: "Bachelor's Degree",
      educationalLevel: "Bachelor"
    }
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: name,
    description,
    image: typeof image === "string" ? new URL(image, Astro2.site).href : image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: `${dataUser.firstName} ${dataUser.lastName}`,
      url
    },
    publisher: {
      "@type": "Organization",
      name: "zoddev",
      logo: {
        "@type": "ImageObject",
        url: new URL("/assets/zoddev_logo/zoddev_logo_dark_mode.png", Astro2.site).href
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name,
    headline: name,
    description,
    image: {
      "@type": "ImageObject",
      url: typeof image === "string" ? new URL(image, Astro2.site).href : image,
      width: 1200,
      height: 630
    },
    datePublished,
    dateModified,
    dateCreated: datePublished,
    author: {
      "@type": "Person",
      "@id": `${Astro2.site}#person`,
      name: `${dataUser.firstName} ${dataUser.lastName}`,
      url: Astro2.site,
      jobTitle: "D\xE9veloppeur Web & Mobile Freelance"
    },
    creator: {
      "@type": "Person",
      "@id": `${Astro2.site}#person`,
      name: `${dataUser.firstName} ${dataUser.lastName}`
    },
    publisher: {
      "@type": "Organization",
      "@id": `${Astro2.site}#organization`,
      name: "zoddev",
      url: Astro2.site,
      logo: {
        "@type": "ImageObject",
        url: new URL("/assets/zoddev_logo/zoddev_logo_dark_mode.png", Astro2.site).href
      }
    },
    url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    genre: ["Web Development", "Mobile Development", "Software Development"],
    keywords: ["React", "React Native", "Astro.js", "TypeScript", "JavaScript", "Web Development", "Mobile Development"],
    inLanguage: "fr-FR",
    isAccessibleForFree: true,
    isFamilyFriendly: true,
    copyrightHolder: {
      "@type": "Person",
      name: `${dataUser.firstName} ${dataUser.lastName}`
    },
    copyrightYear: new Date(datePublished).getFullYear(),
    license: "All rights reserved"
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${Astro2.site}#organization`,
    name: "zoddev",
    alternateName: `${dataUser.firstName} ${dataUser.lastName} - D\xE9veloppeur Freelance`,
    description: `Agence de d\xE9veloppement web et mobile dirig\xE9e par ${dataUser.firstName} ${dataUser.lastName}, sp\xE9cialis\xE9e dans la cr\xE9ation d'applications web et mobiles modernes et performantes.`,
    url: Astro2.site,
    logo: {
      "@type": "ImageObject",
      url: new URL("/assets/zoddev_logo/zoddev_logo_dark_mode.png", Astro2.site).href,
      width: 512,
      height: 512
    },
    image: {
      "@type": "ImageObject",
      url: new URL("/assets/social-preview.jpg", Astro2.site).href,
      width: 1200,
      height: 630
    },
    founder: {
      "@type": "Person",
      "@id": `${Astro2.site}#person`,
      name: `${dataUser.firstName} ${dataUser.lastName}`
    },
    employee: {
      "@type": "Person",
      "@id": `${Astro2.site}#person`,
      name: `${dataUser.firstName} ${dataUser.lastName}`
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: dataUser.address.city,
      addressCountry: dataUser.address.country
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: dataUser.phone,
      email: dataUser.email,
      contactType: "customer service",
      availableLanguage: ["French", "English"],
      areaServed: "Worldwide"
    },
    sameAs: [
      `https://${dataUser.socialMedia.linkedin}`,
      `https://${dataUser.socialMedia.github}`,
      `https://${dataUser.socialMedia.pinterest}`,
      `https://${dataUser.socialMedia.instagram}`
    ],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "Frontend Development",
      "Backend Development",
      "React Development",
      "React Native Development"
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide"
    },
    knowsAbout: [
      "React",
      "React Native",
      "Astro.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "Mobile Development"
    ]
  };
  let schema;
  switch (type) {
    case "Article":
      schema = articleSchema;
      break;
    case "CreativeWork":
    case "Project":
      schema = projectSchema;
      break;
    case "Organization":
      schema = organizationSchema;
      break;
    case "Person":
    default:
      schema = personSchema;
  }
  return renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(schema)));
}, "C:/Users/kevin/Allproject/portfolio/src/components/SchemaOrg.astro", void 0);

const $$Astro$1 = createAstro("https://zoddev.site/");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const defaultTitle = `${dataUser.firstName} ${dataUser.lastName} - Expert D\xE9veloppeur Web & Mobile | React, Astro.js, React Native`;
  const defaultDescription = `Portfolio professionnel de ${dataUser.firstName} ${dataUser.lastName}, d\xE9veloppeur web et mobile freelance bas\xE9 \xE0 ${dataUser.address.city}. Sp\xE9cialis\xE9 en React, React Native, Astro.js, Next.js et technologies web modernes. Cr\xE9ation d'applications web et mobiles performantes.`;
  const {
    title = defaultTitle,
    description = defaultDescription,
    image = "/assets/social-preview.jpg",
    canonicalURL = new URL(Astro2.url.pathname, Astro2.site),
    type = "website",
    article,
    og,
    twitter
  } = Astro2.props;
  const socialImageURL = new URL(image, Astro2.site).href;
  let schemaType = "Person";
  if (type === "article") {
    schemaType = "Article";
  } else if (Astro2.url.pathname.includes("/work/")) {
    schemaType = "CreativeWork";
  }
  const ogData = {
    title: og?.title || title,
    description: og?.description || description,
    image: og?.image || socialImageURL,
    type: og?.type || type
  };
  const twitterData = {
    title: twitter?.title || title,
    description: twitter?.description || description,
    image: twitter?.image || socialImageURL,
    card: twitter?.card || "summary_large_image"
  };
  return renderTemplate`<!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author"${addAttribute(`${dataUser.firstName} ${dataUser.lastName}`, "content")}><!-- Enhanced keywords with location and specific technologies --><meta name="keywords"${addAttribute(`d\xE9veloppeur web ${dataUser.address.city}, d\xE9veloppeur mobile ${dataUser.address.country}, React developer, React Native, Astro.js, Next.js, TypeScript, JavaScript, freelance developer, portfolio, ${dataUser.firstName} ${dataUser.lastName}, d\xE9veloppement web, application mobile, frontend, backend, Supabase, Firebase, Tailwind CSS`, "content")}><!-- Additional SEO meta tags --><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow"><meta name="bingbot" content="index, follow"><meta name="language" content="fr-FR"><meta name="geo.region"${addAttribute(dataUser.address.country, "content")}><meta name="geo.placename"${addAttribute(dataUser.address.city, "content")}><meta name="geo.position" content="6.3703;2.3912"><!-- Coordinates for Cotonou, Benin --><meta name="ICBM" content="6.3703, 2.3912"><!-- Professional and business meta tags --><meta name="classification" content="Business"><meta name="category" content="Technology, Web Development, Mobile Development"><meta name="coverage" content="Worldwide"><meta name="distribution" content="Global"><meta name="rating" content="General"><meta name="revisit-after" content="7 days"><!-- Social media and contact --><meta name="contact"${addAttribute(dataUser.email, "content")}><meta name="reply-to"${addAttribute(dataUser.email, "content")}><!-- Performance and technical --><meta name="theme-color" content="#6366f1"><meta name="msapplication-TileColor" content="#6366f1"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="default"><meta name="format-detection" content="telephone=yes"><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(ogData.type, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(ogData.title, "content")}><meta property="og:description"${addAttribute(ogData.description, "content")}><meta property="og:image"${addAttribute(ogData.image, "content")}>${article && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${article.publishedTime && renderTemplate`<meta property="article:published_time"${addAttribute(article.publishedTime, "content")}>`}${article.modifiedTime && renderTemplate`<meta property="article:modified_time"${addAttribute(article.modifiedTime, "content")}>`}${article.tags && article.tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)}${article.authors && article.authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`)}` })}`}<!-- Twitter --><meta property="twitter:card"${addAttribute(twitterData.card, "content")}><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(twitterData.title, "content")}><meta property="twitter:description"${addAttribute(twitterData.description, "content")}><meta property="twitter:image"${addAttribute(twitterData.image, "content")}><!-- Schema.org Structured Data -->${renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "type": schemaType, "name": title, "description": description, "image": image, "datePublished": article?.publishedTime || (/* @__PURE__ */ new Date()).toISOString(), "dateModified": article?.modifiedTime || (/* @__PURE__ */ new Date()).toISOString(), "url": canonicalURL })}<!-- Balises meta essentielles --><meta charset="UTF-8"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=5, minimum-scale=1">`;
}, "C:/Users/kevin/Allproject/portfolio/src/components/SEO.astro", void 0);

const $$Astro = createAstro("https://zoddev.site/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image = "/assets/social-preview.jpg",
    type = "website",
    article
  } = Astro2.props;
  return renderTemplate`<html lang="fr" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><!-- Utilisation du composant SEO pour toutes les balises meta -->${renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "type": type, "article": article, "data-astro-cid-sckkx6r4": true })}<!-- Autres balises head spécifiques à cette page --><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body class="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-[Inter]" style="margin: 0; padding: 0;" data-astro-cid-sckkx6r4> ${renderComponent($$result, "AccessibilityFeatures", $$AccessibilityFeatures, { "data-astro-cid-sckkx6r4": true })} ${renderComponent($$result, "FontAwesomeFallback", $$FontAwesomeFallback, { "data-astro-cid-sckkx6r4": true })} <div class="stack backgrounds" style="margin-top: 0; padding-top: 0; top: 0; position: absolute; width: 100%; left: 0;" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-sckkx6r4": true })} <main id="main-content" class="site-content-spacing" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </div> ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}  </body> </html>`;
}, "C:/Users/kevin/Allproject/portfolio/src/layouts/Layout.astro", void 0);

export { $$ThemeToggle as $, Icon as I, $$Layout as a, dataUser as d };
