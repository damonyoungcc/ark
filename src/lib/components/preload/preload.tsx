import React from 'react';
import enhance from './enhance';

export interface PreloadsType {
  [key: string]: any;
}

export interface PreloadsFnType<T> {
  (params: T): PreloadsType;
}

export interface PreloadParamsType<P> {
  preloads: PreloadsType | PreloadsFnType<P>;
  minloadTime?: number;
  loadingComponent?: React.ComponentType<any>;
}

function preload<P>(params: PreloadParamsType<P>) {
  return function (OrignalComponent: React.ComponentType<P>) {
    return enhance(params)(OrignalComponent);
  };
}

export default preload;
