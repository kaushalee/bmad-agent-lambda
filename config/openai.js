


const openai = require('./config/openai');

async function testOpenAI() {
  const response = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Hello!" }],
    model: "gpt-3.5-turbo",
  });
  console.log("✅ OpenAI response:", response.choices[0].message.content);
}
