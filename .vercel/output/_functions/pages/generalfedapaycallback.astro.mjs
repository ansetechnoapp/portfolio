/* empty css                                  */
import { c as createAstro, a as createComponent, h as renderHead, e as renderComponent, F as Fragment, d as renderTemplate, b as addAttribute } from '../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
/* empty css                                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const $$GeneralFedapayCallback = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GeneralFedapayCallback;
  const { request } = Astro2;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const status = url.searchParams.get("status");
  return renderTemplate`<html lang="fr" data-astro-cid-xvo47xom> <head><meta charset="UTF-8"><title>Statut de la Transaction</title><meta name="viewport" content="width=device-width, initial-scale=1.0">${renderHead()}</head> <body data-astro-cid-xvo47xom> <div class="container" data-astro-cid-xvo47xom> <h1 data-astro-cid-xvo47xom>Statut de Votre Transaction</h1> ${id && status ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-xvo47xom": true }, { "default": ($$result2) => renderTemplate` <p data-astro-cid-xvo47xom><strong data-astro-cid-xvo47xom>ID de la Transaction :</strong> ${id}</p> <p data-astro-cid-xvo47xom> <strong data-astro-cid-xvo47xom>Status :</strong> <span${addAttribute(`status-${status}`, "class")} data-astro-cid-xvo47xom> ${status.charAt(0).toUpperCase() + status.slice(1)} </span> </p> <a${addAttribute(`your-app-scheme://callback?id=${id}&status=${status}`, "href")} class="button" data-astro-cid-xvo47xom>Retourner à l'App</a> ` })}` : renderTemplate`<p data-astro-cid-xvo47xom>Aucune donnée de transaction reçue.</p>`} </div> </body></html>`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/generalFedapayCallback.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/generalFedapayCallback.astro";
const $$url = "/generalFedapayCallback";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$GeneralFedapayCallback,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
