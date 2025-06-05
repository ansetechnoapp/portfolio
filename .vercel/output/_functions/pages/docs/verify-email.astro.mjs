/* empty css                                     */
import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_D1S7Kv86.mjs';
import { E as EmailVerificationStatus } from '../../chunks/EmailVerification_C_wgKRQc.mjs';
export { renderers } from '../../renderers.mjs';

const $$VerifyEmail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "V\xE9rification d'Email - Plateforme de Documentation", "description": "V\xE9rification de votre adresse email pour la plateforme de documentation collaborative" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Vérification d'Email</h1> <p class="text-gray-600 mt-2">
Nous vérifions votre adresse email
</p> </div> ${renderComponent($$result2, "EmailVerificationStatus", EmailVerificationStatus, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/EmailVerification", "client:component-export": "EmailVerificationStatus" })} </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/verify-email.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/verify-email.astro";
const $$url = "/docs/verify-email";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$VerifyEmail,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
