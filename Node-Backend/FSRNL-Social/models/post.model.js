const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: 'Text is required',
  },

  photo: {
    data: Buffer,
    contentType: String,
  },

  likes: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  created: {
    type: Date,
    default: Date.now,
  },

  comments: [
    {
      text: String,
      created: {
        type: Date,
        default: Date.now,
      },
      postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    },
  ],
});

module.exports = mongoose.model('Post', PostSchema);
