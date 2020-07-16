import React, { FC, ChangeEvent, useState } from 'react';
import Input from './input';
const App: FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <Input
        value={inputValue}
        style={{ width: '300px' }}
        onChange={handleChange}
      >
        按钮
      </Input>
    </div>
  );
};

export default App;
