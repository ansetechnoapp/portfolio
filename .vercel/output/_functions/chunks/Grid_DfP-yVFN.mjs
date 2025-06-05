import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_n6hXvmcT.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Astro = createAstro("https://zoddev.site/");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([
    "grid",
    { offset: variant === "offset", small: variant === "small" }
  ], "class:list")} data-astro-cid-vc5tsdmu> ${renderSlot($$result, $$slots["default"])} </ul> `;
}, "C:/Users/kevin/Allproject/portfolio/src/components/Grid.astro", void 0);

export { $$Grid as $ };
