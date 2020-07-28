import React, { FC } from 'react';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import ApiTableList from '../../tools/ApiTableList.tool';
import DefaultCode from './codeExample/01_default-button.code';
import DefaultExcample from './codeExample/01_default-button.example';
import DefaultContent from './codeExample/01_default-button.content';
import SizeCode from './codeExample/02_size-button.code';
import SizeExcample from './codeExample/02_size-button.example';
import SizeContent from './codeExample/02_size-button.content';

const apiList = [
  {
    property: 'btnType',
    describe: '按钮类型',
    type: 'primary | link',
    defaultValue: 'default',
  },
  {
    property: 'disabled',
    describe: '按钮失效状态',
    type: 'boolean',
    defaultValue: 'false',
  },
  {
    property: 'href',
    describe: '点击跳转的地址，指定此属性 button 的行为和 a 链接一致',
    type: 'string',
    defaultValue: '-',
  },
  {
    property: 'size',
    describe: '设置按钮的大小',
    type: 'lg | sm',
    defaultValue: '-',
  },
];

const App: FC = () => {
  return (
    <div>
      <h2 className="example-h2">Button 按钮</h2>
      <p className="example-p">用于开始一个即时操作。</p>
      <h3 className="example-h3">何时使用</h3>
      <ul className="example-ul">
        <li>主按钮：用于主行动点，一个操作区域只能有一个主按钮。</li>
        <li>默认按钮：用于没有主次之分的一组行动点。</li>
        <li>链接按钮：用于作为外链的行动点。</li>
      </ul>
      <h3 className="example-h3">代码演示</h3>
      <TemplateShow
        title="按钮类型"
        CodeComponent={<DefaultCode />}
        ExampleComponent={<DefaultExcample />}
        content={<DefaultContent />}
      />
      <TemplateShow
        title="按钮尺寸"
        CodeComponent={<SizeCode />}
        ExampleComponent={<SizeExcample />}
        content={<SizeContent />}
      />
      <h3 className="example-h3">API</h3>
      <p className="example-p">通过设置 Button 的属性来产生不同的按钮样式</p>
      <ApiTableList ApiList={apiList} />
    </div>
  );
};

export default App;
