import React, { FC } from 'react';
import Button from './button';
import DefaultCodeExample from './codeExample/default-button.example';
const App: FC = () => {
  const handleClick = () => {
    console.log('hello Button');
  };
  return (
    <div>
      <Button onClick={handleClick} btnType="primary">按钮</Button>
      <DefaultCodeExample />
    </div>
  );
};

export default App;
