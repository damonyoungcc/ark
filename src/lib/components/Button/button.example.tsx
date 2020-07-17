import React, { FC } from 'react';
import Button from './button';
import DefaultCodeExample from './codeExample/default-button.example';
const App: FC = () => {
  return (
    <div>
      <Button>按钮</Button>
      <DefaultCodeExample />
    </div>
  );
};

export default App;
