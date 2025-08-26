const chatbot = require('./chatbot');

module.exports = {
  startAgent: (data) => {
    const { agent, task } = data;
    if (agent?.toLowerCase() === "erp" && task === "initialize") {
      return {
        status: 'success',
        message: `${agent.toUpperCase()} agent started`,
        data
      };
    }
    return {
      status: "error",
      message: "Invalid agent or task"

    };
  },

  queryAgent: ({ agent, query, data }) => {
    if (agent?.toLowerCase() === "erp") {
      return {
        status: 'success',
        message: `${agent.toUpperCase()} agent query processed.`,
        response: chatbot.handleQuery(query),
        query: data?.query || query
      };
    }
    return {
      status: "error",
      message: "Unsupported agent"
    };
  },

  workflowAgent: ({ agent, workflow, data }) => {
    if (agent?.toLowerCase() === "erp") {
      return {
        status: 'success',
        message: `${agent.toUpperCase()} agent workflow executed.`,
        response: chatbot.triggerWorkflow(workflow),
        workflow: data?.workflow || workflow
      };
    }
    return {
      status: "error",
      message: "Unsupported agent"
    };
  }
};
