module.exports.setWinningCharacter = (character) => {
  return {
    type: 'AddStateWinChar',
    value: character
  };
};

module.exports.setWinningPlayer = (player) => {
  return {
    type: 'AddStateWinPlay',
    value: player
  };
};

module.exports.setWinningStocks = (stocks) => {
  return {
    type: 'AddStateWinPlay',
    value: stocks
  };
};

module.exports.setLosingCharacter = (character) => {
  return {
    type: 'AddStateLoseChar',
    value: character
  };
};

module.exports.setLosingPlayer = (player) => {
  return {
    type: 'AddStateLosePlay',
    value: player
  };
};

module.exports.setLosingStocks = (stocks) => {
  return {
    type: 'AddStateLosePlay',
    value: stocks
  };
};

module.exports.reset = () => {
  return {
    type: 'AddStateReset'
  };
};

module.exports.setStage = (stage) => {
  return {
    type: 'AddStateStage',
    value: stage
  };
};
