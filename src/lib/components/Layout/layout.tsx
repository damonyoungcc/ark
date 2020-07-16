import React, { ReactElement, FC, HTMLAttributes } from 'react';
import Sider from './sider';
import classNames from 'classnames';

const Layout: FC<HTMLAttributes<HTMLElement>> = (props) => {
  const { className, ...restProps } = props;
  const childrenAsArray = props.children as Array<ReactElement>;
  const hasSider =
    childrenAsArray.length &&
    childrenAsArray.some((node) => node.type === Sider);

  const classes = classNames('ark-layout', className, {
    'ark-layout-hasSider': hasSider,
  });

  return (
    <div className={classes} {...restProps}>
      {props.children}
    </div>
  );
};
export default Layout;
