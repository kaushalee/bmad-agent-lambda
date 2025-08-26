require('dotenv').config();

const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Mount agent routes
const hrRoutes = require('./bmad-core/agent_templates/hr/routes');
const crmRoutes = require('./bmad-core/agent_templates/crm/routes');
const seoRoutes = require('./bmad-core/agent_templates/seo/routes');
const erpRoutes = require('./bmad-core/agent_templates/erp/routes');
const chatbotRoutes = require('./bmad-core/agent_templates/chatbot/routes');

// Debug logs
console.log('HR:', typeof hrRoutes);
console.log('CRM:', typeof crmRoutes);
console.log('SEO:', typeof seoRoutes);
console.log('ERP:', typeof erpRoutes);
console.log('Chatbot:', typeof chatbotRoutes);

app.use('/v1/agent/hr', hrRoutes);
app.use('/v1/agent/crm', crmRoutes);
app.use('/v1/agent/seo', seoRoutes);
app.use('/v1/agent/erp', erpRoutes);
app.use('/v1/agent/chatbot', chatbotRoutes);

// Access the variables
const openaiKey = process.env.OPENAI_API_KEY;
const dbUri = process.env.DB_URI;
const vectorDbApi = process.env.VECTOR_DB_API;

// Example output
console.log("OpenAI Key:", openaiKey);
console.log("MongoDB URI:", dbUri);
console.log("Pinecone API Key:", vectorDbApi);

app.get('/', (req, res) => {
  res.send('🧠 BMAD Agent is running!');
});

app.listen(port, () => {
  console.log(` Unified Server running at http://localhost:${port}`);
});


