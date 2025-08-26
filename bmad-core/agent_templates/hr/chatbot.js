
module.exports = {
  handleQuery: (query) => {
    if (!query) return "No query provided.";
    if (query.includes("leave")) return "Leave policy: Employees are entitled to 20 days annually.";
    if (query.includes("holiday")) return "Next holiday is on Friday, August 15th.";
    return `HR Bot received: ${query}`;
  },

  triggerWorkflow: (workflow) => {
    if (!workflow) return "No workflow specified.";
    return `HR workflow "${workflow}" triggered.`;
  }
};
