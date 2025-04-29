const mongoose = require('mongoose');

// Initialize user schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  todos: {
    type: Array,
    default: []
  }
});
// export user model
module.exports = mongoose.model('user', userSchema);
