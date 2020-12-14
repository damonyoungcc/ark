import React, { Component } from 'react';
import preload from './preload';
import Spin from '../Spin';
import axios from 'axios';
const getList = () => axios.get('/mock/list.json').then((data) => data.data);
const getOrder = axios.get('/mock/order.json').then((data) => undefined);
const test = async function test() {
  const result1 = await axios.get('/mock/list.json');
  const result = await axios.get(
    `/mock/order.json?name=${result1.data[0].name}`,
  );
  return result.data;
};

interface ExampleProps {
  testProps: string;
}

// @ts-ignore
@preload({
  preloads: {
    getList,
    getOrder,
    test,
  },
  minloadTime: 0,
  LoadingComponent: Spin,
})
// @preload({
//   preloads: (props) => ({
//     listData: getList(),
//     orderData: getOrder,
//     testAsyncFunction: test(props),
//     testNormalFunction: (props: ExampleProps) => {
//       return props.testProps + 1;
//     },
//     testNoFunction: props.testProps + 2,
//     testFalsy: undefined,
//     testNull: null,
//     test: 3,
//     testFnReject: () => Promise.reject('testFnReject'),
//     testReject: Promise.reject('testReject'),
//     testFnResolve: () => Promise.resolve('testFnResolve'),
//     testResolve: Promise.resolve('testResolve'),
//     testLongTimeResolve: new Promise((r) =>
//       setTimeout(() => r('testLongTimeResolve'), 2000),
//     ),
//     testFnLongTimeResolve: () =>
//       new Promise((r) => setTimeout(() => r('testFnLongTimeResolve'), 2000)),
//   }),
//   minloadTime: 0,
//   LoadingComponent: Spin,
// })
class PreloadExample extends Component<ExampleProps, any> {
  constructor(props: ExampleProps) {
    super(props);
    this.state = {
      num: 1,
    };
  }

  fn = () => {
    const { num } = this.state;
    this.setState({
      num: num + 1,
    });
  };

  fn1 = (props: any): void => {
    console.log(props);
  };

  fn2 = (props: any) => {
    console.log(props);
  };

  render() {
    // console.log('props', this.props);
    return (
      <div>
        <div onClick={this.fn}>hello world{this.state.num}</div>
        <div onClick={this.fn1.bind(this, this.props)}>hahaha</div>
        <div onClick={() => this.fn2(this.props)}>hahaha</div>
      </div>
    );
  }
}

export default PreloadExample;
