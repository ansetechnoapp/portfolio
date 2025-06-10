import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Ck9qCgN3.mjs';
import { manifest } from './manifest_BkK_l4uJ.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page4 = () => import('./pages/demo-images.astro.mjs');
const _page5 = () => import('./pages/docs/dashboard.astro.mjs');
const _page6 = () => import('./pages/docs/login.astro.mjs');
const _page7 = () => import('./pages/docs/projects/_id_/api/new.astro.mjs');
const _page8 = () => import('./pages/docs/projects/_id_/api/_endpointid_.astro.mjs');
const _page9 = () => import('./pages/docs/projects/_id_/docs/new.astro.mjs');
const _page10 = () => import('./pages/docs/projects/_id_/docs/_docid_.astro.mjs');
const _page11 = () => import('./pages/docs/projects/_id_.astro.mjs');
const _page12 = () => import('./pages/docs/register.astro.mjs');
const _page13 = () => import('./pages/docs/register-confirmation.astro.mjs');
const _page14 = () => import('./pages/docs/reset-password.astro.mjs');
const _page15 = () => import('./pages/docs/reset-password-request.astro.mjs');
const _page16 = () => import('./pages/docs/verify-email.astro.mjs');
const _page17 = () => import('./pages/docs/verify-email-request.astro.mjs');
const _page18 = () => import('./pages/docs/workspaces/_id_.astro.mjs');
const _page19 = () => import('./pages/docs.astro.mjs');
const _page20 = () => import('./pages/generalfedapaycallback.astro.mjs');
const _page21 = () => import('./pages/portfolio/blog-2-col.astro.mjs');
const _page22 = () => import('./pages/portfolio/blog-3-col.astro.mjs');
const _page23 = () => import('./pages/portfolio/blog-post.astro.mjs');
const _page24 = () => import('./pages/portfolio/contact.astro.mjs');
const _page25 = () => import('./pages/portfolio/cv.astro.mjs');
const _page26 = () => import('./pages/portfolio/history.astro.mjs');
const _page27 = () => import('./pages/portfolio/onepage.astro.mjs');
const _page28 = () => import('./pages/portfolio/portfolio-2-col.astro.mjs');
const _page29 = () => import('./pages/portfolio/portfolio-2-col-masonry.astro.mjs');
const _page30 = () => import('./pages/portfolio/portfolio-3-col.astro.mjs');
const _page31 = () => import('./pages/portfolio/portfolio-3-col-masonry.astro.mjs');
const _page32 = () => import('./pages/portfolio/portfolio-single.astro.mjs');
const _page33 = () => import('./pages/portfolio/portfolio-single-2.astro.mjs');
const _page34 = () => import('./pages/widgetcss.astro.mjs');
const _page35 = () => import('./pages/work.astro.mjs');
const _page36 = () => import('./pages/work/_---slug_.astro.mjs');
const _page37 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.9.0_@types+node@22._ecbbae974f47d430c2c9b6d84c1d710c/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/demo-images.astro", _page4],
    ["src/pages/docs/dashboard.astro", _page5],
    ["src/pages/docs/login.astro", _page6],
    ["src/pages/docs/projects/[id]/api/new.astro", _page7],
    ["src/pages/docs/projects/[id]/api/[endpointId].astro", _page8],
    ["src/pages/docs/projects/[id]/docs/new.astro", _page9],
    ["src/pages/docs/projects/[id]/docs/[docId].astro", _page10],
    ["src/pages/docs/projects/[id]/index.astro", _page11],
    ["src/pages/docs/register.astro", _page12],
    ["src/pages/docs/register-confirmation.astro", _page13],
    ["src/pages/docs/reset-password.astro", _page14],
    ["src/pages/docs/reset-password-request.astro", _page15],
    ["src/pages/docs/verify-email.astro", _page16],
    ["src/pages/docs/verify-email-request.astro", _page17],
    ["src/pages/docs/workspaces/[id].astro", _page18],
    ["src/pages/docs/index.astro", _page19],
    ["src/pages/generalFedapayCallback.astro", _page20],
    ["src/pages/portfolio/blog-2-col.astro", _page21],
    ["src/pages/portfolio/blog-3-col.astro", _page22],
    ["src/pages/portfolio/blog-post.astro", _page23],
    ["src/pages/portfolio/contact.astro", _page24],
    ["src/pages/portfolio/Cv.astro", _page25],
    ["src/pages/portfolio/history.astro", _page26],
    ["src/pages/portfolio/onepage.astro", _page27],
    ["src/pages/portfolio/portfolio-2-col.astro", _page28],
    ["src/pages/portfolio/portfolio-2-col-masonry.astro", _page29],
    ["src/pages/portfolio/portfolio-3-col.astro", _page30],
    ["src/pages/portfolio/portfolio-3-col-masonry.astro", _page31],
    ["src/pages/portfolio/portfolio-single.astro", _page32],
    ["src/pages/portfolio/portfolio-single-2.astro", _page33],
    ["src/pages/widgetCss.astro", _page34],
    ["src/pages/work.astro", _page35],
    ["src/pages/work/[...slug].astro", _page36],
    ["src/pages/index.astro", _page37]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "58d6034a-4e26-41f1-b5a2-3d12a241b4eb",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
