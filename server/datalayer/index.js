const fse = require('fs-extra');

fse.readdirSync(__dirname).forEach((entry) => {
  if (entry !== 'index.js') {
    module.exports[entry.replace('.js', '')] =
      require(`./${entry}`); // eslint-disable-line global-require
  }
});
