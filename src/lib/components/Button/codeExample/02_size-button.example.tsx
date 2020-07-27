import React from 'react';
import Button from '../button';
const App = () => {
  return (
    <>
      <Button size="sm" btnType="primary" style={{ margin: '5px' }}>
        Small Button
      </Button>
      <Button btnType="primary" style={{ margin: '5px' }}>
        Default Button
      </Button>
      <Button btnType="primary" size="lg" style={{ margin: '5px' }}>
        Large Button
      </Button>
    </>
  );
};

export default App;
