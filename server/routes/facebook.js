module.exports = (app, passport) => {
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));

   // handle the callback after facebook has authenticated the user
  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/',
      failureRedirect: '/',
      failureFlash: true
    })
  );
};
