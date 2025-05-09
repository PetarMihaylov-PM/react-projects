
async function runChat(prompt) {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent";
  try {
    const res = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
        ],
      }),
    });

    const data = await res.json();
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log("Gemini says:", reply);
    return reply;
  } catch (err) {
    console.error("Error talking to Gemini:", err);
    return null;
  }
}

export default runChat;

/*
import {
  GoogleGenAI,
} from '@google/genai';

async function runChat(prompt) {
  const ai = new GoogleGenAI({
    apiKey: process.env.REACT_APP_API_KEY,
  });
  const config = {
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.0-flash';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

export default runChat;
*/
