import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React from 'react';
  import { Button } from 'arkd';

  const App = () => {
    return (
      <>
        <Button btnType="primary">
          Primary Button
        </Button>
        <Button>Default Button</Button>
        <Button disabled>
          Disabled Button
        </Button>
        <Button
          btnType="link"
          href="https://github.com/yangdepp/ark"
          target="_blank"
        >
          Link Button
        </Button>
        <Button
          disabled
          btnType="link"
          href="https://github.com/yangdepp/ark"
          target="_blank"
        >
          Link Button
        </Button>
        <Button btnType="danger">
          Danger Button
        </Button>
      </>
    );
  };

  export default App;`;

  return <HighLight code={code}></HighLight>;
};



export default Demo;
