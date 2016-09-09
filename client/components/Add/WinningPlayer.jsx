const React = require('react');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const { connect } = require('react-redux');
const { browserHistory } = require('react-router');
const actions = require('../../actions');

const WinningPlayer = ({ setWinningPlayer, players }) => {
  const buttons = players.map((player) => {
    const onClick = (e) => {
      e.preventDefault();
      setWinningPlayer(player);
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

WinningPlayer.propTypes = {
  players: React.PropTypes.object.isRequired,
  setWinningPlayer: React.PropTypes.func.isRequired
};

module.exports = connect(
  (x) => x,
  actions.add
)(WinningPlayer);
