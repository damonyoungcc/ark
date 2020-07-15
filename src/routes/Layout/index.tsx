import { lazy } from 'react';
const LayoutExample = lazy(() =>
  import('../../lib/components/Layout/layout.example'),
);

const routes = [
  {
    path: '/layout',
    title: 'Layout 布局',
    component: LayoutExample,
  },
];
export default routes;
