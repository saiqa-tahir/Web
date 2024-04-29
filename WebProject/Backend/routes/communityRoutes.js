// Backend/routes/communityRoutes.js

const express = require('express');
const router = express.Router();
const Community = require('../models/community');

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    // Create a new community in the database
    const community = await Community.create({ name });
    res.status(201).json(community);
  } catch (error) {
    console.error('Error creating community:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
