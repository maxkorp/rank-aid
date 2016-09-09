module.exports = (app) => {
  app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      if (req.user.active) {
        res.render('authenticated.ejs', { user: req.user });
      }
      else {
        res.render('inactive.ejs', { user: req.user });
      }
    }
    else {
      res.render('unauthenticated.ejs');
    }
  });
};
