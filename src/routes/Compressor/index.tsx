import { lazy } from 'react';
const CompressorExample = lazy(
  () => import('../../lib/components/Compressor/compressor.example'),
);

const routes = [
  {
    path: '/Compressor',
    title: 'Compressor 压缩图片',
    component: CompressorExample,
  },
];

export default routes;
