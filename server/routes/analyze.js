const express = require("express");
const analyzeRoute = express.Router();

analyzeRoute.post("/", async (req, res) => {
  res.json({ message: "Analyze Route" });
});

module.exports = {
  analyzeRoute,
};
