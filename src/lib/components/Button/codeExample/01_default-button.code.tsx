import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React, { FC } from 'react';
  import Button from './button';

  const App: FC = () => {
    return (
      <>
        <Button btnType="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button
          btnType="link"
          href="https://github.com/yangdepp/ark"
          target="_blank"
        >
          Link Button
        </Button>
      </>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};



export default Demo;
