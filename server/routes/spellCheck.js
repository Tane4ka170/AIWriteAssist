const express = require("express");
const spellCheckRoute = express.Router();

spellCheckRoute.post("/", async (req, res) => {
  res.json({ message: "Analyze Route" });
});

module.exports = {
  analyzeRoute,
};
