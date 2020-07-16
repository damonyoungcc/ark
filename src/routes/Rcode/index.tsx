import { lazy } from 'react';
const RcodeExample = lazy(() =>
  import('../../lib/components/Rcode/rcode.example'),
);

const routes = [
  {
    path: '/rcode',
    title: 'Rcode 自动聚焦下一个输入框',
    component: RcodeExample,
  },
];
export default routes;
