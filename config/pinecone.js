

const pinecone = require('./config/pinecone');

async function testPinecone() {
  const indexes = await pinecone.listIndexes();
  console.log("✅ Pinecone indexes:", indexes);
}
