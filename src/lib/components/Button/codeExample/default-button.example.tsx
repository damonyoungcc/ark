import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `
  import React, { FC } from 'react';
  import Button from './button';

  const App: FC = () => {

    const handleClick = () => {
      console.log('hello Button');
    };

    return (
      <div>
        <Button onClick={handleClick} btnType="primary">按钮</Button>
      </div>
    );
  };
  
  export default App;`;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
