// Backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');

router.post('/signup', authController.signup);

router.post("/login",authController.login);
module.exports = router;
