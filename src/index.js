const express = require('express');
const dotenv = require('dotenv');
const path = require("path");

dotenv.config({ path: path.join(__dirname, "environment", ".env") });

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
  });
  
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });