const mongoose = require('mongoose');
const characters = require('../../shared/characters');

const MatchSchema = new mongoose.Schema({
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  winnerChar: {
    type: String,
    enum: characters
  },
  loser: { type: mongoose.Schema.Types.ObjectId, ref: 'Player' },
  loserChar: {
    type: String,
    enum: characters
  },
  date: Date,
  enterer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  validator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Match', MatchSchema);
