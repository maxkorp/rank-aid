const React = require('react');
const { browserHistory } = require('react-router');
const { connect } = require('react-redux');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const actions = require('../../actions');

const chooseWinner = () => {
  browserHistory.push('/add-match/winning-player');
};

const chooseWinnerChar = () => {
  browserHistory.push('/add-match/winning-character');
};

const chooseLoser = () => {
  browserHistory.push('/add-match/losing-player');
};

const chooseLoserChar = () => {
  browserHistory.push('/add-match/losing-character');
};

const chooseStage = () => {
  browserHistory.push('/add-match/stage');
};

const AddMatch = ({ add, reset }) => {
  const winPlayText = add.winPlay ?
    `Winner: ${add.winPlay.name}` :
    'Choose a winner';

  const winCharText = add.winChar ?
    `Winning Character: ${add.winChar}` :
    'Choose a winning character';

  const losePlayText = add.losePlay ?
    `Loser: ${add.losePlay.name}` :
    'Choose a loser';

  const loseCharText = add.loseChar ?
    `Losing Character: ${add.loseChar}` :
    'Choose a losing character';

  const stageText = add.stage ?
    `Stage: ${add.stage}` :
    'Choose a stage';

  return (
    <div>
      <NavBar title='Add Match' cancelFn={reset} />
      <ButtonGroup block vertical>
        <Button bsSize='large' onClick={chooseWinner}>{winPlayText}</Button>
        <Button bsSize='large' onClick={chooseWinnerChar}>{winCharText}</Button>
        <Button bsSize='large' onClick={chooseLoser}>{losePlayText}</Button>
        <Button bsSize='large' onClick={chooseLoserChar}>{loseCharText}</Button>
        <Button bsSize='large' onClick={chooseStage}>{stageText}</Button>
      </ButtonGroup>
    </div>
  );
};

AddMatch.propTypes = {
  add: React.PropTypes.object.isRequired,
  reset: React.PropTypes.func.isRequired
};

module.exports = connect((x) => x, actions.add)(AddMatch);
