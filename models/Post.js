const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'teacher'
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      teacher: {
        type: Schema.Types.ObjectId,
        ref: 'teacher'
      }
    }
  ],
  comments: [
    {
      teacher: {
        type: Schema.Types.ObjectId,
        ref: 'teacher'
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
