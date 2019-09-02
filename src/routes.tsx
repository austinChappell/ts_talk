import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TeamsPage from './pages/teams';
import HomePage from './pages/home';
import Nav from './components/layout/Nav';
import TeamPage from './pages/team';
import PersonPage from './pages/person';

const Routes: React.FC = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route
          component={HomePage}
          exact
          path="/"
        />
        <Route
          component={TeamPage}
          path="/teams/:id"
        />
        <Route
          component={TeamsPage}
          path="/teams"
        />
        <Route
          component={PersonPage}
          path="/people/:id"
        />
      </Switch>
    </Router>
  )
}

export default Routes;
