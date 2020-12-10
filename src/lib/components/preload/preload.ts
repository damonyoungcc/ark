import React from 'react';
import enhance from './enhance';

export interface PreloadsType {
  [key: string]: any;
}

export type PreloadsFnType = <T>(params: T) => PreloadsType;

export interface PreloadParamsType {
  preloads: PreloadsType | PreloadsFnType;
  minloadTime?: number;
  loadingComponent?: React.ComponentClass | React.FC;
}

const preload = (preloadParams: PreloadParamsType) => {
  return (OriganlComponent: React.ComponentClass) => {
    return enhance(preloadParams)(OriganlComponent);
  };
};

export default preload;
