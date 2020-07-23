import React from 'react';
import Progress from './progress';

const App = () => {
  return (
    <div>
      <div>
        <Progress percent={80} showText />
      </div>
    </div>
  );
};
export default App;
