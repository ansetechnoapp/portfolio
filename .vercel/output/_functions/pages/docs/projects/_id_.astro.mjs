/* empty css                                        */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../../chunks/Layout_D1S7Kv86.mjs';
import { s as supabase, h as hasProjectAccess, g as getProject } from '../../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://zoddev.site/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
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
  const { data: documentation } = await supabase.from("documentation").select("id, title, slug, is_published, updated_at").eq("project_id", id).order("updated_at", { ascending: false });
  const { data: apiEndpoints } = await supabase.from("api_endpoints").select("id, path, method, summary").eq("project_id", id).order("path", { ascending: true });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${project.name} - Documentation Platform`, "description": project.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <div class="flex flex-col md:flex-row md:items-center md:justify-between"> <div> <div class="text-sm breadcrumbs mb-2"> <a href="/docs/dashboard" class="text-gray-500 hover:text-gray-700">Dashboard</a> <span class="mx-2 text-gray-400">/</span> <a${addAttribute(`/docs/workspaces/${workspace?.id}`, "href")} class="text-gray-500 hover:text-gray-700">${workspace?.name}</a> <span class="mx-2 text-gray-400">/</span> <span class="text-gray-700">${project.name}</span> </div> <h1 class="text-3xl font-bold">${project.name}</h1> <p class="text-gray-600 mt-2"> ${project.description} </p> </div> <div class="mt-4 md:mt-0 flex space-x-3"> <a${addAttribute(`/docs/projects/${id}/docs/new`, "href")} class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
New Document
</a> <a${addAttribute(`/docs/projects/${id}/settings`, "href")} class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium">
Project Settings
</a> </div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2"> <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-8"> <div class="border-b px-6 py-4"> <h2 class="text-xl font-semibold">Documentation</h2> </div> <div class="p-6"> ${documentation && documentation.length > 0 ? renderTemplate`<div class="space-y-4"> ${documentation.map((doc) => renderTemplate`<div class="border rounded-md p-4 hover:bg-gray-50"> <a${addAttribute(`/docs/projects/${id}/docs/${doc.id}`, "href")} class="block"> <h3 class="text-lg font-medium">${doc.title || "Untitled Document"}</h3> <div class="flex items-center mt-2 text-sm text-gray-500"> <span${addAttribute(`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${doc.is_published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`, "class")}> ${doc.is_published ? "Published" : "Draft"} </span> <span class="ml-3">
Updated ${new Date(doc.updated_at).toLocaleDateString()} </span> </div> </a> </div>`)} </div>` : renderTemplate`<div class="text-center py-8"> <p class="text-gray-500 mb-4">No documentation yet</p> <a${addAttribute(`/docs/projects/${id}/docs/new`, "href")} class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
Create Your First Document
</a> </div>`} </div> </div> <div class="bg-white rounded-lg shadow-sm overflow-hidden"> <div class="border-b px-6 py-4"> <h2 class="text-xl font-semibold">API Endpoints</h2> </div> <div class="p-6"> ${apiEndpoints && apiEndpoints.length > 0 ? renderTemplate`<div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Method
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Path
</th> <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Description
</th> <th scope="col" class="relative px-6 py-3"> <span class="sr-only">Edit</span> </th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${apiEndpoints.map((endpoint) => renderTemplate`<tr> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${endpoint.method === "GET" ? "bg-blue-100 text-blue-800" : endpoint.method === "POST" ? "bg-green-100 text-green-800" : endpoint.method === "PUT" ? "bg-yellow-100 text-yellow-800" : endpoint.method === "DELETE" ? "bg-red-100 text-red-800" : "bg-gray-100 text-gray-800"}`, "class")}> ${endpoint.method} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> ${endpoint.path} </td> <td class="px-6 py-4 text-sm text-gray-500"> ${endpoint.summary} </td> <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"> <a${addAttribute(`/docs/projects/${id}/api/${endpoint.id}`, "href")} class="text-indigo-600 hover:text-indigo-900">
Edit
</a> </td> </tr>`)} </tbody> </table> </div>` : renderTemplate`<div class="text-center py-8"> <p class="text-gray-500 mb-4">No API endpoints defined yet</p> <a${addAttribute(`/docs/projects/${id}/api/new`, "href")} class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
Add API Endpoint
</a> </div>`} </div> </div> </div> <div class="lg:col-span-1"> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-xl font-semibold mb-4">Project Details</h2> <div class="space-y-4"> <div> <h3 class="text-sm font-medium text-gray-500">Workspace</h3> <p class="mt-1"> <a${addAttribute(`/docs/workspaces/${workspace?.id}`, "href")} class="text-indigo-600 hover:text-indigo-800"> ${workspace?.name} </a> </p> </div> <div> <h3 class="text-sm font-medium text-gray-500">Created</h3> <p class="mt-1">${new Date(project.created_at).toLocaleDateString()}</p> </div> <div> <h3 class="text-sm font-medium text-gray-500">Last Updated</h3> <p class="mt-1">${new Date(project.updated_at).toLocaleDateString()}</p> </div> </div> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Quick Actions</h2> <ul class="space-y-2"> <li> <a${addAttribute(`/docs/projects/${id}/docs/new`, "href")} class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg>
New Document
</a> </li> <li> <a${addAttribute(`/docs/projects/${id}/api/new`, "href")} class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 3a1 1 0 00-1 1v5H4a1 1 0 100 2h5v5a1 1 0 102 0v-5h5a1 1 0 100-2h-5V4a1 1 0 00-1-1z" clip-rule="evenodd"></path> </svg>
New API Endpoint
</a> </li> <li> <a${addAttribute(`/docs/projects/${id}/settings`, "href")} class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path> </svg>
Project Settings
</a> </li> </ul> </div> </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/index.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/index.astro";
const $$url = "/docs/projects/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
