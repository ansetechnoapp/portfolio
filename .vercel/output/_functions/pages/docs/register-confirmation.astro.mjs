/* empty css                                     */
import { c as createAstro, a as createComponent, d as renderTemplate, g as defineScriptVars, f as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_De9sfnmM.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_DmUFuqmQ.mjs';
import { s as supabase } from '../../chunks/supabase_tVI8Tn2x.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../../chunks/card_BYgLF5Uw.mjs';
import { B as Button } from '../../chunks/button_DWgDRuZ-.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://zoddev.site/");
const $$RegisterConfirmation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$RegisterConfirmation;
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    return Astro2.redirect("/docs/dashboard");
  }
  const email = Astro2.url.searchParams.get("email") || "";
  return renderTemplate(_a || (_a = __template(["", " <script>(function(){", `
  import { supabase } from "../../lib/supabase";
  
  // G\xE9rer le renvoi de l'email de v\xE9rification
  document.getElementById('resend-button')?.addEventListener('click', async () => {
    if (!email) {
      alert("Adresse email manquante. Veuillez retourner \xE0 la page d'inscription.");
      return;
    }
    
    const button = document.getElementById('resend-button');
    if (button) {
      button.disabled = true;
      button.textContent = "Envoi en cours...";
    }
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: \`\${window.location.origin}/docs/verify-email\`,
        },
      });
      
      if (error) {
        throw error;
      }
      
      alert("Un nouvel email de v\xE9rification a \xE9t\xE9 envoy\xE9. Veuillez v\xE9rifier votre bo\xEEte de r\xE9ception.");
    } catch (err) {
      console.error('Error resending verification email:', err);
      alert("Une erreur s'est produite lors de l'envoi de l'email. Veuillez r\xE9essayer.");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = "Renvoyer l'email de v\xE9rification";
      }
    }
  });
})();<\/script>`], ["", " <script>(function(){", `
  import { supabase } from "../../lib/supabase";
  
  // G\xE9rer le renvoi de l'email de v\xE9rification
  document.getElementById('resend-button')?.addEventListener('click', async () => {
    if (!email) {
      alert("Adresse email manquante. Veuillez retourner \xE0 la page d'inscription.");
      return;
    }
    
    const button = document.getElementById('resend-button');
    if (button) {
      button.disabled = true;
      button.textContent = "Envoi en cours...";
    }
    
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: \\\`\\\${window.location.origin}/docs/verify-email\\\`,
        },
      });
      
      if (error) {
        throw error;
      }
      
      alert("Un nouvel email de v\xE9rification a \xE9t\xE9 envoy\xE9. Veuillez v\xE9rifier votre bo\xEEte de r\xE9ception.");
    } catch (err) {
      console.error('Error resending verification email:', err);
      alert("Une erreur s'est produite lors de l'envoi de l'email. Veuillez r\xE9essayer.");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = "Renvoyer l'email de v\xE9rification";
      }
    }
  });
})();<\/script>`])), renderComponent($$result, "Layout", $$Layout, { "title": "Confirmation d'inscription - Plateforme de Documentation", "description": "Confirmation d'inscription sur la plateforme de documentation collaborative" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <div class="max-w-md mx-auto"> ${renderComponent($$result2, "Card", Card, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "CardHeader", CardHeader, { "className": "text-center" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "CardTitle", CardTitle, { "className": "text-2xl" }, { "default": async ($$result5) => renderTemplate`Inscription réussie !` })} ${renderComponent($$result4, "CardDescription", CardDescription, {}, { "default": async ($$result5) => renderTemplate`
Merci de vous être inscrit sur notre plateforme de documentation collaborative.
` })} ` })} ${renderComponent($$result3, "CardContent", CardContent, { "className": "space-y-4" }, { "default": async ($$result4) => renderTemplate` <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800"> <div class="flex items-center mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> <span class="font-medium">Votre compte a été créé avec succès</span> </div> <p class="text-sm">
Un email de vérification a été envoyé à <span class="font-medium">${email}</span>. Veuillez cliquer sur le lien dans cet email pour activer votre compte.
</p> </div> <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800"> <div class="flex items-center mb-2"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"> <circle cx="12" cy="12" r="10"></circle> <line x1="12" y1="8" x2="12" y2="12"></line> <line x1="12" y1="16" x2="12.01" y2="16"></line> </svg> <span class="font-medium">Prochaines étapes</span> </div> <ol class="text-sm list-decimal list-inside space-y-1"> <li>Vérifiez votre boîte de réception pour l'email de confirmation</li> <li>Vérifiez également votre dossier de spam si vous ne trouvez pas l'email</li> <li>Cliquez sur le lien dans l'email pour activer votre compte</li> <li>Connectez-vous à votre compte une fois activé</li> </ol> </div> ` })} ${renderComponent($$result3, "CardFooter", CardFooter, { "className": "flex flex-col space-y-2" }, { "default": async ($$result4) => renderTemplate` ${renderComponent($$result4, "Button", Button, { "id": "resend-button", "className": "w-full", "variant": "outline" }, { "default": async ($$result5) => renderTemplate`
Renvoyer l'email de vérification
` })} <a href="/docs/login" class="w-full"> ${renderComponent($$result4, "Button", Button, { "className": "w-full", "variant": "default" }, { "default": async ($$result5) => renderTemplate`
Aller à la page de connexion
` })} </a> ` })} ` })} </div> </main> ` }), defineScriptVars({ email }));
}, "C:/Users/kevin/Allproject/portfolio/src/pages/docs/register-confirmation.astro", void 0);

const $$file = "C:/Users/kevin/Allproject/portfolio/src/pages/docs/register-confirmation.astro";
const $$url = "/docs/register-confirmation";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$RegisterConfirmation,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
