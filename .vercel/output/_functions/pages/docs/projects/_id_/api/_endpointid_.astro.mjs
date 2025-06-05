/* empty css                                              */
import { c as createAstro, a as createComponent, d as renderTemplate, g as defineScriptVars, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../../../../chunks/Layout_D1S7Kv86.mjs';
import { A as ApiDocEditor } from '../../../../../chunks/ApiDocEditor_CuqRTe4T.mjs';
import { s as supabase, h as hasProjectAccess, g as getProject } from '../../../../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://zoddev.site/");
const prerender = false;
const $$endpointId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$endpointId;
  const { id, endpointId } = Astro2.params;
  if (!id || !endpointId) {
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
  } catch (error2) {
    console.error("Error fetching project:", error2);
    return Astro2.redirect("/docs/dashboard");
  }
  const { data: endpoint, error } = await supabase.from("api_endpoints").select("*").eq("id", endpointId).eq("project_id", id).single();
  if (error || !endpoint) {
    console.error("Error fetching endpoint:", error);
    return Astro2.redirect(`/docs/projects/${id}`);
  }
  const { data: workspace } = await supabase.from("workspaces").select("id, name").eq("id", project.workspace_id).single();
  const viewMode = Astro2.url.searchParams.get("view") === "true";
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", "\n  // Add a view mode toggle\n  document.addEventListener('DOMContentLoaded', () => {\n    const urlParams = new URLSearchParams(window.location.search);\n    const viewMode = urlParams.get('view') === 'true';\n    \n    if (!viewMode) {\n      // Add a view button to the toolbar\n      const toolbar = document.querySelector('.api-doc-editor .flex.justify-between.items-center');\n      if (toolbar) {\n        const viewButton = document.createElement('a');\n        viewButton.href = `/docs/projects/${id}/api/${endpointId}?view=true`;\n        viewButton.className = 'py-2 px-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 mr-2';\n        viewButton.textContent = 'View Mode';\n        \n        const saveButton = toolbar.querySelector('button');\n        if (saveButton) {\n          toolbar.insertBefore(viewButton, saveButton);\n        }\n      }\n    }\n  });\n})();<\/script>"], ["", " <script>(function(){", "\n  // Add a view mode toggle\n  document.addEventListener('DOMContentLoaded', () => {\n    const urlParams = new URLSearchParams(window.location.search);\n    const viewMode = urlParams.get('view') === 'true';\n    \n    if (!viewMode) {\n      // Add a view button to the toolbar\n      const toolbar = document.querySelector('.api-doc-editor .flex.justify-between.items-center');\n      if (toolbar) {\n        const viewButton = document.createElement('a');\n        viewButton.href = \\`/docs/projects/\\${id}/api/\\${endpointId}?view=true\\`;\n        viewButton.className = 'py-2 px-4 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 mr-2';\n        viewButton.textContent = 'View Mode';\n        \n        const saveButton = toolbar.querySelector('button');\n        if (saveButton) {\n          toolbar.insertBefore(viewButton, saveButton);\n        }\n      }\n    }\n  });\n})();<\/script>"])), renderComponent($$result, "Layout", $$Layout, { "title": `${endpoint.path} - API Documentation`, "description": `API documentation for ${endpoint.method} ${endpoint.path}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <div class="text-sm breadcrumbs mb-2"> <a href="/docs/dashboard" class="text-gray-500 hover:text-gray-700">Dashboard</a> <span class="mx-2 text-gray-400">/</span> <a${addAttribute(`/docs/workspaces/${workspace?.id}`, "href")} class="text-gray-500 hover:text-gray-700">${workspace?.name}</a> <span class="mx-2 text-gray-400">/</span> <a${addAttribute(`/docs/projects/${id}`, "href")} class="text-gray-500 hover:text-gray-700">${project.name}</a> <span class="mx-2 text-gray-400">/</span> <span class="text-gray-700">API: ${endpoint.path}</span> </div> ${viewMode && renderTemplate`<div class="flex justify-between items-center"> <h1 class="text-3xl font-bold"> <span${addAttribute(`inline-block px-2 py-1 text-xs font-bold rounded mr-2 ${endpoint.method === "GET" ? "bg-blue-500 text-white" : endpoint.method === "POST" ? "bg-green-500 text-white" : endpoint.method === "PUT" ? "bg-yellow-500 text-white" : endpoint.method === "DELETE" ? "bg-red-500 text-white" : "bg-gray-500 text-white"}`, "class")}> ${endpoint.method} </span> ${endpoint.path} </h1> <a${addAttribute(`/docs/projects/${id}/api/${endpointId}`, "href")} class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
Edit Endpoint
</a> </div>`} </div> <div class="bg-white rounded-lg shadow-sm p-6"> ${viewMode ? renderTemplate`<div class="api-endpoint-view"> <div class="mb-8"> <h2 class="text-xl font-semibold mb-2">Summary</h2> <p>${endpoint.summary}</p> </div> ${endpoint.description && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-semibold mb-2">Description</h2> <p>${endpoint.description}</p> </div>`} ${Object.keys(endpoint.request_body || {}).length > 0 && renderTemplate`<div class="mb-8"> <h2 class="text-xl font-semibold mb-2">Request Body</h2> <pre class="bg-gray-50 p-4 rounded-md overflow-auto">
                <code>${JSON.stringify(endpoint.request_body, null, 2)}</code>
              </pre> </div>`} <div class="mb-8"> <h2 class="text-xl font-semibold mb-2">Responses</h2> ${Object.entries(endpoint.responses || {}).map(([code, response]) => renderTemplate`<div class="mb-4"> <h3 class="text-lg font-medium mb-2"> <span${addAttribute(`inline-block px-2 py-1 text-xs font-bold rounded mr-2 ${code.startsWith("2") ? "bg-green-500 text-white" : code.startsWith("4") ? "bg-yellow-500 text-white" : code.startsWith("5") ? "bg-red-500 text-white" : "bg-gray-500 text-white"}`, "class")}> ${code} </span> ${response.description} </h3> ${response.content && renderTemplate`<pre class="bg-gray-50 p-4 rounded-md overflow-auto">
                    <code>${JSON.stringify(response.content, null, 2)}</code>
                  </pre>`} </div>`)} </div> <div class="mt-8"> <h2 class="text-xl font-semibold mb-4">Try It Out</h2> <div class="bg-gray-50 p-4 rounded-md"> <div class="mb-4"> <label class="block text-sm font-medium mb-1">Request URL</label> <div class="flex"> <input type="text"${addAttribute(`https://api.example.com${endpoint.path}`, "value")} readonly class="flex-1 rounded-l-md border-gray-300 bg-gray-100"> <button class="bg-indigo-600 text-white px-4 py-2 rounded-r-md" onclick="alert('This is a demo feature. In a real application, this would send a request to the API.')">
Send
</button> </div> </div> </div> </div> </div>` : renderTemplate`${renderComponent($$result2, "ApiDocEditor", ApiDocEditor, { "client:load": true, "projectId": id, "endpointId": endpointId, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/ApiDocEditor", "client:component-export": "default" })}`} </div> </main> ` }), defineScriptVars({ id, endpointId }));
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/api/[endpointId].astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/api/[endpointId].astro";
const $$url = "/docs/projects/[id]/api/[endpointId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$endpointId,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
