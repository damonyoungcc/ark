import React, { FC } from 'react';
import TemplateShow from '../../tools/ShowTemplateCode.tool';
import DefaultCode from './codeExample/01_default-button.code';
import DefaultExcample from './codeExample/01_default-button.example';
import DefaultContent from './codeExample/01_default-button.content';

const App: FC = () => {
  return (
    <div>
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
