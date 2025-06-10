import { g as getCollection } from '../../chunks/_astro_content_Dy1jysvj.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async () => {
  try {
    const projects = await getCollection("work");
    const sortedProjects = projects.sort((a, b) => b.data.number - a.data.number).map((project) => ({
      slug: project.slug,
      title: project.data.title,
      number: project.data.number
    }));
    return new Response(JSON.stringify(sortedProjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
        // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch projects" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
