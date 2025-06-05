/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_CN2odi0l.mjs';
import { S as SignIn } from '../../chunks/AuthUI_j6EegU-f.mjs';
import { s as supabase } from '../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const prerender = false;
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    return Astro2.redirect("/docs/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign In - Documentation Platform", "description": "Sign in to your documentation platform account" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto bg-white rounded-lg shadow-sm overflow-hidden"> <div class="p-6"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold">Sign In</h1> <p class="text-gray-600 mt-2">
Sign in to your documentation platform account
</p> </div> ${renderComponent($$result2, "SignIn", SignIn, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/AuthUI", "client:component-export": "SignIn" })} <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
Don't have an account?${" "} <a href="/docs/register" class="text-indigo-600 hover:text-indigo-800 font-medium">
Create an account
</a> </p> </div> </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/login.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/login.astro";
const $$url = "/docs/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
