import { jsxs, jsx } from 'react/jsx-runtime';
import * as React from 'react';
import { c as cn } from './button_DWgDRuZ-.mjs';
import { cva } from 'class-variance-authority';

const Input = React.forwardRef(
  ({ className, type, error, icon, ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
      icon && /* @__PURE__ */ jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500", children: icon }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type,
          className: cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            icon && "pl-10",
            error && "border-red-500 focus-visible:ring-red-500",
            className
          ),
          ref,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsxs("div", { className: "mt-1 text-sm text-red-500 flex items-center gap-1", children: [
        /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-alert-circle", children: [
          /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }),
          /* @__PURE__ */ jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })
        ] }),
        error
      ] })
    ] });
  }
);
Input.displayName = "Input";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        success: "border-green-500/50 text-green-700 dark:border-green-500 dark:text-green-400 [&>svg]:text-green-500",
        warning: "border-yellow-500/50 text-yellow-700 dark:border-yellow-500 dark:text-yellow-400 [&>svg]:text-yellow-500",
        info: "border-blue-500/50 text-blue-700 dark:border-blue-500 dark:text-blue-400 [&>svg]:text-blue-500"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

function Spinner({ className, size = "md", ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]",
        size === "sm" && "h-4 w-4 border-2",
        size === "md" && "h-6 w-6 border-2",
        size === "lg" && "h-8 w-8 border-3",
        className
      ),
      role: "status",
      ...props,
      children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Chargement..." })
    }
  );
}

export { Alert as A, Input as I, Spinner as S, AlertTitle as a, AlertDescription as b };
