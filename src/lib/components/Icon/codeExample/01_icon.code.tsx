import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React from 'react';
  import { Icon } from 'ark';

  const App = () => {
    return (
      <>
        <Icon icon={['far', 'address-book']} size="2x" />
      </>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};



export default Demo;
