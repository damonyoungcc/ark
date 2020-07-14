import { lazy } from 'react';
const InputExample = lazy(() =>
  import('../../lib/components/Input/input.example'),
);

const routes = [
  {
    path: '/input',
    title: '按钮',
    component: InputExample,
  },
];
export default routes;
