import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as l}from"./index.Dj3USz-F.js";const h=({isOpen:t,onClose:a,title:o,children:d,size:s="md"})=>{const n=l.useRef(null);l.useEffect(()=>{const r=m=>{m.key==="Escape"&&a()};return t&&(document.addEventListener("keydown",r),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",r),document.body.style.overflow="unset"}},[t,a]);const i=r=>{r.target===r.currentTarget&&a()};if(!t)return null;const c={sm:"max-w-md",md:"max-w-2xl",lg:"max-w-4xl",xl:"max-w-6xl"};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",onClick:i,role:"dialog","aria-modal":"true","aria-labelledby":"modal-title",children:e.jsxs("div",{ref:n,className:`
          relative w-full ${c[s]} max-h-[90vh] 
          bg-white dark:bg-gray-800 rounded-xl shadow-2xl 
          overflow-hidden animate-modal-enter
        `,children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[e.jsx("h2",{id:"modal-title",className:"text-xl font-semibold text-gray-900 dark:text-white",children:o}),e.jsx("button",{onClick:a,className:`
              p-2 rounded-lg text-gray-400 hover:text-gray-600 
              dark:hover:text-gray-200 hover:bg-gray-100 
              dark:hover:bg-gray-700 transition-colors
            `,"aria-label":"Close modal",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"p-6 overflow-y-auto max-h-[calc(90vh-120px)]",children:d})]})})};export{h as M};
