const db = require('../database');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.run(query, [username, password], function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          return res.status(400).json({ error: 'Username already exists.' });
        }
        return res.status(500).json({ error: 'Database error.' });
      }

      res.status(201).json({ message: 'User registered successfully.', userId: this.lastID });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
