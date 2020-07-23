import { lazy } from 'react';
const ProgressExample = lazy(() =>
  import('../../lib/components/Progress/progress.example'),
);

const routes = [
  {
    path: '/progress',
    title: 'Progress 进度条',
    component: ProgressExample,
  },
];
export default routes;
