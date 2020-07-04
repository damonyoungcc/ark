import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

const defaultButton = () => <Button onClick={action('clicked')}> default button </Button>;
const buttonWidthSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);
const buttonWidthType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button disabled>disabled button</Button>
    <Button btnType="link" href="https://github.com" target="_blank">
      link button
    </Button>
  </>
);
storiesOf('Button', module)
  .add('Button', defaultButton)
  .add('不同尺寸的Button', buttonWidthSize)
  .add('不同类型的Button', buttonWidthType);
