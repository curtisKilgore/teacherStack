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
