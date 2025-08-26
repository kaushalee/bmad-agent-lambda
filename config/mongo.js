
const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.DB_URI);

async function connectMongo() {
  await client.connect();
  const db = client.db(); // default DB
  const result = await db.command({ ping: 1 });
  console.log("✅ MongoDB ping result:", result);
  return client;
}

module.exports = connectMongo;




