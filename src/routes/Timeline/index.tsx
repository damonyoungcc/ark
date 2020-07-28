import { lazy } from 'react';
const TimelineExample = lazy(() =>
  import('../../lib/components/Timeline/timeline.example'),
);

const routes = [
  {
    path: '/timeline',
    title: 'Timeline 时间轴',
    component: TimelineExample,
  },
];
export default routes;
