import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.use(cors());
router.use(express.json());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message content is required." });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      }
    );

    const data = await response.json();

    if (!data?.candidates || data.candidates.length === 0) {
      return res.status(500).json({ error: "Failed to generate a response." });
    }

    const rawText = data.candidates[0]?.content?.parts[0]?.text || "I couldn't generate a response at the moment.";

    // Format response using Markdown-style structure
    const formattedResponse = rawText
      .replace(/\*\*(.*?)\*\*/g, "**$1**")  // Keep bold formatting
      .replace(/\n\n/g, "\n\n")  // Maintain paragraph breaks
      .replace(/- (.*?)/g, "• $1");  // Convert bullets to readable format

    res.json({ response: formattedResponse });
  } catch (error) {
    console.error("Error in chat function:", error);
    res.status(500).json({ error: "Internal Server Error. Please try again later." });
  }
});

export default router;
