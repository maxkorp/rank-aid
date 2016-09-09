const React = require('react');
const { Button, ButtonGroup } = require('react-bootstrap');
const { NavBar } = require('../../components');
const { connect } = require('react-redux');
const { browserHistory } = require('react-router');
const stages = require('../../../shared/stages');
const actions = require('../../actions');

const Stage = ({ setStage }) => {
  const buttons = stages.map((stage) => {
    const onClick = (e) => {
      e.preventDefault();
      setStage(stage);
      browserHistory.goBack();
    };

    const imgName = stage.replace(/\./g, '').replace(/ /g, '').replace(/&/g, '').toLowerCase();
    return (
      <Button bsSize='large' onClick={onClick}>
        <img src={`/images/${imgName}-stage.png`} alt={stage} />
        <div style={{ width: '180px', display: 'inline-block' }}>
          <span>
            {stage}
          </span>
        </div>
      </Button>
    );
  });

  return (
    <div>
      <NavBar title='Stage' />
      <ButtonGroup block vertical>
        {buttons}
      </ButtonGroup>
    </div>
  );
};

Stage.propTypes = {
  setStage: React.PropTypes.func.isRequired
};

module.exports = connect(
  (x) => x,
  actions.add
)(Stage);
