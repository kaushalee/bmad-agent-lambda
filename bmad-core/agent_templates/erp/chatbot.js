
module.exports = {
  handleQuery: (query) => {
    if (!query) return "No query provided.";
    if (query.includes("inventory")) return "Inventory: 120 units of Product A in stock.";
    if (query.includes("order")) return "Order #4567 is scheduled for delivery tomorrow.";
    return `ERP Bot received: ${query}`;
  },

  triggerWorkflow: (workflow) => {
    if (!workflow) return "No workflow specified.";
    return `ERP workflow "${workflow}" executed.`;
  }
};
