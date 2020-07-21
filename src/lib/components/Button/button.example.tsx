import React, { FC } from 'react';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import DefaultCode from './codeExample/01_default-button.code';
import DefaultExcample from './codeExample/01_default-button.example';
import DefaultContent from './codeExample/01_default-button.content';

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
    </div>
  );
};

export default App;
