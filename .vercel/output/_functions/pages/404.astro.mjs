/* empty css                                  */
import { a as createComponent, e as renderComponent, d as renderTemplate } from '../chunks/astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { $ as $$Hero } from '../chunks/Hero_CajIk4Pt.mjs';
import { a as $$Layout } from '../chunks/Layout_BwB_lZY-.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found", "image": "/assets/social-preview.jpg", "type": "website" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })} ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
