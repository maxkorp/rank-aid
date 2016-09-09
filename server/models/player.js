const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Motherfuckers MUST be named']
  }
});

module.exports = mongoose.model('Player', PlayerSchema);
