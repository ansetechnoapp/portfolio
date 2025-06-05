import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React__default, { useState } from 'react';
import { s as supabase } from './supabase_B2xMZoNq.mjs';
import { S as Spinner, A as Alert, a as AlertTitle, b as AlertDescription, I as Input } from './spinner_w50AGODu.mjs';
import { B as Button } from './button_DWgDRuZ-.mjs';

function RequestEmailVerification() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const handleRequestVerification = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (!email) {
      setEmailError("L'email est requis");
      isValid = false;
    } else {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(email)) {
        setEmailError("Format d'email invalide");
        isValid = false;
      }
    }
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const { error: error2 } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/docs/verify-email`
        }
      });
      if (error2) {
        throw error2;
      }
      setSuccess(true);
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi de l'email. Veuillez réessayer.");
      console.error("Email verification request error:", err);
    } finally {
      setLoading(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ jsxs(Alert, { variant: "success", className: "mb-4", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-circle", children: [
        /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
        /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
      ] }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Email envoyé !" }),
      /* @__PURE__ */ jsxs(AlertDescription, { children: [
        "Un nouvel email de vérification a été envoyé à ",
        email,
        ". Veuillez vérifier votre boîte de réception et suivre les instructions pour activer votre compte."
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    error && /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "mb-4", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-alert-circle", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
      ] }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Erreur" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: error })
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleRequestVerification, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1", children: "Email" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "votre@email.com",
            error: emailError || void 0,
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-mail", children: [
              /* @__PURE__ */ jsx("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
              /* @__PURE__ */ jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          disabled: loading,
          className: "w-full",
          children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Spinner, { size: "sm", className: "mr-2" }),
            "Envoi en cours..."
          ] }) : "Renvoyer l'email de vérification"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      "Retourner à la",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/docs/login", className: "text-indigo-600 hover:text-indigo-800 font-medium", children: "page de connexion" })
    ] }) })
  ] });
}
function EmailVerificationStatus() {
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);
  React__default.useEffect(() => {
    const checkVerificationStatus = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setVerified(true);
        } else {
          setError("La vérification de l'email a échoué ou le lien a expiré. Veuillez demander un nouvel email de vérification.");
        }
      } catch (err) {
        setError("Une erreur s'est produite lors de la vérification de l'email. Veuillez réessayer.");
        console.error("Email verification status error:", err);
      } finally {
        setLoading(false);
      }
    };
    checkVerificationStatus();
  }, []);
  if (loading) {
    return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-8", children: [
      /* @__PURE__ */ jsx(Spinner, { size: "lg", className: "mb-4" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Vérification de l'email en cours..." })
    ] });
  }
  if (error) {
    return /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "mb-4", children: [
      /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-alert-circle", children: [
        /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
      ] }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Erreur" }),
      /* @__PURE__ */ jsxs(AlertDescription, { children: [
        error,
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("a", { href: "/docs/verify-email-request", className: "text-white underline", children: "Demander un nouvel email de vérification" }) })
      ] })
    ] });
  }
  if (verified) {
    return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs(Alert, { variant: "success", className: "mb-4", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-check-circle", children: [
          /* @__PURE__ */ jsx("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
          /* @__PURE__ */ jsx("polyline", { points: "22 4 12 14.01 9 11.01" })
        ] }),
        /* @__PURE__ */ jsx(AlertTitle, { children: "Email vérifié !" }),
        /* @__PURE__ */ jsx(AlertDescription, { children: "Votre email a été vérifié avec succès. Vous pouvez maintenant vous connecter à votre compte." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => window.location.href = "/docs/login",
          className: "px-6",
          children: "Se connecter"
        }
      ) })
    ] });
  }
  return null;
}

export { EmailVerificationStatus as E, RequestEmailVerification as R };
