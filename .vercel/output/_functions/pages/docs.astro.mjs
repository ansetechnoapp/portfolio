/* empty css                                  */
import { a as createComponent, f as renderComponent, d as renderTemplate, m as maybeRenderHead, F as Fragment, b as addAttribute } from '../chunks/astro/server_De9sfnmM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DmUFuqmQ.mjs';
import { s as supabase } from '../chunks/supabase_tVI8Tn2x.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const { data: featuredProjects } = await supabase.from("projects").select(`
    id,
    name,
    description,
    logo_url,
    workspaces (
      name
    )
  `).eq("workspaces.is_public", true).limit(6);
  const { data: { session } } = await supabase.auth.getSession();
  const isLoggedIn = !!session;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Documentation Platform", "description": "Create, collaborate, and share documentation for your projects" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <section class="text-center py-16 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg mb-12"> <h1 class="text-4xl md:text-5xl font-bold mb-4">
Documentation Platform
</h1> <p class="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
Create, collaborate, and share documentation for your projectss
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${isLoggedIn ? renderTemplate`<a href="/docs/dashboard" class="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
Go to Dashboard
</a>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a href="/docs/login" class="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-md font-medium text-lg">
Sign In
</a> <a href="/docs/register" class="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium text-lg">
Create Account
</a> ` })}`} </div> </section> <section class="mb-16"> <h2 class="text-3xl font-bold mb-8 text-center">How It Works</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="text-center p-6 bg-white rounded-lg shadow-sm"> <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div> <h3 class="text-xl font-semibold mb-2">Create a Workspace</h3> <p class="text-gray-600">
Set up a workspace for your team or project to organize all your documentation in one place.
</p> </div> <div class="text-center p-6 bg-white rounded-lg shadow-sm"> <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div> <h3 class="text-xl font-semibold mb-2">Document Your Projects</h3> <p class="text-gray-600">
Create comprehensive documentation with our intuitive editor. Add code examples, images, and more.
</p> </div> <div class="text-center p-6 bg-white rounded-lg shadow-sm"> <div class="bg-indigo-100 text-indigo-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div> <h3 class="text-xl font-semibold mb-2">Collaborate & Share</h3> <p class="text-gray-600">
Invite team members to collaborate on documentation. Share public docs with the world.
</p> </div> </div> </section> ${featuredProjects && featuredProjects.length > 0 && renderTemplate`<section class="mb-16"> <h2 class="text-3xl font-bold mb-8 text-center">Featured Documentation</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${featuredProjects.map((project) => renderTemplate`<a${addAttribute(`/docs/projects/${project.id}`, "href")} class="block bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"> <div class="p-6"> <h3 class="text-xl font-semibold mb-2">${project.name}</h3> <p class="text-gray-500 text-sm mb-3"> ${project.workspaces?.name} </p> <p class="text-gray-600 line-clamp-3"> ${project.description} </p> </div> </a>`)} </div> <div class="text-center mt-8"> <a href="/docs/explore" class="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-medium">
Explore More Documentation
</a> </div> </section>`} <section class="bg-gray-50 rounded-lg p-8 mb-16"> <div class="max-w-3xl mx-auto text-center"> <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2> <p class="text-xl text-gray-600 mb-8">
Join our platform today and start creating beautiful documentation for your projects.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${isLoggedIn ? renderTemplate`<a href="/docs/dashboard" class="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-medium text-lg">
Go to Dashboard
</a>` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a href="/docs/login" class="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-md font-medium text-lg">
Sign In
</a> <a href="/docs/register" class="bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-md font-medium text-lg">
Create Account
</a> ` })}`} </div> </div> </section> </main> ` })}`;
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/index.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/index.astro";
const $$url = "/docs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
