/* empty css                                     */
import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, d as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../../chunks/Layout_BwB_lZY-.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from '../../chunks/supabase_B2xMZoNq.mjs';
export { renderers } from '../../renderers.mjs';

function WorkspaceManager() {
  const [workspaces, setWorkspaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  const [newWorkspaceDescription, setNewWorkspaceDescription] = useState("");
  const [creating, setCreating] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    fetchWorkspaces();
  }, []);
  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      setUser(session.user);
    }
  };
  const fetchWorkspaces = async () => {
    setLoading(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setWorkspaces([]);
        return;
      }
      const { data: ownedWorkspaces, error: ownedError } = await supabase.from("workspaces").select("*").eq("owner_id", session.user.id);
      if (ownedError) throw ownedError;
      const { data: memberWorkspaces, error: memberError } = await supabase.from("workspace_members").select("workspaces(*)").eq("user_id", session.user.id);
      if (memberError) throw memberError;
      const memberWorkspacesData = memberWorkspaces?.map((item) => item.workspaces).filter(Boolean) || [];
      setWorkspaces([...ownedWorkspaces || [], ...memberWorkspacesData]);
    } catch (err) {
      console.error("Error fetching workspaces:", err);
    } finally {
      setLoading(false);
    }
  };
  const createWorkspace = async (e) => {
    e.preventDefault();
    setCreating(true);
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        throw new Error("You must be logged in to create a workspace");
      }
      const { data: workspace, error: workspaceError } = await supabase.from("workspaces").insert([
        {
          name: newWorkspaceName,
          description: newWorkspaceDescription,
          owner_id: session.user.id
        }
      ]).select().single();
      if (workspaceError) throw workspaceError;
      setWorkspaces([...workspaces, workspace]);
      setNewWorkspaceName("");
      setNewWorkspaceDescription("");
    } catch (err) {
      console.error("Error creating workspace:", err);
      alert(`Error creating workspace: ${err.message}`);
    } finally {
      setCreating(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "workspace-manager", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Your Workspaces" }),
    loading ? /* @__PURE__ */ jsx("p", { children: "Loading workspaces..." }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      workspaces.length === 0 ? /* @__PURE__ */ jsx("p", { children: "You don't have any workspaces yet. Create one to get started!" }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: workspaces.map((workspace) => /* @__PURE__ */ jsxs("div", { className: "workspace-card border rounded-lg p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: workspace.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: workspace.description }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: `/docs/workspaces/${workspace.id}`,
            className: "text-indigo-600 hover:text-indigo-800",
            children: "View Workspace →"
          }
        ) })
      ] }, workspace.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Create New Workspace" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: createWorkspace, className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium", children: "Workspace Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                type: "text",
                value: newWorkspaceName,
                onChange: (e) => setNewWorkspaceName(e.target.value),
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
                value: newWorkspaceDescription,
                onChange: (e) => setNewWorkspaceDescription(e.target.value),
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
              children: creating ? "Creating..." : "Create Workspace"
            }
          )
        ] })
      ] })
    ] })
  ] });
}

const $$Astro = createAstro("https://zoddev.site/");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    return Astro2.redirect("/docs/login");
  }
  const { data: userData } = await supabase.from("users").select("*").eq("id", session.user.id).single();
  const user = userData || { display_name: session.user.email };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dashboard - Documentation Platform", "description": "Manage your documentation workspaces and projects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="mb-8"> <h1 class="text-3xl font-bold">Welcome, ${user.display_name}!</h1> <p class="text-gray-600 mt-2">
Manage your documentation workspaces and projects
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <div class="lg:col-span-3"> ${renderComponent($$result2, "WorkspaceManager", WorkspaceManager, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/kevin/Allproject/portfolio/src/components/reactJS/WorkspaceManager", "client:component-export": "default" })} </div> <div class="lg:col-span-1"> <div class="bg-white rounded-lg shadow-sm p-6 mb-6"> <h2 class="text-xl font-semibold mb-4">Quick Actions</h2> <ul class="space-y-2"> <li> <a href="/docs/explore" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path> </svg>
Explore Public Documentation
</a> </li> <li> <a href="/docs/profile" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path> </svg>
Edit Profile
</a> </li> <li> <button id="logout-button" class="text-indigo-600 hover:text-indigo-800 flex items-center w-full text-left"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7z" clip-rule="evenodd"></path> <path d="M4 8a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1z"></path> </svg>
Sign Out
</button> </li> </ul> </div> <div class="bg-white rounded-lg shadow-sm p-6"> <h2 class="text-xl font-semibold mb-4">Help & Resources</h2> <ul class="space-y-2"> <li> <a href="/docs/guide" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path> </svg>
User Guide
</a> </li> <li> <a href="/docs/faq" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path> </svg>
FAQ
</a> </li> <li> <a href="/docs/contact" class="text-indigo-600 hover:text-indigo-800 flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg>
Contact Support
</a> </li> </ul> </div> </div> </div> </main> ` })} ${renderScript($$result, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/dashboard.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/dashboard.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/dashboard.astro";
const $$url = "/docs/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
