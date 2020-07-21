import React, { FC, ReactElement, useState } from 'react';
import Icon from '../components/Icon/icon';
import Transition from '../components/Transition/transition';
import './show_template.scss';

interface ShowCodeProps {
  title: string;
  ExampleComponent: ReactElement;
  CodeComponent: ReactElement;
  content: ReactElement;
}

const App: FC<ShowCodeProps> = (props) => {
  const { ExampleComponent, CodeComponent, title, content } = props;
  const [showCode, setShowCode] = useState(false);

  const handleShowCode = () => {
    setShowCode(!showCode);
  };

  return (
    <div className="show-template_wrapper">
      <div className="template-example">{ExampleComponent}</div>
      <div className="split-line">
        <div className="pre-line split-line-item"></div>
        <div className="template-title">
          <span className="template-title-text">{title}</span>
          <Icon icon="pencil-alt" className="template-title-icon" />
        </div>
        <div className="after-line split-line-item"></div>
      </div>
      <div className="template-content">{content}</div>
      <div
        className="template-icon"
        style={{ borderBottom: `${showCode ? '1px dashed #f0f0f0' : ''}` }}
      >
        <div className="icon-wrapper">
          <Icon icon="copy" />
          <Icon icon="bug" />
          <Icon icon="thumbs-up" />
          <Icon icon="charging-station" />
          <Icon
            icon={showCode ? 'teeth-open' : 'teeth'}
            onClick={handleShowCode}
          />
        </div>
      </div>
      <Transition in={showCode} animation="zoom-in-top" timeout={300}>
        <div className="template-code">{CodeComponent}</div>
      </Transition>
    </div>
  );
};

export default App;
