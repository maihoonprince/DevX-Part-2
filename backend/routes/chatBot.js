import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message content is required." });
    }

    if (!GEMINI_API_KEY) {
      return res.status(500).json({ error: "Missing API Key in server." });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }]
        }),
      }
    );

    const data = await response.json();

    // Check if response contains text
    const responseText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.promptFeedback?.messages?.[0]?.text ||
      "I couldn't generate a response at the moment.";

    res.json({ response: responseText });
  } catch (error) {
    console.error("Chatbot Error:", error.message);
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
});

export default router;
