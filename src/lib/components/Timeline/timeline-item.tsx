import React, { FC, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

export interface TimeLineItemProps {
  className?: string;
  color?: string;
  dot?: ReactNode;
  pending?: boolean;
  position?: string;
  style?: CSSProperties;
  label?: ReactNode;
}

function omit(obj: any, fields: string[]) {
  var shallowCopy = Object.assign({}, obj);

  for (var i = 0; i < fields.length; i += 1) {
    var key = fields[i];
    delete shallowCopy[key];
  }

  return shallowCopy;
}

const App: FC<TimeLineItemProps> = (props) => {
  const {
    className,
    color,
    dot,
    pending,
    style,
    label,
    children,
    ...restProps
  } = props;

  const itemClassName = classNames(
    'ark-timeline-item',
    {
      'ark-timeline-item-pending': pending,
    },
    className,
  );

  const dotClassName = classNames('ark-timeline-item-head', {
    'ark-timeline-item-head-custom': dot,
    [`ark-timeline-item-head-${color}`]: true,
  });

  return (
    <li {...omit(restProps, ['position'])} className={itemClassName}>
      {label && <div className="ark-timeline-item-label">{label}</div>}
      <div className="ark-timeline-item-tail" />
      <div
        className={dotClassName}
        style={{
          borderColor: /blue|red|green|gray/.test(color || '')
            ? undefined
            : color,
        }}
      >
        {dot}
      </div>
      <div className="ark-timeline-item-content">{children}</div>
    </li>
  );
};

App.defaultProps = {
  color: 'blue',
  pending: false,
  position: '',
};

export default App;
