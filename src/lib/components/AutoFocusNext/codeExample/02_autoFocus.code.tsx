import React from 'react';
import HighLight from '../../../tools/HighLight.tool';

const Demo = () => {
  const code = `  import React, { ChangeEvent } from 'react';
  import { AutoFocusNext } from 'arkd';

  const App = () => {

    const [value, setValue] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };

    const onFinish = (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    };

    return (
      <div>
        <AutoFocusNext value={value} onChange={handleChange} />
        <AutoFocusNext onFinish={onFinish} sensitive />
      </div>
    );

  export default App;`;

  return <HighLight code={code}></HighLight>;
};

export default Demo;
