import React, { FC, ChangeEvent } from 'react';
import Rcode from './autoFocusNext';

const App: FC = () => {
  const onFinish = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Rcode total={6} onFinish={onFinish} autoFocus size="small" id="small"></Rcode>
      <Rcode total={6} onFinish={onFinish} autoFocus></Rcode>
      <Rcode total={6} onFinish={onFinish} autoFocus size="large"></Rcode>
    </div>
  );
};

export default App;
