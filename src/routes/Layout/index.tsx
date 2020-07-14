import { lazy } from 'react';
const LayoutExample = lazy(() =>
  import('../../lib/components/Layout/layout'),
);

const routes = [
  {
    path: '/input',
    title: '按钮',
    component: LayoutExample,
  },
];
export default routes;
