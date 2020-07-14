const mongoose = require('mongoose');

const ParentSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  children: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'student'
    }
  ]
});

module.exports = Parent = mongoose.model('parent', ParentSchema);
