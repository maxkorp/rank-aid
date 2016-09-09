const React = require('react');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const { connect } = require('react-redux');
const { browserHistory } = require('react-router');
const characters = require('../../../shared/characters');
const actions = require('../../actions');

const LosingCharacter = ({ setLosingCharacter }) => {
  const buttons = characters.map((char) => {
    const onClick = (e) => {
      e.preventDefault();
      setLosingCharacter(char);
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
      <NavBar title='Losing Character' />
      <ButtonGroup block vertical>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

LosingCharacter.propTypes = {
  setLosingCharacter: React.PropTypes.func.isRequired
};

module.exports = connect(
  (x) => x,
  actions.add
)(LosingCharacter);
