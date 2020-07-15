import { lazy } from 'react';
const ButtonExample = lazy(() =>
  import('../../lib/components/Button/button.example'),
);

const routes = [
  {
    path: '/button',
    title: 'Button 按钮',
    component: ButtonExample,
  },
];

export default routes;
