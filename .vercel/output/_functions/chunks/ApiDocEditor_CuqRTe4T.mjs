import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { s as supabase } from './supabase_B2xMZoNq.mjs';

function ApiDocEditor({ projectId, endpointId }) {
  const [endpoints, setEndpoints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentEndpoint, setCurrentEndpoint] = useState(null);
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    fetchEndpoints();
    if (endpointId) {
      fetchEndpoint(endpointId);
    } else {
      handleCreateNew();
    }
  }, [projectId, endpointId]);
  const fetchEndpoints = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("api_endpoints").select("*").eq("project_id", projectId);
      if (error) throw error;
      setEndpoints(data || []);
    } catch (err) {
      console.error("Error fetching API endpoints:", err);
    } finally {
      setLoading(false);
    }
  };
  const fetchEndpoint = async (id) => {
    try {
      const { data, error } = await supabase.from("api_endpoints").select("*").eq("id", id).single();
      if (error) throw error;
      setCurrentEndpoint(data);
    } catch (err) {
      console.error("Error fetching endpoint:", err);
      handleCreateNew();
    }
  };
  const handleEndpointSelect = (endpoint) => {
    setCurrentEndpoint(endpoint);
  };
  const handleCreateNew = () => {
    setCurrentEndpoint({
      project_id: projectId,
      path: "",
      method: "GET",
      summary: "",
      description: "",
      request_body: {},
      responses: {
        "200": {
          description: "Successful operation",
          content: {
            "application/json": {
              schema: {}
            }
          }
        }
      }
    });
  };
  const handleInputChange = (field, value) => {
    setCurrentEndpoint({
      ...currentEndpoint,
      [field]: value
    });
  };
  const handleSave = async () => {
    if (!currentEndpoint) return;
    setSaving(true);
    try {
      let result;
      if (currentEndpoint.id) {
        const { data, error } = await supabase.from("api_endpoints").update({
          path: currentEndpoint.path,
          method: currentEndpoint.method,
          summary: currentEndpoint.summary,
          description: currentEndpoint.description,
          request_body: currentEndpoint.request_body,
          responses: currentEndpoint.responses,
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        }).eq("id", currentEndpoint.id).select().single();
        if (error) throw error;
        result = data;
      } else {
        const { data, error } = await supabase.from("api_endpoints").insert([{
          project_id: projectId,
          path: currentEndpoint.path,
          method: currentEndpoint.method,
          summary: currentEndpoint.summary,
          description: currentEndpoint.description,
          request_body: currentEndpoint.request_body,
          responses: currentEndpoint.responses
        }]).select().single();
        if (error) throw error;
        result = data;
      }
      if (currentEndpoint.id) {
        setEndpoints(endpoints.map((ep) => ep.id === result.id ? result : ep));
      } else {
        setEndpoints([...endpoints, result]);
      }
      setCurrentEndpoint(result);
      window.location.href = `/docs/projects/${projectId}/api/${result.id}`;
    } catch (err) {
      console.error("Error saving endpoint:", err);
      alert(`Error saving endpoint: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "api-doc-editor grid grid-cols-4 gap-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "col-span-1 border-r pr-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Endpoints" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleCreateNew,
          className: "mb-4 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700",
          children: "Add New Endpoint"
        }
      ),
      loading ? /* @__PURE__ */ jsx("p", { children: "Loading endpoints..." }) : /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: endpoints.length === 0 ? /* @__PURE__ */ jsx("p", { children: "No endpoints defined yet." }) : endpoints.map((endpoint) => /* @__PURE__ */ jsxs(
        "li",
        {
          className: `p-2 rounded cursor-pointer ${currentEndpoint?.id === endpoint.id ? "bg-indigo-100" : "hover:bg-gray-100"}`,
          onClick: () => handleEndpointSelect(endpoint),
          children: [
            /* @__PURE__ */ jsx("span", { className: `inline-block px-2 py-1 text-xs font-bold rounded mr-2 ${endpoint.method === "GET" ? "bg-blue-500 text-white" : endpoint.method === "POST" ? "bg-green-500 text-white" : endpoint.method === "PUT" ? "bg-yellow-500 text-white" : endpoint.method === "DELETE" ? "bg-red-500 text-white" : "bg-gray-500 text-white"}`, children: endpoint.method }),
            /* @__PURE__ */ jsx("span", { children: endpoint.path })
          ]
        },
        endpoint.id
      )) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "col-span-3", children: currentEndpoint ? /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: currentEndpoint.id ? "Edit Endpoint" : "New Endpoint" }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleSave,
            disabled: saving,
            className: "py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700",
            children: saving ? "Saving..." : "Save Endpoint"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "HTTP Method" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: currentEndpoint.method,
              onChange: (e) => handleInputChange("method", e.target.value),
              className: "w-full rounded-md border-gray-300 shadow-sm",
              children: [
                /* @__PURE__ */ jsx("option", { value: "GET", children: "GET" }),
                /* @__PURE__ */ jsx("option", { value: "POST", children: "POST" }),
                /* @__PURE__ */ jsx("option", { value: "PUT", children: "PUT" }),
                /* @__PURE__ */ jsx("option", { value: "DELETE", children: "DELETE" }),
                /* @__PURE__ */ jsx("option", { value: "PATCH", children: "PATCH" }),
                /* @__PURE__ */ jsx("option", { value: "OPTIONS", children: "OPTIONS" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Path" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              value: currentEndpoint.path,
              onChange: (e) => handleInputChange("path", e.target.value),
              placeholder: "/api/resource/{id}",
              className: "w-full rounded-md border-gray-300 shadow-sm"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Summary" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            value: currentEndpoint.summary,
            onChange: (e) => handleInputChange("summary", e.target.value),
            placeholder: "Brief summary of what this endpoint does",
            className: "w-full rounded-md border-gray-300 shadow-sm"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Description" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: currentEndpoint.description,
            onChange: (e) => handleInputChange("description", e.target.value),
            placeholder: "Detailed description of the endpoint",
            className: "w-full rounded-md border-gray-300 shadow-sm",
            rows: 3
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Request Body (JSON)" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: JSON.stringify(currentEndpoint.request_body, null, 2),
            onChange: (e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleInputChange("request_body", parsed);
              } catch (err) {
                console.log("Invalid JSON, will not update until valid");
              }
            },
            placeholder: "{ ... }",
            className: "w-full rounded-md border-gray-300 shadow-sm font-mono text-sm",
            rows: 6
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium mb-1", children: "Responses (JSON)" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            value: JSON.stringify(currentEndpoint.responses, null, 2),
            onChange: (e) => {
              try {
                const parsed = JSON.parse(e.target.value);
                handleInputChange("responses", parsed);
              } catch (err) {
                console.log("Invalid JSON, will not update until valid");
              }
            },
            placeholder: "{ ... }",
            className: "w-full rounded-md border-gray-300 shadow-sm font-mono text-sm",
            rows: 6
          }
        )
      ] })
    ] }) : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-full", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Select an endpoint from the list or create a new one to get started." }) }) })
  ] });
}

export { ApiDocEditor as A };
