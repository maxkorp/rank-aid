const React = require('react');
const { IndexRoute, Route } = require('react-router');

const {
  Add: {
    AddMatch,
    LosingCharacter,
    LosingPlayer,
    Stage,
    WinningCharacter,
    WinningPlayer
  },
  FourOhFour,
  Home,
  Verify: {
    List: VerificationList,
    Match: VerifyMatch
  },
  ViewRanks
} = require('./components');

const routeConfigs = [
  {
    path: 'verify',
    index: VerificationList,
    children: [
      {
        path: ':id',
        component: VerifyMatch
      }
    ]
  },
  {
    path: 'add-match',
    index: AddMatch,
    children: [
      {
        path: 'winning-player',
        component: WinningPlayer
      },
      {
        path: 'winning-character',
        component: WinningCharacter
      },
      {
        path: 'losing-player',
        component: LosingPlayer
      },
      {
        path: 'losing-character',
        component: LosingCharacter
      },
      {
        path: 'stage',
        component: Stage
      }
    ]
  },
  {
    path: 'view',
    component: ViewRanks
  },
  {
    path: '*',
    component: FourOhFour
  }
];

const routes = routeConfigs.map((route) => {
  const children = (route.children || []).map((child) => {
    return (<Route path={child.path} component={child.component} key={child.path} />);
  });

  const index = route.index ? (<IndexRoute component={route.index} />) : undefined;

  return (
    <Route path={route.path} component={route.component} key={route.path}>
      { index }
      { children }
    </Route>
  );
});

module.exports = (
  <Route path='/' >
    <IndexRoute component={Home} />
    {routes}
  </Route>
);
