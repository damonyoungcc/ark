import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const Footer: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...restprops } = props;
  const classes = classNames('ark-layout-footer', className);
  return (
    <div className={classes} {...restprops}>
      {props.children}
    </div>
  );
};

export default Footer;
