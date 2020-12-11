import React from 'react';
import { PreloadParamsType, PreloadsType, PreloadsFnType } from './preload';
import Spin from '../Spin';
function isObject(obj: any) {
  return Object.prototype.toString.call(obj) === '[object, Object]';
}
function isFunction(fn: any) {
  return fn && typeof fn === 'function';
}
interface IState {
  isReady: boolean;
  data: {};
}

function enhance(params: PreloadParamsType) {
  let { preloads, minloadTime = 0, LoadingComponent = Spin } = params;
  return function<T>(OrignalComponent: React.ComponentType<T>){
    let timerId: number;
    return class WrapperedComponent extends React.Component<T, IState> {
      constructor(props: T) {
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
              throw new Error('preloads 需为一个object或function');
            }
          }).then((preloads: any) => {
            const props = this.props;
            const __indexName__: PreloadsType = {};
            Promise.all(
              Object.keys(preloads as PreloadsType).map((key, i) => {
                __indexName__[i] = key;
                if ((props as any)[key]) {
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
        return this.state.isReady ? (
          <OrignalComponent {...this.props} {...this.state.data} />
        ) : (
          React.createElement(LoadingComponent, null)
        );
      }
    };
  };
}

export default enhance;
