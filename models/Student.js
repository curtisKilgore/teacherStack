const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  avatar: {
    type: String
  },
  gender: {
    type: String
  },
  grade: {
    type: Number
  },
  englishlearner: {
    type: Boolean
  },
  resourcestudent: {
    type: Boolean
  },
  bio: {
    type: String
  },
  goals: {
    type: String
  },
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    snapchat: {
      type: String
    },
    tiktok: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Student = mongoose.model('student', StudentSchema);
