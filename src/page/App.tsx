import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from '../routes/index.jsx';
import { flatRoutes } from '../routes/routes_helper';
import SiderChildren from './Sider';
import { Layout } from '../lib';
const { Sider, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Sider>
          <SiderChildren />
        </Sider>
        <Layout>
          <Content className="content">
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
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
