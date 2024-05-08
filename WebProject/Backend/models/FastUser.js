// Backend/models/User.js
const mongoose = require('mongoose');

const FastuserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('FastUser', FastuserSchema);  