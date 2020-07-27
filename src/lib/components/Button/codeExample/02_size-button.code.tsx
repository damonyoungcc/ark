import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React from 'react';
  import { Button } from 'ark';

  const App = () => {
    return (
      <>
        <Button btnType="primary" size="sm">Small Button</Button>
        <Button btnType="primary">Default Button</Button>
        <Button btnType="primary" size="lg">Large Button</Button>
      </>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
