const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
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
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'class'
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Teacher = mongoose.model('teachers', TeacherSchema);
