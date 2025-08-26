
module.exports = {
  handleQuery: (query) => {
    if (!query) return "No query provided.";
    return `General Chatbot says: "${query}" sounds interesting!`;
  },

  triggerWorkflow: (workflow) => {
    if (!workflow) return "No workflow specified.";
    return `General workflow "${workflow}" activated.`;
  }
};
