
module.exports = {
  handleQuery: (query) => {
    if (!query) return "No query provided.";
    if (query.includes("lead")) return "Lead status: John Doe is in negotiation phase.";
    if (query.includes("contact")) return "Contact info: jane@example.com, Sales Manager.";
    return `CRM Bot received: ${query}`;
  },

  triggerWorkflow: (workflow) => {
    if (!workflow) return "No workflow specified.";
    return `CRM workflow "${workflow}" initiated.`;
  }
};

