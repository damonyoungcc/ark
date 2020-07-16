import React, { Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from '../routes/index.jsx';
import { flatRoutes } from '../routes/routes_helper';
import SiderChildren from './Sider';
import HeaderChildren from './Header';
import { Layout } from '../lib';
import './App.scss';
const { Sider, Content, Header, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <HeaderChildren />
        </Header>
        <Layout>
          <Sider className="sider">
            <SiderChildren />
          </Sider>
          <Content className="content">
            <Layout>
              <Header>
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
              </Header>
              <Footer>
                {/* Footer */}
              </Footer>
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
