import { lazy } from 'react';
const AutoCompleteExample = lazy(() =>
  import('../../lib/components/AutoComplete/autoComplete.example'),
);

const routes = [
  {
    path: '/autocomplete',
    title: 'AutoComplete 自动完成',
    component: AutoCompleteExample,
  },
];

export default routes;
