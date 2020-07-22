import { lazy } from 'react';
const IconExample = lazy(() =>
  import('../../lib/components/Icon/icon.example'),
);

const routes = [
  {
    path: '/icon',
    title: 'Icon 图标',
    component: IconExample,
  },
];

export default routes;
