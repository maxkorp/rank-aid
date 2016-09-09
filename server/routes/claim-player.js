const { assignPlayerToUser, proposedPlayer } = require('../datalayer');

module.exports = (app) => {
  app.get('/claim-player', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }

    if (res.user.player) {
      return res.status(400).send({ message: 'you already have a player' });
    }

    return proposedPlayer(req.user.name)
      .then((bestMatch) => {
        if (bestMatch.rating > 0.1) {
          return assignPlayerToUser(
            req.user._id, // eslint-disable-line no-underscore-dangle
            bestMatch._id // eslint-disable-line no-underscore-dangle
          )
            .then(() => {
              res.status(200).send({ message: 'claimed' });
            });
        }

        return res.status(400).send({ message: 'no suitable player' });
      });
  });
};
