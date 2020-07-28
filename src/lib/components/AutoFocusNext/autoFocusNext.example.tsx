import React, { FC } from 'react';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import Example01 from './codeExample/01_autoFocus.example';
import Code01 from './codeExample/01_autoFocus.code';
import Example02 from './codeExample/02_autoFocus.example';
import Code02 from './codeExample/02_autoFocus.code';

const App: FC = () => {
  return (
    <div>
      <h2 className="example-h2">AutoFocusNext 自动聚焦下一个输入框</h2>
      <p className="example-p">用于验证码等输入场景</p>
      <h3 className="example-h3">何时使用</h3>
      <ul className="example-ul">
        <li>
          六位验证码：可在有输入验证码场景中使用，输入一个会自动聚集下一个输入框
        </li>
        <li>可以在需要脱敏的场景下使用，输入的字符会被替换成*号</li>
      </ul>
      <h3 className="example-h3">代码演示</h3>
      <TemplateShow
        title="基本用法"
        CodeComponent={<Code01 />}
        ExampleComponent={<Example01 />}
        content={
          <div>
            默认是六位输入框，通过设置
            <code className="example-code">total</code> 改变
            <code className="example-code">AutoFocusNext</code> 输入框的个数；
            通过设置
            <code className="example-code">size</code> 改变
            <code className="example-code">AutoFocusNext</code> 输入框的大小
          </div>
        }
      />
      <TemplateShow
        title="受控组件和回调"
        CodeComponent={<Code02 />}
        ExampleComponent={<Example02 />}
        content={
          <div>
            可以像<code className="example-code">Input</code>输入框一样，设置
            <code className="example-code">value</code>和
            <code className="example-code">onChange</code>
            方法，或者在完成输入后，设置回调函数
            <code className="example-code">onFinish</code>; 设置
            <code className="example-code">sensitive</code>
            ，可以保护输入时的隐私
          </div>
        }
      />
    </div>
  );
};

export default App;
