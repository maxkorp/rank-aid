const { Strategy } = require('passport-facebook');
const { User } = require('../models');
const configAuth = require('../../config').auth;

module.exports = (passport) => {
  passport.use(new Strategy(
    configAuth.facebookAuth,
    (token, refreshToken, profile, done) => {
      User.findOne({ 'facebook.id': profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, user);
        }

        const newUser = new User();
        newUser.facebook.id = profile.id;
        newUser.facebook.token = token;
        newUser.name = profile.displayName ||
          `${profile.name.givenName} ${profile.name.familyName}`;

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
