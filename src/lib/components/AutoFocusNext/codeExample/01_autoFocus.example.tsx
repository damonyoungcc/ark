import React, { FC } from 'react';
import AutoFocusNext from '../autoFocusNext';

const App: FC = () => {
  return (
    <div>
      <AutoFocusNext size="small" />
      <AutoFocusNext />
      <AutoFocusNext size="large" />
    </div>
  );
};

export default App;
