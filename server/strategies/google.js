const { Strategy } = require('passport-google-oauth');
const { User } = require('../models');
const configAuth = require('../../config').auth;

module.exports = (passport) => {
  passport.use(new Strategy(
    configAuth.googleAuth,
    (token, refreshToken, profile, done) => {
      User.findOne({ 'google.id': profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, user);
        }

        const newUser = new User();
        newUser.google.id = profile.id;
        newUser.google.token = token;
        newUser.name = profile.displayName;

        return newUser.save((saveErr) => {
          if (saveErr) {
            throw saveErr;
          }
          return done(null, newUser);
        });
      });
    }
  ));
};
