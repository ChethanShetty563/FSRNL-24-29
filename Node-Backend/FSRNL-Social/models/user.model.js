const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Name is required'],
  },

  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required'],
    unique: [true, 'Email already Exist'],
    match: [/.+\@.+\..+/, 'Please provide valid email'],
  },

  password: {
    type: String,
    required: [true, 'password is required'],
  },
  about: {
    type: String,
    trim: true,
  },

  created: {
    type: Date,
    default: Date.now,
  },

  updated: Date,

  photo: {
    data: Buffer,
    contentType: String,
  },

  following: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('User', UserSchema);
