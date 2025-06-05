import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

function PortfolioPreview({ project, activeFilter = "all" }) {
  const { data, slug } = project;
  const [currentFilter, setCurrentFilter] = useState(activeFilter);
  useEffect(() => {
    const handleFilterChange = (e) => {
      setCurrentFilter(e.detail);
    };
    const portfolioSection = document.getElementById("portfolio-section");
    portfolioSection?.addEventListener("filterChange", handleFilterChange);
    return () => {
      portfolioSection?.removeEventListener("filterChange", handleFilterChange);
    };
  }, []);
  if (currentFilter !== "all" && data.device !== currentFilter) {
    return null;
  }
  return /* @__PURE__ */ jsxs("article", { className: "portfolio_item", children: [
    /* @__PURE__ */ jsxs("div", { className: "portfolio_item-image", children: [
      /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx(
          "source",
          {
            type: "image/avif",
            srcSet: `${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.avif")} 1x, ${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.avif")} 640w, ${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.avif")} 1024w`,
            sizes: "(max-width: 768px) 100vw, 400px"
          }
        ),
        /* @__PURE__ */ jsx(
          "source",
          {
            type: "image/webp",
            srcSet: `${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_optimized.webp")} 1x, ${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_640w.webp")} 640w, ${data.img.replace(/\.(jpg|jpeg|png|gif)$/i, "_1024w.webp")} 1024w`,
            sizes: "(max-width: 768px) 100vw, 400px"
          }
        ),
        /* @__PURE__ */ jsx("img", { src: data.img, alt: data.img_alt || "", loading: "lazy", decoding: "async" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "layer", children: [
        /* @__PURE__ */ jsx("p", { children: data.description }),
        /* @__PURE__ */ jsx("a", { href: `/work/${slug}`, "aria-label": `View details for ${data.title}`, children: /* @__PURE__ */ jsx("i", { className: "fas fa-external-link-alt px-2" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1.5 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold leading-none tracking-tight", children: data.title }),
        /* @__PURE__ */ jsx("span", { id: "project_device_info", className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full", children: data.device })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm projetdesc", children: data.description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: data.tech.slice(0, 3).map((tech, index) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded",
          children: tech
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "items-center p-6 pt-0 flex justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        data.github && /* @__PURE__ */ jsxs(
          "a",
          {
            href: data.github,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-sm text-primary hover:underline",
            "aria-label": `View GitHub repository for ${data.title}`,
            children: [
              /* @__PURE__ */ jsx("i", { className: "fab fa-github px-2" }),
              "GitHub"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `/work/${slug}`,
            className: "text-sm text-primary hover:underline",
            "aria-label": `View details for ${data.title}`,
            children: [
              /* @__PURE__ */ jsx("i", { className: "fa-solid fa-circle-info px-2" }),
              "Details"
            ]
          }
        )
      ] }),
      data.liveDemo && /* @__PURE__ */ jsxs(
        "a",
        {
          href: data.liveDemo,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-sm text-primary hover:underline",
          "aria-label": `View live demo of ${data.title}`,
          children: [
            /* @__PURE__ */ jsx("i", { className: "fas fa-external-link-alt px-2" }),
            "Live Demo"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
          .projetdesc {
            color: var(--gray-0);
          }
        ` })
  ] });
}

export { PortfolioPreview as P };
