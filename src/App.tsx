import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Routes from './routes/index.jsx';
import { flatRoutes } from './routes/routes_helper';

console.log(Routes)

const App: React.FC = () => {
  return (
    <Router>
      <NavLink to="/button">按钮</NavLink>
      <NavLink to="/input">输入框</NavLink>
      <Suspense fallback={<div className="loading">loading...</div>}>
        <Switch>
          {flatRoutes(Routes).length &&
            flatRoutes(Routes).map((item) => (
              <Route
                path={item.path}
                exact
                component={item.component}
                key={item.path}
              />
            ))}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
