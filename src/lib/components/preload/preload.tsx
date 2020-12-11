import React from 'react';
import enhance from './enhance';

export interface PreloadsType {
  [key: string]: any;
}

export interface PreloadsFnType {
  (params: any): PreloadsType;
}

export interface PreloadParamsType {
  preloads: PreloadsType | PreloadsFnType;
  minloadTime?: number;
  LoadingComponent?: React.ComponentType<any>;
}

const preload = (params: PreloadParamsType) => {
  return function <P>(OrignalComponent: React.ComponentType<P>) {
    return enhance(params)(OrignalComponent);
  };
};

export default preload;
