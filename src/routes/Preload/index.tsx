import { lazy } from 'react';
const PreloadExample = lazy(
  () => import('../../lib/components/preload/preload.example'),
);

const routes = [
  {
    path: '/preload',
    title: 'Preload预加载',
    component: PreloadExample,
  },
];
export default routes;
