import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React from 'react';
  import { AutoFocusNext } from 'arkd';

  const App = () => {
    return (
      <div>
        <AutoFocusNext size="small" />
        <AutoFocusNext />
        <AutoFocusNext size="large" />
      </div>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
