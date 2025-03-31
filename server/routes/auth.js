const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const authMiddleware = require('../authMiddleware');

router.post('/login', (req, res) => {
  // Check user credentials, generate JWT token
  const token = jwt.sign({ userId: '123' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
