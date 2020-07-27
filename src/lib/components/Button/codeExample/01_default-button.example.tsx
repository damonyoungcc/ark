import React from 'react';
import Button from '../button';
const App = () => {
  return (
    <>
      <Button btnType="primary" style={{ margin: '5px' }}>
        Primary Button
      </Button>
      <Button style={{ margin: '5px' }}>Default Button</Button>
      <Button style={{ margin: '5px' }} disabled>
        Disabled Button
      </Button>
      <Button
        style={{ margin: '5px' }}
        btnType="link"
        href="https://github.com/yangdepp/ark"
        target="_blank"
      >
        Link Button
      </Button>
      <Button
        style={{ margin: '5px' }}
        disabled
        btnType="link"
        href="https://github.com/yangdepp/ark"
        target="_blank"
      >
        Link Button
      </Button>
      <Button style={{ margin: '5px' }} btnType="danger">
        Danger Button
      </Button>
    </>
  );
};

export default App;
