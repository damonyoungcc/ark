import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const Content: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...restprops } = props;
  const classes = classNames('ark-layout-content', className);
  return (
    <div className={classes} {...restprops}>
      {props.children}
    </div>
  );
};

export default Content;
