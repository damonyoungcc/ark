import React from 'react';
import Layout from './index';
import './layout.example.scss';

const { Header, Footer, Content, Sider } = Layout
export default function() {
  return (
    <div>
      <div>
        <h1>第一个例子</h1>
        <Layout className="layout-example-layout">
          <Header className="layout-example-header">Header</Header>
          <Content className="layout-example-content">Content</Content>
          <Footer className="layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第二个例子</h1>
        <Layout className="layout-example-layout">
          <Header className="layout-example-header">Header</Header>
          <Layout>
            <Sider className="layout-example-sider">Sider</Sider>
            <Content className="layout-example-content">Content</Content>
          </Layout>
          <Footer className="layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第三个例子</h1>
        <Layout className="layout-example-layout">
          <Header className="layout-example-header">Header</Header>
          <Layout>
            <Content className="layout-example-content">Content</Content>
            <Sider className="layout-example-sider">Sider</Sider>
          </Layout>
          <Footer className="layout-example-footer">Footer</Footer>
        </Layout>
      </div>
      <div>
        <h1>第四个例子</h1>
        <Layout className="layout-example-layout">
          <Sider className="layout-example-sider">Sider</Sider>
          <Layout>
            <Header className="layout-example-header">Header</Header>
            <Content className="layout-example-content">Content</Content>
            <Footer className="layout-example-footer">Footer</Footer>
          </Layout>
        </Layout>
      </div>
    </div>
  );
}