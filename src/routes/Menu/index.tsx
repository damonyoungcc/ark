import { lazy } from 'react';
const MenuExample = lazy(() =>
  import('../../lib/components/Menu/menu.example'),
);

const routes = [
  {
    path: '/menu',
    title: 'Menu 导航菜单',
    component: MenuExample,
  },
];
export default routes;
