import React, { FC, ChangeEvent } from 'react';
import Rcode from './rcode';

const App: FC = () => {
  const onFinish = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <Rcode onFinish={onFinish} autoFocus></Rcode>
    </div>
  );
};

export default App;
