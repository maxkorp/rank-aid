Object.defineProperty(module.exports, 'Add', {
  get: () => require('./Add') // eslint-disable-line global-require
});

Object.defineProperty(module.exports, 'FourOhFour', {
  get: () => require('./FourOhFour') // eslint-disable-line global-require
});

Object.defineProperty(module.exports, 'Home', {
  get: () => require('./Home') // eslint-disable-line global-require
});

Object.defineProperty(module.exports, 'NavBar', {
  get: () => require('./NavBar') // eslint-disable-line global-require
});

Object.defineProperty(module.exports, 'Verify', {
  get: () => require('./Verify') // eslint-disable-line global-require
});

Object.defineProperty(module.exports, 'ViewRanks', {
  get: () => require('./ViewRanks') // eslint-disable-line global-require
});
