const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    requried: true
  },
  avatar: {
    type: String
  },
  englishlearner: {
    type: Boolean,
    default: false
  },
  resourcestudent: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Student = mongoose.model('student', StudentSchema);
