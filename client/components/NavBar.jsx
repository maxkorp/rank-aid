const React = require('react');
const { Button, Nav, Navbar, NavItem } = require('react-bootstrap');
const { browserHistory } = require('react-router');

module.exports = ({ cancelFn, title = 'Smash Rank' }) => {
  const doCancel = (event) => {
    event.preventDefault();
    browserHistory.goBack();
    if (cancelFn) {
      cancelFn();
    }
  };

  const cancelButton = (<Button navbar onClick={doCancel}>Cancel</Button>);

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          {title}
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem>{cancelButton}</NavItem>
      </Nav>
    </Navbar>
  );
};

module.exports.propTypes = {
  cancelFn: React.PropTypes.func,
  title: React.PropTypes.string
};
