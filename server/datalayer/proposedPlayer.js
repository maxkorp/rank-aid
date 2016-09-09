const { compareTwoStrings } = require('string-similarity');
const { Player, User } = require('../models');

module.exports = (userName) => {
  return Promise.all([User.find(), Player.find()])
    .then(([users, players]) =>
      players.filter((player) =>
        !users.some((user) =>
          user.player === player._id // eslint-disable-line no-underscore-dangle
        )
      )
    )
    .then((players) => players.reduce((optimal, player) => {
      const match = compareTwoStrings(userName, player.name);
      return match > optimal.rating ? player : optimal;
    }, { rating: 0 }));
};
