/* empty css                                        */
import { c as createAstro, a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_ZODBcONi.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../../chunks/Layout_CN2odi0l.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase, a as hasWorkspaceAccess, b as getWorkspace } from '../../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../../renderers.mjs';

function ProjectManager({ workspaceId }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newProjectName, setNewProjectName] = useState("");
  const [newProjectDescription, setNewProjectDescription] = useState("");
  const [creating, setCreating] = useState(false);
  useEffect(() => {
    fetchProjects();
  }, [workspaceId]);
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("projects").select("*").eq("workspace_id", workspaceId);
      if (error) throw error;
      setProjects(data || []);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };
  const createProject = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const { data, error } = await supabase.from("projects").insert([
        {
          workspace_id: workspaceId,
          name: newProjectName,
          description: newProjectDescription
        }
      ]).select().single();
      if (error) throw error;
      setProjects([...projects, data]);
      setNewProjectName("");
      setNewProjectDescription("");
    } catch (err) {
      console.error("Error creating project:", err);
      alert(`Error creating project: ${err.message}`);
    } finally {
      setCreating(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "project-manager", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Projects" }),
    loading ? /* @__PURE__ */ jsx("p", { children: "Loading projects..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      projects.length === 0 ? /* @__PURE__ */ jsx("p", { children: "No projects in this workspace yet. Create one to get started!" }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: projects.map((project) => /* @__PURE__ */ jsxs("div", { className: "project-card border rounded-lg p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: project.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: project.description }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex space-x-4", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/docs/projects/${project.id}`,
              className: "text-indigo-600 hover:text-indigo-800",
              children: "View Project"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/docs/projects/${project.id}/docs`,
              className: "text-green-600 hover:text-green-800",
              children: "Documentation"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: `/docs/projects/${project.id}/api`,
              className: "text-blue-600 hover:text-blue-800",
              children: "API Docs"
            }
          )
        ] })
      ] }, project.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Create New Project" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: createProject, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium", children: "Project Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                type: "text",
                value: newProjectName,
                onChange: (e) => setNewProjectName(e.target.value),
                required: true,
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "description", className: "block text-sm font-medium", children: "Description" }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "description",
                value: newProjectDescription,
                onChange: (e) => setNewProjectDescription(e.target.value),
                className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm",
                rows: 3
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: creating,
              className: "py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              children: creating ? "Creating..." : "Create Project"
            }
          )
        ] })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://zoddev.site/");
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/docs/dashboard");
  }
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return Astro2.redirect("/docs/login");
  }
  const hasAccess = await hasWorkspaceAccess(id);
  if (!hasAccess) {
    return Astro2.redirect("/docs/dashboard");
  }
  let workspace;
  try {
    workspace = await getWorkspace(id);
  } catch (error) {
    console.error("Error fetching workspace:", error);
    return Astro2.redirect("/docs/dashboard");
  }
  const { data: members } = await supabase.from("workspace_members").select(`
    user_id,
    role,
    users (
      username,
      display_name,
      avatar_url
    )
  `).eq("workspace_id", id);
  const isOwner = workspace.owner_id === session.user.id;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${workspace.name} - Documentation Platform`, "description": workspace.description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <div class="flex items-center justify-between"> <div> <h1 class="text-3xl font-bold">${workspace.name}</h1> <p class="text-gray-600 mt-2"> ${workspace.description} </p> </div> ${isOwner && renderTemplate`<a${addAttribute(`/docs/workspaces/${id}/settings`, "href")} class="bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium">
Workspace Settings
</a>`} </div> </div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-3"> ${renderComponent($$result2, "ProjectManager", ProjectManager, { "client:load": true, "workspaceId": id, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/ProjectManager", "client:component-export": "default" })} </div> <div class="lg:col-span-1"> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-xl font-semibold mb-4">Workspace Members</h2> <ul class="space-y-3">  <li class="flex items-center"> <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-3"> ${workspace.owner_id === session.user.id ? "You" : "O"} </div> <div> <p class="font-medium"> ${workspace.owner_id === session.user.id ? "You" : "Owner"} </p> <p class="text-xs text-gray-500">Owner</p> </div> </li>  ${members && members.map((member) => renderTemplate`<li class="flex items-center"> <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3"> ${member.users?.display_name?.charAt(0) || "U"} </div> <div> <p class="font-medium"> ${member.user_id === session.user.id ? "You" : member.users?.display_name} </p> <p class="text-xs text-gray-500 capitalize">${member.role}</p> </div> </li>`)} </ul> ${isOwner && renderTemplate`<div class="mt-4"> <a${addAttribute(`/docs/workspaces/${id}/members`, "href")} class="text-indigo-600 hover:text-indigo-800 text-sm">
Manage Members
</a> </div>`} </div> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Quick Actions</h2> <ul class="space-y-2"> <li> <a href="/docs/dashboard" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path> </svg>
Back to Dashboard
</a> </li> <li> <a${addAttribute(`/docs/workspaces/${id}/activity`, "href")} class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path> </svg>
Activity Log
</a> </li> </ul> </div> </div> </div> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/workspaces/[id].astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/workspaces/[id].astro";
const $$url = "/docs/workspaces/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
