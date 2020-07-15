import React, { FC } from 'react';
import './style.scss';
const App: FC = () => {
  return (
    <div className="header-content">
      <div className="header-logo">LOGO</div>
      <input type="text" placeholder="在ark源码中搜索"/>
      <ul className="header-nav">
        <li>设计</li>
        <li>文档</li>
        <li>组件</li>
        <li>资源</li>
        <li>国内镜像</li>
      </ul>
    </div>
  );
};

export default App;
