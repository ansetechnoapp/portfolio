/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_CN2odi0l.mjs';
import { R as RequestEmailVerification } from '../../chunks/EmailVerification_C_wgKRQc.mjs';
import { s as supabase } from '../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const $$VerifyEmailRequest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$VerifyEmailRequest;
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    return Astro2.redirect("/docs/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Renvoyer l'Email de V\xE9rification - Plateforme de Documentation", "description": "Demander un nouvel email de v\xE9rification pour la plateforme de documentation collaborative" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Renvoyer l'Email de Vérification</h1> <p class="text-gray-600 mt-2">
Entrez votre adresse email pour recevoir un nouvel email de vérification
</p> </div> ${renderComponent($$result2, "RequestEmailVerification", RequestEmailVerification, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/EmailVerification", "client:component-export": "RequestEmailVerification" })} </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/verify-email-request.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/verify-email-request.astro";
const $$url = "/docs/verify-email-request";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyEmailRequest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
