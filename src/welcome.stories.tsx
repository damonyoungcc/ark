import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome page', module).add(
  'welcome',
  () => {
    return (
      <>
        <h1>欢迎来到 ark方舟 组件库</h1>
        <p>ark 是为一款基于React的UI组件库</p>
        <h3>安装试试</h3>
        <code>npm install ark --save</code>
      </>
    );
  },
  { info: { disable: true } },
);
