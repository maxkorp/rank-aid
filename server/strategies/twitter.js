const { Strategy } = require('passport-twitter');
const { User } = require('../models');
const configAuth = require('../../config').auth;

module.exports = (passport) => {
  passport.use(new Strategy(
    configAuth.twitterAuth,
    (token, tokenSecret, profile, done) => {
      User.findOne({ 'twitter.id': profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }

        if (user) {
          return done(null, user);
        }

        const newUser = new User();
        newUser.twitter.id = profile.id;
        newUser.twitter.token = token;
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
