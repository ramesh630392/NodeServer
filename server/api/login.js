const db = require('../database');

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.get(query, [username, password], (err, user) => {
      if (err) {
        return res.status(500).json({ error: 'Database error.' });
      }

      if (!user) {
        return res.status(401).json({ error: 'Invalid username or password.' });
      }

      res.status(200).json({ message: 'Login successful.', user });
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
