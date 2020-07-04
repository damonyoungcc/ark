import { configure } from '@storybook/react';
import '../src/styles/index.scss';

configure(require.context('../src', true, /\.stories\.tsx$/), module);
