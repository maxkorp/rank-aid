const React = require('react');
const ReactDOM = require('react-dom');
const { createStore, combineReducers } = require('redux');
const { Provider } = require('react-redux');
const { Router, browserHistory } = require('react-router');
const { syncHistoryWithStore, routerReducer } = require('react-router-redux');

const reducers = require('./reducers');
const routes = require('./routes');

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(
  reducer
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
      </Router>
    </div>
  </Provider>,
  document.getElementById('application')
);
