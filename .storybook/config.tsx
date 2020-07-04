import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/index.scss';

const styles: React.CSSProperties = {
  padding: '20px 40px',
};
const StoryWrapper = (storyFn: any) => (
  <div style={styles}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
);
addDecorator(StoryWrapper);
addDecorator(withInfo);
addParameters({
  info: {
    inline: 'true',
    header: false,
  },
});

configure(require.context('../src', true, /\.stories\.tsx$/), module);
