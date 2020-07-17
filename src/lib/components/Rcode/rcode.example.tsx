import React, { FC, ChangeEvent } from 'react';
import Rcode from './rcode';

const App: FC = () => {
  const onFinish = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Rcode total={6} onFinish={onFinish} autoFocus size="small" id="small"></Rcode>
      <Rcode total={6} onFinish={onFinish} autoFocus></Rcode>
      <Rcode total={6} onFinish={onFinish} autoFocus size="large" sensitive></Rcode>
    </div>
  );
};

export default App;
