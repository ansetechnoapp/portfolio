/* empty css                                              */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../../../../chunks/Layout_DaFi6nHl.mjs';
import { A as ApiDocEditor } from '../../../../../chunks/ApiDocEditor_CuqRTe4T.mjs';
import { s as supabase, h as hasProjectAccess, g as getProject } from '../../../../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../../../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const prerender = false;
const $$New = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$New;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/docs/dashboard");
  }
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return Astro2.redirect("/docs/login");
  }
  const hasAccess = await hasProjectAccess(id);
  if (!hasAccess) {
    return Astro2.redirect("/docs/dashboard");
  }
  let project;
  try {
    project = await getProject(id);
  } catch (error) {
    console.error("Error fetching project:", error);
    return Astro2.redirect("/docs/dashboard");
  }
  const { data: workspace } = await supabase.from("workspaces").select("id, name").eq("id", project.workspace_id).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "New API Endpoint - Documentation Platform", "description": `Create a new API endpoint for ${project.name}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <div class="text-sm breadcrumbs mb-2"> <a href="/docs/dashboard" class="text-gray-500 hover:text-gray-700">Dashboard</a> <span class="mx-2 text-gray-400">/</span> <a${addAttribute(`/docs/workspaces/${workspace?.id}`, "href")} class="text-gray-500 hover:text-gray-700">${workspace?.name}</a> <span class="mx-2 text-gray-400">/</span> <a${addAttribute(`/docs/projects/${id}`, "href")} class="text-gray-500 hover:text-gray-700">${project.name}</a> <span class="mx-2 text-gray-400">/</span> <span class="text-gray-700">New API Endpoint</span> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> ${renderComponent($$result2, "ApiDocEditor", ApiDocEditor, { "client:load": true, "projectId": id, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/ApiDocEditor", "client:component-export": "default" })} </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/api/new.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/api/new.astro";
const $$url = "/docs/projects/[id]/api/new";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$New,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
