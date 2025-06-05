/* empty css                                  */
import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$ContactCTA } from '../chunks/ContactCTA_DH4FdnHn.mjs';
import { d as dataUser, a as $$Layout } from '../chunks/Layout_BwB_lZY-.mjs';
import { P as PortfolioPreview } from '../chunks/PortfolioPreview_BkHLDXlw.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$Hero } from '../chunks/Hero_CajIk4Pt.mjs';
import { $ as $$Grid } from '../chunks/Grid_DfP-yVFN.mjs';
import { $ as $$Contact } from '../chunks/Contact_C3dihhFV.mjs';
import { $ as $$MenuLinkNav } from '../chunks/menuLinkNav_B-AZsj0y.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

function FilterProjects({
  onFilterChange,
  initialFilter = "all",
  className = ""
}) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    const event = new CustomEvent("filterChange", {
      detail: filter,
      bubbles: true
    });
    document.getElementById("portfolio-section")?.dispatchEvent(event);
    onFilterChange?.(filter);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `flex flex-wrap items-center justify-center gap-4 mb-8 ${className}`.trim(),
      role: "group",
      "aria-label": "Project filters",
      children: ["all", "web", "mobile"].map((filter) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => handleFilterClick(filter),
          className: `
                        px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                        ${activeFilter === filter ? "bg-primary text-white shadow-lg transform scale-105" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}
                    `,
          "aria-pressed": activeFilter === filter,
          type: "button",
          children: [
            filter.charAt(0).toUpperCase() + filter.slice(1),
            " Projects"
          ]
        },
        filter
      ))
    }
  );
}

const $$Astro = createAstro("https://zoddev.site/");
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    // (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf() filter by date
    (a, b) => b.data.number - a.data.number
  );
  const {
    LayoutTitle = `My Work | ${dataUser.firstName} ${dataUser.lastName}`,
    descriptionLayout = `Learn about ${dataUser.firstName} ${dataUser.lastName}'s most recent projects`
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": LayoutTitle, "description": descriptionLayout, "image": "/assets/social-preview.jpg", "type": "website", "data-astro-cid-jljc7dey": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "MenuLinkNav", $$MenuLinkNav, { "namepage": "work", "data-astro-cid-jljc7dey": true })} ${maybeRenderHead()}<section class="presentation-section site-content-spacing mt-mobile-0" data-astro-cid-jljc7dey> <div class="presentation-content" data-astro-cid-jljc7dey> <h1 data-astro-cid-jljc7dey>My Portfolio</h1> <p data-astro-cid-jljc7dey>
Welcome to my work showcase. Here you'll find a collection of projects
        that demonstrate my skills and experience in web development and
        design.
</p> <p data-astro-cid-jljc7dey>
Each project represents a unique challenge and solution, showcasing
        different technologies and approaches I've worked with.
</p> <div class="presentation-cta" data-astro-cid-jljc7dey> <a href="#portfolio-section" class="btn" data-astro-cid-jljc7dey>View Projects</a> </div> </div> </section> <div class="stack gap-20 site-content-spacing" data-astro-cid-jljc7dey> <main class="stack gap-8 lg:gap-20" data-astro-cid-jljc7dey> ${renderComponent($$result2, "Hero", $$Hero, { "title": "My Work", "tagline": "See my most recent projects below to get an idea of my past experience.", "align": "start", "data-astro-cid-jljc7dey": true })} <div id="portfolio-section" data-astro-cid-jljc7dey> ${renderComponent($$result2, "FilterProjects", FilterProjects, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/FilterProjects", "client:component-export": "default", "data-astro-cid-jljc7dey": true })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "data-astro-cid-jljc7dey": true }, { "default": async ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-astro-cid-jljc7dey> ${renderComponent($$result3, "PortfolioPreview", PortfolioPreview, { "project": project, "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/PortfolioPreview", "client:component-export": "default", "data-astro-cid-jljc7dey": true })} </li>`)}` })} </div> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-jljc7dey": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-jljc7dey": true })} </div> ` })} ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/pages/work.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Work,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
