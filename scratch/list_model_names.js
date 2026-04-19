import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

async function listModels() {
  try {
     const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GEMINI_API_KEY}`);
     const data = await response.json();
     if (data.models) {
        console.log(data.models.map(m => m.name).join('\n'));
     } else {
        console.log("Error:", JSON.stringify(data));
     }
  } catch (error) {
    console.error("Error listing models:", error);
  }
}

listModels();
