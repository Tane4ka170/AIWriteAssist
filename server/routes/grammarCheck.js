const express = require("express");
const axios = require("axios");
const grammarCheckRoute = express.Router();

grammarCheckRoute.post("/", async (req, res) => {
  const { text } = req.body;
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a reliable assistant that reviews and fixes grammar mistakes in the given text. Provide only the corrected version without any extra comments or context",
          },
          {
            role: "user",
            content: `${sentence}`,
          },
        ],
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
        },
      }
    );

    const correctedText = response.data.choices[0].message.content;

    res.json({ correctedText });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = {
  grammarCheckRoute,
};
