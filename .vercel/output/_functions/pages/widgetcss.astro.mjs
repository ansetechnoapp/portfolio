/* empty css                                  */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$ContactCTA } from '../chunks/ContactCTA_BQN5Izba.mjs';
import { d as dataUser, a as $$Layout } from '../chunks/Layout_BwB_lZY-.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { C as Card, a as CardHeader, b as CardTitle, d as CardContent, e as CardFooter } from '../chunks/card_BYgLF5Uw.mjs';
import { B as Button } from '../chunks/button_DWgDRuZ-.mjs';
import { $ as $$Hero } from '../chunks/Hero_CajIk4Pt.mjs';
import { $ as $$Grid } from '../chunks/Grid_DfP-yVFN.mjs';
import { $ as $$Contact } from '../chunks/Contact_C3dihhFV.mjs';
import { $ as $$MenuLinkNav } from '../chunks/menuLinkNav_B-AZsj0y.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const WidgetCssPreview = ({ project }) => {
  const { data } = project;
  return /* @__PURE__ */ jsxs(Card, { className: "border border-border w-full h-full bg-white", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "flex justify-between items-center mb-2", children: /* @__PURE__ */ jsx("span", { className: "px-2 py-1 text-xs rounded-full bg-secondary/50", children: "CSS Widget" }) }),
      /* @__PURE__ */ jsx(CardTitle, { children: data.title })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { children: data.description }) }),
    /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx("a", { href: data.href, children: /* @__PURE__ */ jsx(Button, { variant: "outline", className: "text-primary hover:text-primary-foreground hover:bg-primary", children: "Try it" }) }) })
  ] });
};

const $$Astro = createAstro("https://zoddev.site/");
const $$WidgetCss = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WidgetCss;
  const projects = (await getCollection("widgetCss")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  const {
    LayoutTitle = `My Work | ${dataUser.firstName} ${dataUser.lastName}`,
    descriptionLayout = `Learn about ${dataUser.firstName} ${dataUser.lastName}'s most recent projects`
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": LayoutTitle, "description": descriptionLayout, "image": "/assets/social-preview.jpg", "type": "website", "data-astro-cid-t3heoqpw": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuLinkNav", $$MenuLinkNav, { "namepage": "work", "data-astro-cid-t3heoqpw": true })} ${maybeRenderHead()}<section class="presentation-section mt-16" data-astro-cid-t3heoqpw> <div class="wrapper" data-astro-cid-t3heoqpw> <div class="presentation-content" data-astro-cid-t3heoqpw> <h1 data-astro-cid-t3heoqpw>CSS Widgets & Tools</h1> <p data-astro-cid-t3heoqpw>
Explore my collection of CSS widgets, tools, and resources designed to
          enhance web experiences.
</p> <p data-astro-cid-t3heoqpw>
These components showcase my expertise in CSS animations, effects, and
          responsive design patterns.
</p> <div class="presentation-cta" data-astro-cid-t3heoqpw> <a href="#widget-section" class="btn" data-astro-cid-t3heoqpw>Explore Widgets</a> </div> </div> </div> </section> <div class="stack gap-20" data-astro-cid-t3heoqpw> <main class="wrapper stack gap-8 lg:gap-16" id="widget-section" data-astro-cid-t3heoqpw> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My widget Css", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start", "data-astro-cid-t3heoqpw": true })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-t3heoqpw": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-t3heoqpw> ${renderComponent($$result3, "WidgetCssPreview", WidgetCssPreview, { "project": project, "data-astro-cid-t3heoqpw": true })} </li>`)}` })} <div class="mt-20 py-12 text-center bg-secondary/20 rounded-lg" data-astro-cid-t3heoqpw> <h2 class="text-3xl font-bold mb-4" data-astro-cid-t3heoqpw>More tools coming soon!</h2><p class="text-lg mb-6 max-w-2xl mx-auto" data-astro-cid-t3heoqpw>
I'm constantly working on new CSS tools and resources. Have a
          suggestion? Let me know!
</p><a href="mailto:contact@zoddev.site" data-astro-cid-t3heoqpw><button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium
            transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50
            [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow h-9 px-4 py-2 bg-primary text-white hover:bg-primary/80" data-astro-cid-t3heoqpw>Suggest a Tool</button></a> </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-t3heoqpw": true })} <div class="wrapper stack gap-20 lg:gap-48" data-astro-cid-t3heoqpw> ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-t3heoqpw": true })} </div> </div> ` })} `;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/widgetCss.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/widgetCss.astro";
const $$url = "/widgetCss";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$WidgetCss,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
