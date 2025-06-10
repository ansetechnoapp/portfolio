/* empty css                                     */
import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_B_Ak2Euc.mjs';
import { U as UpdatePassword } from '../../chunks/PasswordReset_CEgpBfYB.mjs';
import { s as supabase } from '../../chunks/supabase_tVI8Tn2x.mjs';
export { renderers } from '../../renderers.mjs';

const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const { data: { session } } = await supabase.auth.getSession();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mettre \xE0 Jour le Mot de Passe - Plateforme de Documentation", "description": "Mettre \xE0 jour votre mot de passe pour la plateforme de documentation collaborative" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Mettre à Jour le Mot de Passe</h1> <p class="text-gray-600 mt-2">
Créez un nouveau mot de passe sécurisé pour votre compte
</p> </div> ${renderComponent($$result2, "UpdatePassword", UpdatePassword, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/PasswordReset", "client:component-export": "UpdatePassword" })} </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/reset-password.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/reset-password.astro";
const $$url = "/docs/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
