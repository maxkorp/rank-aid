const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');
const strategies = require('./strategies');

const AMIOFFLINE = process.env.AMIOFFLINE;
module.exports = (app) => {
  if (AMIOFFLINE) {
    app.use((req, res, next) => {
      const { User } = require('./models');
      User.findOne({}, (err, user) => {
        if (err) {
          next(err);
        }
        req.user = user;
        next();
      });
    });
  }
  else {
    strategies(passport);
    app.use(session({ secret: 'wellgoddamn' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
  }
}
