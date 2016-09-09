const _ = require('lodash');

const initialState = {
  winChar: null,
  winPlay: null,
  winStock: null,
  loseChar: null,
  losePlay: null,
  loseStock: null,
  stage: null
};

module.exports = (state = initialState, action) => {
  const getNewState = (key, val) => {
    const out = _.clone(state);
    out[key] = val;

    if (out.winPlay === out.losePlay) {
      if (key === 'winPlay') {
        out.losePlay = null;
      }
      else if (key === 'losePlay') {
        out.winPlay = null;
      }
    }

    return out;
  };

  switch (action.type) {
    case 'AddStateReset':
      return initialState;
    case 'AddStateWinChar':
      return getNewState('winChar', action.value);
    case 'AddStateWinPlay':
      return getNewState('winPlay', action.value);
    case 'AddStateLoseChar':
      return getNewState('loseChar', action.value);
    case 'AddStateLosePlay':
      return getNewState('losePlay', action.value);
    case 'AddStateStage':
      return getNewState('stage', action.value);
    case 'AddStateWinStock':
      return getNewState('winStock', action.value);
    case 'AddStateLoseStock':
      return getNewState('loseStock', action.value);
    default:
      return state;
  }
};
