const { proposedPlayer } = require('../datalayer');

module.exports = (app) => {
  app.get('/proposed-player', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }

    if (res.user.player) {
      return res.status(200).send({ name: req.user.name });
    }

    return proposedPlayer(req.user.name)
      .then((bestMatch) => ((bestMatch.rating > 0.1) ? bestMatch.name : ''))
      .then((name) => {
        res.status(200).send({ name });
      });
  });
};
