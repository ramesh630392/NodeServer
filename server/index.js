const express = require('express');

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

app.listen(5000, ()=>{console.log("CD")})
