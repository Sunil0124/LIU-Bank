const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = 'your-secret-key';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock user database
const users = [];

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Auth routes
app.post('/api/auth/signup', (req, res) => {
  const { username, password, firstName, lastName, email, ssn, dateOfBirth, accountNumber } = req.body;

  // Check if user already exists
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Create new user
  const user = {
    id: users.length + 1,
    username,
    password, // In production, hash the password
    firstName,
    lastName,
    email,
    ssn,
    dateOfBirth,
    accountNumber
  };

  users.push(user);

  // Generate token
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);

  res.status(201).json({
    token,
    user: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    }
  });
});

// Protected route example
app.get('/api/auth/profile', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) return res.sendStatus(404);

  res.json({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});