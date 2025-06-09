import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as d}from"./index.Dj3USz-F.js";import{M as c}from"./Modal.BxfOC8iW.js";import"./_commonjsHelpers.gnU0ypJ3.js";const p=({features:n,className:t=""})=>{const[r,i]=d.useState(null),o=s=>{i(s)},a=()=>{i(null)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`project-features ${t}`,children:e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map(s=>e.jsx("div",{className:`
                feature-card group bg-white dark:bg-gray-800 rounded-xl p-6 
                shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer
                border border-gray-200 dark:border-gray-700 hover:border-indigo-300
                dark:hover:border-indigo-600
              `,onClick:()=>o(s),children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:`
                  flex-shrink-0 w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30
                  rounded-lg flex items-center justify-center text-indigo-600
                  dark:text-indigo-400 group-hover:scale-110 transition-transform
                `,children:s.icon||e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:`
                    text-lg font-semibold text-gray-900 dark:text-white 
                    group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                    transition-colors mb-2
                  `,children:s.title}),e.jsx("p",{className:`
                    text-gray-600 dark:text-gray-300 text-sm leading-relaxed 
                    line-clamp-3
                  `,children:s.description}),e.jsxs("div",{className:`
                    mt-4 flex items-center text-indigo-600 dark:text-indigo-400 
                    text-sm font-medium group-hover:gap-2 transition-all
                  `,children:[e.jsx("span",{children:"Learn more"}),e.jsx("svg",{className:"w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})]})]})]})},s.id))})}),e.jsx(c,{isOpen:!!r,onClose:a,title:r?.title||"",size:"lg",children:r&&e.jsxs("div",{className:"space-y-6",children:[r.image&&e.jsx("div",{className:"aspect-video rounded-lg overflow-hidden",children:e.jsx("img",{src:r.image,alt:r.title,className:"w-full h-full object-cover"})}),e.jsx("div",{className:"prose dark:prose-invert max-w-none",children:e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 leading-relaxed",children:r.details})}),r.technologies&&r.technologies.length>0&&e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:"Technologies Used"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.technologies.map((s,l)=>e.jsx("span",{className:`
                        px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 
                        text-indigo-700 dark:text-indigo-300 text-sm 
                        rounded-full font-medium
                      `,children:s},l))})]})]})})]})};export{p as default};
