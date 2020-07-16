import { lazy } from 'react';
const InputExample = lazy(() =>
  import('../../lib/components/Input/input.example'),
);

const routes = [
  {
    path: '/input',
    title: 'Input 输入框',
    component: InputExample,
  },
];
export default routes;
