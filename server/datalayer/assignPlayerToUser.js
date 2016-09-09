const { User } = require('../models');

module.exports = (userId, playerId) => {
  User.findOne({ _id: userId })
    .then((user) => {
      user.player = playerId; // eslint-disable-line no-param-reassign
      return user.save();
    });
};
