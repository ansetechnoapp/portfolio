import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { s as supabase } from './supabase_B2xMZoNq.mjs';

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error: error2 } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error2) throw error2;
      window.location.href = "/docs/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSignIn, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "email",
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium", children: "Password" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password",
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: error }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        children: loading ? "Signing in..." : "Sign In"
      }
    )
  ] });
}
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password
      });
      if (authError) throw authError;
      if (authData?.user) {
        const { error: profileError } = await supabase.from("users").insert([
          {
            id: authData.user.id,
            username,
            display_name: displayName
          }
        ]);
        if (profileError) throw profileError;
      }
      window.location.href = "/docs/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSignUp, className: "space-y-4", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium", children: "Email" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "email",
          type: "email",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "username", className: "block text-sm font-medium", children: "Username" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "username",
          type: "text",
          value: username,
          onChange: (e) => setUsername(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "displayName", className: "block text-sm font-medium", children: "Display Name" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "displayName",
          type: "text",
          value: displayName,
          onChange: (e) => setDisplayName(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "block text-sm font-medium", children: "Password" }),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "password",
          type: "password",
          value: password,
          onChange: (e) => setPassword(e.target.value),
          required: true,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        }
      )
    ] }),
    error && /* @__PURE__ */ jsx("div", { className: "text-red-500 text-sm", children: error }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: loading,
        className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
        children: loading ? "Signing up..." : "Sign Up"
      }
    )
  ] });
}

export { SignIn as S, SignUp as a };
