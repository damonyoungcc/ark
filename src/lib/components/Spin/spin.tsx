import React, { FC, isValidElement, cloneElement } from 'react';
import classNames from 'classnames';
type SpinSize = 'small' | 'default' | 'large';

export type SpinIndicator = React.ReactElement<HTMLElement>;

export interface SpinProps {
  className?: string;
  size?: SpinSize;
  spinning?: boolean;
  tip?: string;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
  style?: React.CSSProperties;
}

const App: FC<SpinProps> = (props) => {
  const {
    children,
    size = 'default',
    spinning = true,
    tip,
    indicator,
    wrapperClassName,
    style,
    className,
    ...restProps
  } = props;

  const renderIndicator = () => {
    if (indicator === null) {
      return null;
    }
    if (isValidElement(indicator)) {
      return cloneElement(indicator, {
        className: classNames(indicator.props.className, 'ark-spin-dot'),
      });
    }

    return (
      <span className={classNames('ark-spin-dot', `ark-spin-dot-spin`)}>
        <i className="ark-spin-dot-item" />
        <i className="ark-spin-dot-item" />
        <i className="ark-spin-dot-item" />
        <i className="ark-spin-dot-item" />
      </span>
    );
  };

  const renderSpin = () => {
    const spinClassName = classNames(
      'ark-spin',
      {
        'ark-spin-sm': size === 'small',
        'ark-spin-lg': size === 'large',
        'ark-spin-spinning': spinning,
        'ark-spin-show-text': !!tip,
      },
      className,
    );

    const spinElement = (
      <div {...restProps} style={style} className={spinClassName}>
        {renderIndicator()}
        {tip ? <div className={'ark-spin-text'}>{tip}</div> : null}
      </div>
    );
    if (children) {
      const containerClassName = classNames('ark-spin-container', {
        'ark-spin-blur': spinning,
      });
      return (
        <div
          {...restProps}
          className={classNames(`ark-spin-nested-loading`, wrapperClassName)}
        >
          {spinning && <div key="loading">{spinElement}</div>}
          <div className={containerClassName} key="container">
            {children}
          </div>
        </div>
      );
    }

    return spinElement;
  };

  return <>{renderSpin()}</>;
};

App.defaultProps = {
  size: 'default',
  spinning: true,
};

export default App;
