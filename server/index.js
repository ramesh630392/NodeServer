const express = require('express');
const serverless = require('serverless-http'); // Converts Express to a serverless function

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic Routes
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Express server running on Vercel!');
});

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello from Express on Vercel!' });
});

// Export the server as a serverless function
module.exports = app;
module.exports.handler = serverless(app);
