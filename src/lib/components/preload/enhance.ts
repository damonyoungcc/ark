import React from 'react';
import { PreloadParamsType, PreloadsFnType, PreloadsType } from './preload';
import Spin from '../Spin';

function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object, Object]';
}
function isFunction(fn: any) {
  return fn && typeof fn === 'function';
}

const enhance = (params: PreloadParamsType) => {
  let { preloads, minloadTime = 0, loadingComponent = Spin } = params;
  return (OrignalComponent: React.ComponentClass) => {
    let timerId: number;
    return class WrapperedComponent extends React.Component<any, any> {
      constructor(props: any) {
        super(props);
        this.state = {
          isReady: false,
          data: {},
        };
      }
      componentDidMount() {
        if (preloads) {
          const startTime = Date.now();
          minloadTime = +minloadTime || 0;
          new Promise((resolve) => {
            if (isObject(preloads)) {
              resolve({
                ...preloads,
              });
            } else if (isFunction(preloads)) {
              // todo 是都需要再套一层Promise.resolve
              // Promise.resolve().then(() => {
              resolve({
                // 把组件接收的props当做preload的参数
                ...(preloads as PreloadsFnType)(this.props),
              });
            } else {
              throw new Error('preload 需为一个object或function');
            }
          }).then((preloads: any) => {
            const props = this.props;
            const __indexName__: PreloadsType = {};
            Promise.all(
              Object.keys(preloads).map((key, i) => {
                __indexName__[i] = key;
                if (props[key]) {
                  console.warn(`预加载数据${key}与props冲突，会覆盖props数据`);
                }
                let temp = preloads[key];
                return Promise.resolve(
                  isFunction(temp) ? temp(props) : temp,
                ).catch((error) => {
                  console.error(`预加载数据${key}出错了,${error}`);
                });
              }),
            )
              .then((datas) => {
                const data: PreloadsType = {};
                datas.forEach((item, index) => {
                  data[__indexName__[index]] = item;
                });
                const endTime = Date.now();
                const deltaTime = endTime - startTime;
                if (deltaTime >= minloadTime) {
                  this.setState({
                    data,
                    isReady: true,
                  });
                } else {
                  timerId = window.setTimeout(
                    () =>
                      this.setState({
                        data,
                        isReady: true,
                      }),
                    minloadTime - deltaTime,
                  );
                }
              })
              .catch((error) => {
                console.error(error);
                this.setState({
                  isReady: true,
                });
              });
          });
        } else {
          this.setState({
            isReady: true,
          });
        }
      }
      componentWillUnmount() {
        window.clearTimeout(timerId);
      }
      render() {
        return this.state.isReady
          ? React.createElement(
              OrignalComponent,
              { ...this.props, ...this.state.data },
              null,
            )
          : React.createElement(loadingComponent, null);
      }
    };
  };
};

export default enhance;
