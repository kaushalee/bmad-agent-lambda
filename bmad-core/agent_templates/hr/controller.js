
const chatbot = require('./chatbot');

module.exports = {
  startAgent: (data) => {
    const { agent, task } = data;
    if (agent?.toLowerCase() === "hr" && task === "initialize") {
      return {
        status: "success",
        message: `${agent.toUpperCase()} agent started`,
        data
      };
    }
    return {
      status: "error",
      message: "Invalid task" 
    };
  },

  queryAgent: ({ agent, query, data }) => {
    if (agent?.toLowerCase() === "hr") {
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
    if (agent?.toLowerCase() === "hr") {
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
