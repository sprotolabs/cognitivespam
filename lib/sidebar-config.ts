// Basic sidebar configuration structure
export const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Overview", href: "/docs/overview" },
      { title: "Quickstart", href: "/docs/quickstart" },
    ],
  },
  {
    title: "Integration Guides",
    items: [
      { title: "Node.js", href: "/docs/integration/nodejs" },
      { title: "Python", href: "/docs/integration/python" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Basic Monitoring", href: "/docs/examples/basic-monitoring" },
      { title: "Batch Processing", href: "/docs/examples/batch-processing" },
      { title: "Real-time Filtering", href: "/docs/examples/real-time-filtering" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "FAQ", href: "/docs/faq" },
    ],
  },
];

export const apiNav = [
  {
    title: "Introduction",
    items: [
      { title: "Overview", href: "/api-reference" },
      { title: "Authentication", href: "/api-reference/guides/authentication" },
      { title: "Error Handling", href: "/api-reference/guides/error-handling" },
    ],
  },
  {
    title: "Endpoints",
    items: [
      { title: "Analyze Chain of Thought", href: "/api-reference/endpoints/analyze-cot" },
      { title: "Usage Statistics", href: "/api-reference/endpoints/usage" },
      { title: "API Status", href: "/api-reference/endpoints/status" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Types Reference", href: "/api-reference/types" },
      { title: "Best Practices", href: "/api-reference/guides/best-practices" },
      { title: "Changelog", href: "/api-reference/changelog" },
    ],
  },
];
