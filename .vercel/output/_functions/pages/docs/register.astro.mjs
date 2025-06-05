/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_D1S7Kv86.mjs';
import { a as SignUp } from '../../chunks/AuthUI_j6EegU-f.mjs';
import { s as supabase } from '../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    return Astro2.redirect("/docs/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Create Account - Documentation Platform", "description": "Create a new account on the documentation platform" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Create Account</h1> <p class="text-gray-600 mt-2">
Join the documentation platform to create and share documentation
</p> </div> ${renderComponent($$result2, "SignUp", SignUp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/AuthUI", "client:component-export": "SignUp" })} <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
Already have an account?${" "} <a href="/docs/login" class="text-indigo-600 hover:text-indigo-800 font-medium">
Sign in
</a> </p> </div> </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/register.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/register.astro";
const $$url = "/docs/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
