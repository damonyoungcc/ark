import React, { FC, useState, ChangeEvent } from 'react';
import AutoFocusNext from '../autoFocusNext';

const App: FC = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onFinish = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <AutoFocusNext value={value} onChange={handleChange} />
      <AutoFocusNext onFinish={onFinish} sensitive />
    </div>
  );
};

export default App;
