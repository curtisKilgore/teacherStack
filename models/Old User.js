const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
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
        type: String
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
    type: String
  },
  skills: {
    type: [String]
  },
  bio: {
    type: String
  },
  todos: [
    {
      task: {
        type: String
      },
      deadline: {
        type: Date,
        default: Date.now
      },
      completed: {
        type: Boolean
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
