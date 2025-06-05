import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from './supabase_B2xMZoNq.mjs';

function DocEditor({ documentationId, initialContent = "", onSave }) {
  const [content, setContent] = useState(initialContent);
  const [title, setTitle] = useState("");
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [isPublished, setIsPublished] = useState(false);
  useEffect(() => {
    if (!initialContent) {
      loadContent();
    }
  }, [documentationId, initialContent]);
  const loadContent = async () => {
    try {
      const { data, error } = await supabase.from("documentation").select("content, title, updated_at, is_published").eq("id", documentationId).single();
      if (error) throw error;
      if (data) {
        setContent(data.content || "");
        setTitle(data.title || "");
        setLastSaved(new Date(data.updated_at));
        setIsPublished(data.is_published || false);
      }
    } catch (err) {
      console.error("Error loading documentation:", err);
    }
  };
  const saveContent = async () => {
    setSaving(true);
    try {
      const { error } = await supabase.from("documentation").update({
        content,
        title,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", documentationId);
      if (error) throw error;
      setLastSaved(/* @__PURE__ */ new Date());
      if (onSave) onSave(content);
    } catch (err) {
      console.error("Error saving documentation:", err);
    } finally {
      setSaving(false);
    }
  };
  const togglePublishStatus = async () => {
    try {
      const newStatus = !isPublished;
      const { error } = await supabase.from("documentation").update({
        is_published: newStatus,
        updated_at: (/* @__PURE__ */ new Date()).toISOString()
      }).eq("id", documentationId);
      if (error) throw error;
      setIsPublished(newStatus);
      setLastSaved(/* @__PURE__ */ new Date());
    } catch (err) {
      console.error("Error updating publish status:", err);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "doc-editor", children: [
    /* @__PURE__ */ jsx("div", { className: "editor-header mb-4", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: title,
        onChange: (e) => setTitle(e.target.value),
        placeholder: "Document Title",
        className: "text-2xl font-bold w-full border-b border-gray-300 pb-2 focus:outline-none focus:border-indigo-500"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "editor-toolbar flex items-center justify-between mb-4 p-2 bg-gray-50 rounded-md", children: [
      /* @__PURE__ */ jsxs("div", { className: "toolbar-buttons flex space-x-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "# Heading\n\n";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded",
            title: "Add Heading",
            children: "H1"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "## Subheading\n\n";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded",
            title: "Add Subheading",
            children: "H2"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "**Bold Text**";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded font-bold",
            title: "Bold",
            children: "B"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "*Italic Text*";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded italic",
            title: "Italic",
            children: "I"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "\n```\ncode block\n```\n";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded font-mono",
            title: "Code Block",
            children: "Code"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => {
              const newContent = content + "\n- List item 1\n- List item 2\n- List item 3\n";
              setContent(newContent);
            },
            className: "p-1 hover:bg-gray-200 rounded",
            title: "Bullet List",
            children: "• List"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "toolbar-actions flex items-center space-x-4", children: [
        lastSaved && /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500", children: [
          "Last saved: ",
          lastSaved.toLocaleTimeString()
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: togglePublishStatus,
            className: `px-3 py-1 rounded text-sm font-medium ${isPublished ? "bg-green-100 text-green-800 hover:bg-green-200" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`,
            children: isPublished ? "Published" : "Draft"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: saveContent,
            disabled: saving,
            className: "bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-1 rounded text-sm font-medium",
            children: saving ? "Saving..." : "Save"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "editor-content-wrapper grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx("div", { className: "editor-input", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          value: content,
          onChange: (e) => setContent(e.target.value),
          className: "w-full h-[600px] p-4 border rounded-md font-mono text-sm",
          placeholder: "Start writing your documentation here using Markdown..."
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "editor-preview bg-white border rounded-md p-4 h-[600px] overflow-auto prose", children: /* @__PURE__ */ jsx("div", { dangerouslySetInnerHTML: { __html: renderMarkdown(content) } }) })
    ] })
  ] });
}
function renderMarkdown(markdown) {
  let html = markdown.replace(/^# (.*$)/gm, "<h1>$1</h1>").replace(/^## (.*$)/gm, "<h2>$1</h2>").replace(/^### (.*$)/gm, "<h3>$1</h3>").replace(/\*\*(.*)\*\*/gm, "<strong>$1</strong>").replace(/\*(.*)\*/gm, "<em>$1</em>").replace(/```([\s\S]*?)```/gm, "<pre><code>$1</code></pre>").replace(/`([^`]+)`/gm, "<code>$1</code>").replace(/^\- (.*$)/gm, "<li>$1</li>").replace(/\[([^\]]+)\]\(([^)]+)\)/gm, '<a href="$2">$1</a>').replace(/^\s*(\n)?(.+)/gm, function(m) {
    return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img)/.test(m) ? m : "<p>" + m + "</p>";
  }).replace(/\n/gm, "<br>");
  html = html.replace(/<li>(.+)<\/li>/g, function(m, content) {
    return "<ul>" + m + "</ul>";
  }).replace(/<\/ul><ul>/g, "");
  return html;
}

export { DocEditor as D };
