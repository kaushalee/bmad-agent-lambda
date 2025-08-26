
module.exports = {
  handleQuery: (query) => {
    if (!query) return "No query provided.";
    if (query.includes("ranking")) return "Your site ranks #3 for 'best running shoes'.";
    if (query.includes("keywords")) return "Top keywords: 'eco-friendly shoes', 'discount sneakers'.";
    return `SEO Bot received: ${query}`;
  },

  triggerWorkflow: (workflow) => {
    if (!workflow) return "No workflow specified.";
    return `SEO workflow "${workflow}" started.`;
  }
};
