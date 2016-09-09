const React = require('react');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const { connect } = require('react-redux');
const { browserHistory } = require('react-router');
const characters = require('../../../shared/characters');
const actions = require('../../actions');

const WinningCharacter = ({ setWinningCharacter }) => {
  const buttons = characters.map((char) => {
    const onClick = (e) => {
      e.preventDefault();
      setWinningCharacter(char);
      browserHistory.goBack();
    };

    const imgName = char.replace(/\./g, '').replace(/ /g, '').replace(/&/g, '').toLowerCase();
    return (
      <Button bsSize='large' onClick={onClick}>
        <img src={`/images/${imgName}.png`} alt={char} />
        <div style={{ width: '180px', display: 'inline-block' }}>
          <span>
            {char}
          </span>
        </div>
      </Button>
    );
  });

  return (
    <div>
      <NavBar title='Winning Character' />
      <ButtonGroup block vertical>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

WinningCharacter.propTypes = {
  setWinningCharacter: React.PropTypes.func.isRequired
};

module.exports = connect(
  (x) => x,
  actions.add
)(WinningCharacter);
