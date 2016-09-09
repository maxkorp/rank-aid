const { User } = require('../models');
const facebook = require('./facebook');
const google = require('./google');
const twitter = require('./twitter');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });

  facebook(passport);
  google(passport);
  twitter(passport);
};
