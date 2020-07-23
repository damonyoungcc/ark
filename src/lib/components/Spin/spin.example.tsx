import React, { useState } from 'react';
import Spin from './spin';
import Icon from '../Icon';

import './spin.example.scss';

const SpinIcon1 = <Icon icon="circle-notch" className="spin-example-icon" />;
const SpinIcon2 = (
  <Icon icon={['far', 'clock']} className="spin-example-icon" />
);
const SpinIcon3 = (
  <Icon icon={['far', 'hourglass']} className="spin-example-icon" />
);
const SpinIcon4 = (
  <Icon icon={['fas', 'hourglass-end']} className="spin-example-icon" />
);
const SpinIcon5 = (
  <Icon icon={['fas', 'spinner']} className="spin-example-icon" />
);
const App = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="example">
      <Spin indicator={SpinIcon1} tip="加载中..." />
      <Spin indicator={SpinIcon2} />
      <Spin indicator={SpinIcon3} />
      <Spin indicator={SpinIcon4} />
      <Spin indicator={SpinIcon5} />
      <div>
        <Spin indicator={SpinIcon2} spinning={loading}>
          <div
            style={{
              display: 'inline-block',
              width: '500px',
              height: '100px',
              backgroundColor: '#e6f7ff',
            }}
          >
            这里是内容
          </div>
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <button onClick={() => setLoading(!loading)}>
            {loading ? '开' : '关'}
          </button>
        </div>
      </div>
      <Spin />
    </div>
  );
};

export default App;
