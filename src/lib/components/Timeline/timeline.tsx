import React, { FC, cloneElement, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import TimelineItem, { TimeLineItemProps } from './timeline-item';
import Icon from '../Icon';

export interface TimelineProps {
  className?: string;
  // pending是布尔真值时展示幽灵节点，
  pending?: ReactNode;
  // 如果pending是React元素，可用于定制该节点内容，pendingDot 将可以用于定制其轴点
  pendingDot?: ReactNode;
  style?: CSSProperties;
  // 设置mode，改变时间轴和内容的相对位置
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
    mode,
    children,
    ...restProps
  } = props;
  const pendingNode = typeof pending === 'boolean' ? null : pending;

  // 存在幽灵节点，则在最后追加一个节点
  const pendingItem = pending ? (
    <TimelineItem
      pending={!!pending}
      dot={pendingDot || <Icon icon={['fas', 'spinner']} pulse />}
    >
      {pendingNode}
    </TimelineItem>
  ) : null;

  const timeLineItems = [...React.Children.toArray(children), pendingItem];
  console.log(timeLineItems);
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
          !!pending ? pendingClass : readyClass,
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
  mode: '' as TimelineProps['mode'],
};

export default App;
