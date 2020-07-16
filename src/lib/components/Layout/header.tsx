import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';

const Header: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const { className, ...restprops } = props;
  const classes = classNames('ark-layout-header', className);

  return (
    <div className={classes} {...restprops}>
      {props.children}
    </div>
  );
};

export default Header;
