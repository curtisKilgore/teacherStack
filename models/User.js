const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
  role: {
    type: String,
    default: 'TEACHER'
  },
  classes: [
    {
      name: {
        type: String,
        required: true
      },
      period: {
        type: Number
      },
      description: {
        type: String
      },
      students: [
        {
          student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'student'
          }
        }
      ]
    }
  ],
  room: {
    type: String
  },
  subject: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  education: [
    {
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
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

module.exports = User = mongoose.model('user', UserSchema);
