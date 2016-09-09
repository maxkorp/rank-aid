const React = require('react');
const { connect } = require('react-redux');
const { Button, ButtonGroup, Jumbotron } = require('react-bootstrap');
const { browserHistory } = require('react-router');

const add = (event) => {
  event.preventDefault();
  browserHistory.push('add-match');
};

const verify = (event) => {
  event.preventDefault();
  browserHistory.push('verify');
};

const view = (event) => {
  event.preventDefault();
  browserHistory.push('view');
};

const Home = ({ user }) => {
  return (
    <div>
      <Jumbotron>
        <h1>
          {`Ohai2u ${user.name}`}
        </h1>
      </Jumbotron>
      <ButtonGroup block vertical>
        <Button onClick={add}>Add a match</Button>
        <Button onClick={verify}>Verify a match</Button>
        <Button onClick={view}>View Rankings in more detail</Button>
      </ButtonGroup>
    </div>
  );
};

Home.propTypes = {
  user: React.PropTypes.object.isRequired
};

module.exports = connect((x) => x)(Home);
