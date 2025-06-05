import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from './supabase_B2xMZoNq.mjs';
import { A as Alert, a as AlertTitle, b as AlertDescription, I as Input, S as Spinner } from './spinner_w50AGODu.mjs';
import { c as cn, B as Button } from './button_DWgDRuZ-.mjs';

function PasswordStrength({ password, className }) {
  const strength = calculatePasswordStrength(password);
  return /* @__PURE__ */ jsxs("div", { className: cn("mt-2", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Force du mot de passe" }),
      /* @__PURE__ */ jsxs("span", { className: "text-xs font-medium", children: [
        strength === 0 && "Très faible",
        strength === 1 && "Faible",
        strength === 2 && "Moyen",
        strength === 3 && "Fort",
        strength === 4 && "Très fort"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full h-1.5 bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "h-full transition-all duration-300",
          strength === 0 && "w-1/5 bg-red-500",
          strength === 1 && "w-2/5 bg-orange-500",
          strength === 2 && "w-3/5 bg-yellow-500",
          strength === 3 && "w-4/5 bg-lime-500",
          strength === 4 && "w-full bg-green-500"
        )
      }
    ) }),
    password && /* @__PURE__ */ jsxs("ul", { className: "mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs", children: [
      /* @__PURE__ */ jsxs("li", { className: cn("flex items-center gap-1", password.length >= 8 ? "text-green-500" : "text-gray-500"), children: [
        /* @__PURE__ */ jsx(CheckIcon, { className: password.length >= 8 ? "text-green-500" : "text-gray-300" }),
        "Minimum 8 caractères"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: cn("flex items-center gap-1", /[A-Z]/.test(password) ? "text-green-500" : "text-gray-500"), children: [
        /* @__PURE__ */ jsx(CheckIcon, { className: /[A-Z]/.test(password) ? "text-green-500" : "text-gray-300" }),
        "Une majuscule"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: cn("flex items-center gap-1", /[0-9]/.test(password) ? "text-green-500" : "text-gray-500"), children: [
        /* @__PURE__ */ jsx(CheckIcon, { className: /[0-9]/.test(password) ? "text-green-500" : "text-gray-300" }),
        "Un chiffre"
      ] }),
      /* @__PURE__ */ jsxs("li", { className: cn("flex items-center gap-1", /[^A-Za-z0-9]/.test(password) ? "text-green-500" : "text-gray-500"), children: [
        /* @__PURE__ */ jsx(CheckIcon, { className: /[^A-Za-z0-9]/.test(password) ? "text-green-500" : "text-gray-300" }),
        "Un caractère spécial"
      ] })
    ] })
  ] });
}
function calculatePasswordStrength(password) {
  if (!password) return 0;
  let strength = 0;
  if (password.length >= 8) strength += 1;
  if (/[A-Z]/.test(password)) strength += 1;
  if (/[0-9]/.test(password)) strength += 1;
  if (/[^A-Za-z0-9]/.test(password)) strength += 1;
  return strength;
}
function CheckIcon({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;
  return passwordRegex.test(password);
};
function RequestPasswordReset() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  useEffect(() => {
    setEmailError(null);
    setError(null);
  }, [email]);
  const handleRequestReset = async (e) => {
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
      const { error: error2 } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/docs/reset-password`
      });
      if (error2) {
        throw error2;
      }
      setSuccess(true);
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi de l'email. Veuillez réessayer.");
      console.error("Password reset request error:", err);
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
        "Un email de réinitialisation de mot de passe a été envoyé à ",
        email,
        ". Veuillez vérifier votre boîte de réception et suivre les instructions pour réinitialiser votre mot de passe."
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
    /* @__PURE__ */ jsxs("form", { onSubmit: handleRequestReset, className: "space-y-4", children: [
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
          ] }) : "Réinitialiser le mot de passe"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
      "Vous vous souvenez de votre mot de passe ?",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/docs/login", className: "text-indigo-600 hover:text-indigo-800 font-medium", children: "Se connecter" })
    ] }) })
  ] });
}
function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    if (password && !validatePassword(password)) {
      setPasswordError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");
    } else {
      setPasswordError(null);
    }
  }, [password]);
  useEffect(() => {
    if (password && confirmPassword && password !== confirmPassword) {
      setConfirmPasswordError("Les mots de passe ne correspondent pas");
    } else {
      setConfirmPasswordError(null);
    }
  }, [password, confirmPassword]);
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    let isValid = true;
    if (!password) {
      setPasswordError("Le mot de passe est requis");
      isValid = false;
    } else if (!validatePassword(password)) {
      setPasswordError("Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un caractère spécial");
      isValid = false;
    }
    if (!confirmPassword) {
      setConfirmPasswordError("La confirmation du mot de passe est requise");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Les mots de passe ne correspondent pas");
      isValid = false;
    }
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const { error: error2 } = await supabase.auth.updateUser({
        password
      });
      if (error2) {
        throw error2;
      }
      setSuccess(true);
      setTimeout(() => {
        window.location.href = "/docs/login";
      }, 3e3);
    } catch (err) {
      setError("Une erreur s'est produite lors de la mise à jour du mot de passe. Veuillez réessayer.");
      console.error("Password update error:", err);
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
      /* @__PURE__ */ jsx(AlertTitle, { children: "Mot de passe mis à jour !" }),
      /* @__PURE__ */ jsx(AlertDescription, { children: "Votre mot de passe a été mis à jour avec succès. Vous allez être redirigé vers la page de connexion..." })
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
    /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdatePassword, className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium mb-1", children: "Nouveau mot de passe" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password",
              type: showPassword ? "text" : "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              error: passwordError || void 0,
              icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-lock", children: [
                /* @__PURE__ */ jsx("rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500",
              onClick: () => setShowPassword(!showPassword),
              children: showPassword ? /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-eye-off", children: [
                /* @__PURE__ */ jsx("path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24" }),
                /* @__PURE__ */ jsx("path", { d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" }),
                /* @__PURE__ */ jsx("path", { d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" }),
                /* @__PURE__ */ jsx("line", { x1: "2", x2: "22", y1: "2", y2: "22" })
              ] }) : /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-eye", children: [
                /* @__PURE__ */ jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "3" })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(PasswordStrength, { password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { htmlFor: "confirmPassword", className: "block text-sm font-medium mb-1", children: "Confirmer le mot de passe" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "confirmPassword",
            type: showPassword ? "text" : "password",
            value: confirmPassword,
            onChange: (e) => setConfirmPassword(e.target.value),
            error: confirmPasswordError || void 0,
            icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-shield-check", children: [
              /* @__PURE__ */ jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" }),
              /* @__PURE__ */ jsx("path", { d: "m9 12 2 2 4-4" })
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
            "Mise à jour en cours..."
          ] }) : "Mettre à jour le mot de passe"
        }
      )
    ] })
  ] });
}

export { RequestPasswordReset as R, UpdatePassword as U };
