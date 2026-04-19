import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
     // Note: listModels is not directly on genAI in the node SDK sometimes
     // We have to use the REST API or the client has it in some versions
     // In @google/generative-ai, there is no direct listModels.
     // But we can try to use a fetch request.
     const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
     const data = await response.json();
     console.log("Supported Models:", JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
