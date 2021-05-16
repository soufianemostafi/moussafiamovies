const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  full_name: { type: String, required: true },
  username: { type: String, required: true },
  gmail: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true,
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;