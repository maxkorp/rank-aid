const { Match } = require('../models');

module.exports = (query = {}) => {
  Match.find(query);
};
