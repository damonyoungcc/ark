import { lazy } from 'react';
const SpinExample = lazy(() =>
  import('../../lib/components/Spin/spin.example'),
);

const routes = [
  {
    path: '/spin',
    title: 'Spin 加载中',
    component: SpinExample,
  },
];
export default routes;
