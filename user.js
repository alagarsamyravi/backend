// User.js

const mongoose = require('./db'); // Import mongoose from db.js

// Define user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  age: Number,
  dob: Date,
  contact: String,
  address: String,
});

// Create user model
const User = mongoose.model('User', userSchema);

module.exports = User;
