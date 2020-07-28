import React, { FC } from 'react';
import Input from './input';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import Code01 from './codeExample/01_input.code';
import Code02 from './codeExample/02_input.code';
import Code03 from './codeExample/03_input.code';
import Code04 from './codeExample/04_input.code';
import Content01 from './codeExample/01_input.content';
import Example01 from './codeExample/01_input.example';
import './input.example.scss';

const Example02 = () => {
  return (
    <>
      <Input size="sm" placeholder="size设置为sm" />
      <Input placeholder="默认大小的输入框" />
      <Input size="lg" placeholder="size设置为lg" />
    </>
  );
};

const Example03 = () => {
  return (
    <>
      <Input icon="hand-point-left" style={{ width: '300px' }} />
      <Input icon={['fas', 'fan']} style={{ width: '300px' }} />
    </>
  );
};

const Example04 = () => {
  return (
    <>
      <Input
        placeholder="带前缀"
        prepend="https://"
        style={{ width: '300px' }}
        icon={['fas', 'fan']}
      />
      <Input append=".com" style={{ width: '300px' }} placeholder="带后缀" />
    </>
  );
};

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
          title="三种大小"
          CodeComponent={<Code02 />}
          ExampleComponent={<Example02 />}
          content={
            <div>
              通过设置 <code className="example-code">size</code> 改变
              <code className="example-code">Input</code> 输入框的大小
            </div>
          }
        />
      </div>
      <div className="show-wrapper">
        <TemplateShow
          title="后缀图标"
          CodeComponent={<Code03 />}
          ExampleComponent={<Example03 />}
          content={
            <div>
              通过设置 <code className="example-code">icon</code> 为
              <code className="example-code">Input</code> 输入框添加图标后缀
            </div>
          }
        />
        <TemplateShow
          title="后缀图标"
          CodeComponent={<Code04 />}
          ExampleComponent={<Example04 />}
          content={
            <div>
              通过设置 <code className="example-code">prepend</code> 和
              <code className="example-code">append</code>为
              <code className="example-code">Input</code> 输入框添加前缀和后缀
            </div>
          }
        />
      </div>
    </div>
  );
};

export default App;
