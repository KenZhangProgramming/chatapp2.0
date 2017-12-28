/**
 * Set up User database schema
 */
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true,
    minlength: 6
  },
  friends: {
    type: []
  },
  online: {
    default: false,
    type: Boolean,
  }
});

module.exports = mongoose.model('User', UserSchema);
