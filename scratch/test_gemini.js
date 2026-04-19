import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent("Hello, who are you?");
    const response = await result.response;
    const text = response.text();
    console.log("Success:", text);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
