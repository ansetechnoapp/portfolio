import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.Dj3USz-F.js";import{M as v}from"./Modal.BxfOC8iW.js";import"./_commonjsHelpers.gnU0ypJ3.js";const y=({images:r,className:d="",class:g="",columns:h=3})=>{const[n,s]=c.useState(null),[o,a]=c.useState(0),x=(t,l)=>{s(t),a(l)},u=()=>{s(null)},i=t=>{const l=t==="prev"?(o-1+r.length)%r.length:(o+1)%r.length;a(l),s(r[l])},m={2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 lg:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 lg:grid-cols-4"},p=`image-gallery ${d} ${g}`.trim();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:p,children:e.jsx("div",{className:`grid ${m[h]} gap-4`,children:r.map((t,l)=>e.jsxs("div",{className:`
                gallery-item group cursor-pointer rounded-lg overflow-hidden 
                bg-gray-100 dark:bg-gray-800 aspect-video relative
                hover:shadow-xl transition-all duration-300
              `,onClick:()=>x(t,l),children:[e.jsx("img",{src:t.url,alt:t.alt,className:`
                  w-full h-full object-cover transition-transform duration-300 
                  group-hover:scale-105
                `,loading:"lazy"}),e.jsx("div",{className:`
                absolute inset-0 bg-black/0 group-hover:bg-black/20 
                transition-colors duration-300 flex items-center justify-center
              `,children:e.jsx("div",{className:`
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  bg-white/90 dark:bg-gray-800/90 rounded-full p-3
                `,children:e.jsx("svg",{className:"w-6 h-6 text-gray-800 dark:text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"})})})}),t.caption&&e.jsx("div",{className:`
                  absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                  from-black/70 to-transparent p-4 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-300
                `,children:e.jsx("p",{className:"text-white text-sm font-medium",children:t.caption})})]},l))})}),e.jsx(v,{isOpen:!!n,onClose:u,title:n?.alt||"Image",size:"xl",children:n&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:n.url,alt:n.alt,className:"w-full h-auto max-h-[70vh] object-contain rounded-lg"}),r.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>i("prev"),className:`
                      absolute left-4 top-1/2 -translate-y-1/2 
                      bg-black/50 hover:bg-black/70 text-white 
                      rounded-full p-2 transition-colors
                    `,"aria-label":"Previous image",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsx("button",{onClick:()=>i("next"),className:`
                      absolute right-4 top-1/2 -translate-y-1/2 
                      bg-black/50 hover:bg-black/70 text-white 
                      rounded-full p-2 transition-colors
                    `,"aria-label":"Next image",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]})]}),n.caption&&e.jsx("div",{className:"text-center",children:e.jsx("p",{className:"text-gray-600 dark:text-gray-300 italic",children:n.caption})}),r.length>1&&e.jsxs("div",{className:"text-center text-sm text-gray-500 dark:text-gray-400",children:[o+1," of ",r.length]})]})})]})};export{y as default};
