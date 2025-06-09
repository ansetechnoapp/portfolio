/* empty css                                              */
import { c as createAstro, a as createComponent, d as renderTemplate, g as defineScriptVars, e as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../../../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../../../../chunks/Layout_DaFi6nHl.mjs';
import { D as DocEditor } from '../../../../../chunks/DocEditor_DjimoKdz.mjs';
import { s as supabase, h as hasProjectAccess, g as getProject } from '../../../../../chunks/supabase_B2xMZoNq.mjs';
/* empty css                                               */
export { renderers } from '../../../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://zoddev.site/");
const prerender = false;
const $$docId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$docId;
  const { id, docId } = Astro2.params;
  if (!id || !docId) {
    return Astro2.redirect("/docs/dashboard");
  }
  const {
    data: { session }
  } = await supabase.auth.getSession();
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
  const { data: document, error } = await supabase.from("documentation").select("*").eq("id", docId).eq("project_id", id).single();
  if (error || !document) {
    console.error("Error fetching document:", error);
    return Astro2.redirect(`/docs/projects/${id}`);
  }
  const { data: workspace } = await supabase.from("workspaces").select("id, name").eq("id", project.workspace_id).single();
  const viewMode = Astro2.url.searchParams.get("view") === "true";
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", '\n  // Add a view mode toggle\n  document.addEventListener("DOMContentLoaded", () => {\n    const urlParams = new URLSearchParams(window.location.search);\n    const viewMode = urlParams.get("view") === "true";\n\n    if (!viewMode) {\n      // Add a view button to the toolbar\n      const toolbarActions = document.querySelector(".toolbar-actions");\n      if (toolbarActions) {\n        const viewButton = document.createElement("a");\n        viewButton.href = `/docs/projects/${id}/docs/${docId}?view=true`;\n        viewButton.className =\n          "bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-1 rounded text-sm font-medium";\n        viewButton.textContent = "View Mode";\n        toolbarActions.prepend(viewButton);\n      }\n    }\n  });\n})();<\/script>  <script>(function(){', '\n  // Simple markdown renderer (in a real app, use a proper markdown library)\n  function renderMarkdown(markdown) {\n    if (!markdown) return "";\n\n    // This is a very basic implementation - in a real app, use a library like marked.js\n    let html = markdown\n      // Headers\n      .replace(/^# (.*$)/gm, "<h1>$1</h1>")\n      .replace(/^## (.*$)/gm, "<h2>$1</h2>")\n      .replace(/^### (.*$)/gm, "<h3>$1</h3>")\n      // Bold\n      .replace(/\\*\\*(.*)\\*\\*/gm, "<strong>$1</strong>")\n      // Italic\n      .replace(/\\*(.*)\\*/gm, "<em>$1</em>")\n      // Code blocks\n      .replace(/```([\\s\\S]*?)```/gm, "<pre><code>$1</code></pre>")\n      // Inline code\n      .replace(/`([^`]+)`/gm, "<code>$1</code>")\n      // Lists\n      .replace(/^\\- (.*$)/gm, "<li>$1</li>")\n      // Links\n      .replace(/\\[([^\\]]+)\\]\\(([^)]+)\\)/gm, \'<a href="$2">$1</a>\')\n      // Paragraphs\n      .replace(/^\\s*(\\n)?(.+)/gm, function (m) {\n        return /\\<(\\/)?(h\\d|ul|ol|li|blockquote|pre|img)/.test(m)\n          ? m\n          : "<p>" + m + "</p>";\n      })\n      // Line breaks\n      .replace(/\\n/gm, "<br>");\n\n    // Fix lists\n    html = html\n      .replace(/<li>(.+)<\\/li>/g, function (m, content) {\n        return "<ul>" + m + "</ul>";\n      })\n      .replace(/<\\/ul><ul>/g, "");\n\n    return html;\n  }\n\n  // If in view mode, render the markdown content\n  if (viewMode && document) {\n    document.addEventListener("DOMContentLoaded", () => {\n      const contentElement = document.getElementById("markdown-content");\n      if (contentElement) {\n        contentElement.innerHTML = renderMarkdown(document.content || "");\n      }\n    });\n  }\n})();<\/script>'], ["", " <script>(function(){", '\n  // Add a view mode toggle\n  document.addEventListener("DOMContentLoaded", () => {\n    const urlParams = new URLSearchParams(window.location.search);\n    const viewMode = urlParams.get("view") === "true";\n\n    if (!viewMode) {\n      // Add a view button to the toolbar\n      const toolbarActions = document.querySelector(".toolbar-actions");\n      if (toolbarActions) {\n        const viewButton = document.createElement("a");\n        viewButton.href = \\`/docs/projects/\\${id}/docs/\\${docId}?view=true\\`;\n        viewButton.className =\n          "bg-gray-100 text-gray-800 hover:bg-gray-200 px-4 py-1 rounded text-sm font-medium";\n        viewButton.textContent = "View Mode";\n        toolbarActions.prepend(viewButton);\n      }\n    }\n  });\n})();<\/script>  <script>(function(){', '\n  // Simple markdown renderer (in a real app, use a proper markdown library)\n  function renderMarkdown(markdown) {\n    if (!markdown) return "";\n\n    // This is a very basic implementation - in a real app, use a library like marked.js\n    let html = markdown\n      // Headers\n      .replace(/^# (.*$)/gm, "<h1>$1</h1>")\n      .replace(/^## (.*$)/gm, "<h2>$1</h2>")\n      .replace(/^### (.*$)/gm, "<h3>$1</h3>")\n      // Bold\n      .replace(/\\\\*\\\\*(.*)\\\\*\\\\*/gm, "<strong>$1</strong>")\n      // Italic\n      .replace(/\\\\*(.*)\\\\*/gm, "<em>$1</em>")\n      // Code blocks\n      .replace(/\\`\\`\\`([\\\\s\\\\S]*?)\\`\\`\\`/gm, "<pre><code>$1</code></pre>")\n      // Inline code\n      .replace(/\\`([^\\`]+)\\`/gm, "<code>$1</code>")\n      // Lists\n      .replace(/^\\\\- (.*$)/gm, "<li>$1</li>")\n      // Links\n      .replace(/\\\\[([^\\\\]]+)\\\\]\\\\(([^)]+)\\\\)/gm, \'<a href="$2">$1</a>\')\n      // Paragraphs\n      .replace(/^\\\\s*(\\\\n)?(.+)/gm, function (m) {\n        return /\\\\<(\\\\/)?(h\\\\d|ul|ol|li|blockquote|pre|img)/.test(m)\n          ? m\n          : "<p>" + m + "</p>";\n      })\n      // Line breaks\n      .replace(/\\\\n/gm, "<br>");\n\n    // Fix lists\n    html = html\n      .replace(/<li>(.+)<\\\\/li>/g, function (m, content) {\n        return "<ul>" + m + "</ul>";\n      })\n      .replace(/<\\\\/ul><ul>/g, "");\n\n    return html;\n  }\n\n  // If in view mode, render the markdown content\n  if (viewMode && document) {\n    document.addEventListener("DOMContentLoaded", () => {\n      const contentElement = document.getElementById("markdown-content");\n      if (contentElement) {\n        contentElement.innerHTML = renderMarkdown(document.content || "");\n      }\n    });\n  }\n})();<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": `${document.title || "Untitled Document"} - Documentation Platform`, "description": `Documentation for ${project.name}`, "data-astro-cid-5eg4k6k3": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8" data-astro-cid-5eg4k6k3> <div class="mb-8" data-astro-cid-5eg4k6k3> <div class="text-sm breadcrumbs mb-2" data-astro-cid-5eg4k6k3> <a href="/docs/dashboard" class="text-gray-500 hover:text-gray-700" data-astro-cid-5eg4k6k3>Dashboard</a> <span class="mx-2 text-gray-400" data-astro-cid-5eg4k6k3>/</span> <a${addAttribute(`/docs/workspaces/${workspace?.id}`, "href")} class="text-gray-500 hover:text-gray-700" data-astro-cid-5eg4k6k3>${workspace?.name}</a> <span class="mx-2 text-gray-400" data-astro-cid-5eg4k6k3>/</span> <a${addAttribute(`/docs/projects/${id}`, "href")} class="text-gray-500 hover:text-gray-700" data-astro-cid-5eg4k6k3>${project.name}</a> <span class="mx-2 text-gray-400" data-astro-cid-5eg4k6k3>/</span> <span class="text-gray-700" data-astro-cid-5eg4k6k3>${document.title || "Untitled Document"}</span> </div> ${viewMode && renderTemplate`<div class="flex justify-between items-center" data-astro-cid-5eg4k6k3> <h1 class="text-3xl font-bold" data-astro-cid-5eg4k6k3> ${document.title || "Untitled Document"} </h1> <a${addAttribute(`/docs/projects/${id}/docs/${docId}`, "href")} class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium" data-astro-cid-5eg4k6k3>
Edit Document
</a> </div>`} </div> <div class="bg-white rounded-lg shadow-sm p-6" data-astro-cid-5eg4k6k3> ${viewMode ? renderTemplate`<div class="prose max-w-none" id="markdown-content" data-astro-cid-5eg4k6k3></div>` : renderTemplate`${renderComponent($$result2, "DocEditor", DocEditor, { "client:load": true, "documentationId": docId, "initialContent": document.content, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/DocEditor", "client:component-export": "default", "data-astro-cid-5eg4k6k3": true })}`} </div> </main> ` }), defineScriptVars({ id, docId }), defineScriptVars({ viewMode, document }));
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/docs/[docId].astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/projects/[id]/docs/[docId].astro";
const $$url = "/docs/projects/[id]/docs/[docId]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$docId,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
