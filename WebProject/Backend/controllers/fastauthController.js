// Backend/controllers/fastauthController.js
const FastUser=require('../models/FastUser');
exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await FastUser.create({ email, password });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const existingUser = await FastUser.findOne({ email });
    if (!existingUser) {
      return res.json({ success: false, message: "User does not exist" });
    }
    // Compare passwords (plaintext)
    if (existingUser.password !== password) {
      return res.json({ success: false, message: "Incorrect password" });
    }
    // If email and password are correct, return success
    return res.json({ success: true, message: "Login successful", user: existingUser });
  } catch (err) {
    // Handle any errors
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};