import { lazy } from 'react';
const AutoFocusNextExample = lazy(() =>
  import('../../lib/components/AutoFocusNext/autoFocusNext.example'),
);

const routes = [
  {
    path: '/autofocus',
    title: 'AutoFocusNext 自动聚焦下一个',
    component: AutoFocusNextExample,
  },
];
export default routes;
