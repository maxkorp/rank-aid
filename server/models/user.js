const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  player: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  name: String,
  active: {
    type: Boolean,
    default: false
  },
  facebook: {
    id: String,
    token: String
  },
  twitter: {
    id: String,
    token: String
  },
  google: {
    id: String,
    token: String
  }
});

module.exports = mongoose.model('User', UserSchema);
