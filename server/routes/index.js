const fse = require('fs-extra');

module.exports = (app, passport) => {
  fse.readdirSync(__dirname).forEach((entry) => {
    if (!['index.js', 'utils.js'].includes(entry)) {
      require(`./${entry}`)(app, passport); // eslint-disable-line global-require
    }
  });
};
