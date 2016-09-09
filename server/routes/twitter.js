module.exports = (app, passport) => {
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get(
    '/auth/twitter/callback',
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })
  );
};
