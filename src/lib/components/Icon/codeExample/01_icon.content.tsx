import React, { FC } from 'react';
const App: FC = () => {
  return (
    <div>
      <div>
        常规的图标引入,鼠标点击 <code className="example-code">Icon</code>
        可获得 <code className="example-code">Icon</code>的
        <code className="example-code">name</code>属性 ，
        <br />
        如下例子中，放入<code className="example-code">icon</code>中的第二个参数
        <code>{`icon={['far', 'address-book']}`}</code>
      </div>
    </div>
  );
};

export default App;
