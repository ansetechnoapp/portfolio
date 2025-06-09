/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_DaFi6nHl.mjs';
import { R as RequestPasswordReset } from '../../chunks/PasswordReset_C8Ffu7sV.mjs';
import { s as supabase } from '../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const $$ResetPasswordRequest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPasswordRequest;
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    return Astro2.redirect("/docs/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "R\xE9initialisation de Mot de Passe - Plateforme de Documentation", "description": "Demander une r\xE9initialisation de mot de passe pour la plateforme de documentation collaborative" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Réinitialisation de Mot de Passe</h1> <p class="text-gray-600 mt-2">
Entrez votre adresse email pour recevoir un lien de réinitialisation de mot de passe
</p> </div> ${renderComponent($$result2, "RequestPasswordReset", RequestPasswordReset, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/PasswordReset", "client:component-export": "RequestPasswordReset" })} </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/reset-password-request.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/reset-password-request.astro";
const $$url = "/docs/reset-password-request";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPasswordRequest,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
