const { getMatches } = require('../datalayer');

module.exports = (app) => {
  app.get('/get-matches', (req, res) => {
    if (!req.isAuthenticated()) {
      return res.redirect('/');
    }

    return getMatches(req.user.name)
      .then((matches) => {
        res.status(200).send({ matches });
      });
  });
};
