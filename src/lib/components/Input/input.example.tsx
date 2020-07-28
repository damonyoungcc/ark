import React, { FC } from 'react';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import Code01 from './codeExample/01_input.code';
import Content01 from './codeExample/01_input.content';
import Example01 from './codeExample/01_input.example';
import './input.example.scss';

const App: FC = () => {
  return (
    <div>
      <h2 className="example-h2">Input 输入框</h2>
      <p className="example-p">通过鼠标或键盘输入内容，用于接收用户的输入</p>
      <h3 className="example-h3">代码演示</h3>
      <div className="show-wrapper">
        <TemplateShow
          title="基本使用"
          CodeComponent={<Code01 />}
          ExampleComponent={<Example01 />}
          content={<Content01 />}
        />
        <TemplateShow
          title="基本使用"
          CodeComponent={<Code01 />}
          ExampleComponent={<Example01 />}
          content={<Content01 />}
        />
      </div>
    </div>
  );
};

export default App;
