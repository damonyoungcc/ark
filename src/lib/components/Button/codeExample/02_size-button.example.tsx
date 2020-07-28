import React from 'react';
import Button from '../button';
const App = () => {
  return (
    <>
      <Button size="sm" btnType="primary" style={{ margin: '5px' }}>
        Small Button
      </Button>
      <Button size="sm" style={{ margin: '5px' }}>
        Small Button
      </Button>
      <Button btnType="primary" style={{ margin: '5px' }}>
        Default Button
      </Button>
      <Button style={{ margin: '5px' }}>
        Default Button
      </Button>
      <Button btnType="primary" size="lg" style={{ margin: '5px' }}>
        Large Button
      </Button>
      <Button size="lg" style={{ margin: '5px' }}>
        Large Button
      </Button>
    </>
  );
};

export default App;
