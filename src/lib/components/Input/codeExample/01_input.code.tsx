import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React from 'react';
  import { Input } from 'ark';

  const App = () => {
    return (
      <>
        <Input />
      </>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
