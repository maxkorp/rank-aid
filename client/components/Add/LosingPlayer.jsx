const React = require('react');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const { connect } = require('react-redux');
const { browserHistory } = require('react-router');
const actions = require('../../actions');

const LosingPlayer = ({ setLosingPlayer, players }) => {
  const buttons = players.map((player) => {
    const onClick = (e) => {
      e.preventDefault();
      setLosingPlayer(player);
      browserHistory.goBack();
    };
    return (<Button bsSize='large' onClick={onClick}>{player.name}</Button>);
  });

  return (
    <div>
      <NavBar title='Losing Player' />
      <ButtonGroup block vertical>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

LosingPlayer.propTypes = {
  players: React.PropTypes.object.isRequired,
  setLosingPlayer: React.PropTypes.func.isRequired
};

module.exports = connect(
  (x) => x,
  actions.add
)(LosingPlayer);
