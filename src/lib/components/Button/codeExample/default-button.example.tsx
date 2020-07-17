import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `
  import { Button } from 'ark';
  
  const App = () => {
    return <Button>按钮</Button>
  };

  export default App;
  `;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
