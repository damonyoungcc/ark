import React, { FC, cloneElement, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import TimelineItem, { TimeLineItemProps } from './timeline-item';
import Spin from '../Spin';

export interface TimelineProps {
  className?: string;
  pending?: ReactNode;
  pendingDot?: ReactNode;
  style?: CSSProperties;
  reverse?: boolean;
  mode?: 'left' | 'right' | 'alternate';
}

interface TimelineType extends FC<TimelineProps> {
  Item: FC<TimeLineItemProps>;
}

const App: TimelineType = (props) => {
  const {
    className,
    pending = null,
    pendingDot,
    reverse,
    mode,
    children,
    ...restProps
  } = props;
  const pendingNode = typeof pending === 'boolean' ? null : pending;

  const pendingItem = pending ? (
    <TimelineItem pending={!!pending} dot={pendingDot || <Spin />}>
      {pendingNode}
    </TimelineItem>
  ) : null;

  const timeLineItems = reverse
    ? [pendingItem, ...React.Children.toArray(children).reverse()]
    : [...React.Children.toArray(children), pendingItem];

  const getPositionCls = (ele: React.ReactElement<any>, index: number) => {
    if (mode === 'alternate') {
      if (ele.props.position === 'right') {
        return 'ark-timeline-item-right';
      }
      if (ele.props.position === 'left') {
        return 'ark-timeline-item-left';
      }
      return index % 2 === 0
        ? 'ark-timeline-item-left'
        : 'ark-timeline-item-right';
    }
    if (mode === 'left') {
      return 'ark-timeline-item-left';
    }
    if (mode === 'right') {
      return 'ark-timeline-item-right';
    }
    if (ele.props.position === 'right') {
      return 'ark-timeline-item-right';
    }
    return '';
  };

  const truthyItems = timeLineItems.filter((item) => !!item);
  const itemsCount = React.Children.count(truthyItems);
  const lastCls = 'ark-timeline-item-last';
  const items = React.Children.map(
    truthyItems as any,
    (ele: React.ReactElement<any>, index) => {
      const pendingClass = index === itemsCount - 2 ? lastCls : '';
      const readyClass = index === itemsCount - 1 ? lastCls : '';
      return cloneElement(ele, {
        className: classNames([
          ele.props.className,
          !reverse && !!pending ? pendingClass : readyClass,
          getPositionCls(ele, index),
        ]),
      });
    },
  );

  const hasLabelItem = (timeLineItems as any).some(
    (item: React.ReactElement<any>) =>
      Boolean(((item || {}).props || {}).label),
  );
  const classString = classNames(
    'ark-timeline',
    {
      'ark-timeline-pending': !!pending,
      'ark-timeline-reverse': !!reverse,
      [`ark-timeline-${mode}`]: !!mode && !hasLabelItem,
      [`ark-timeline-label`]: hasLabelItem,
    },
    className,
  );

  return (
    <ul {...restProps} className={classString}>
      {items}
    </ul>
  );
};

App.Item = TimelineItem;

App.defaultProps = {
  reverse: false,
  mode: '' as TimelineProps['mode'],
};

export default App;
