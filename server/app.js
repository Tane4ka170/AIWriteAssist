const express = require("express");
const cors = require("cors");
require("dotenv").config();
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarCheck");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarCheck", grammarCheckRoute);

app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
