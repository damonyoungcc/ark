import React from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, disabled, style, index, children } = props;
  const classes = classNames('ark-menu-item', className, {
    'is-disabled': disabled,
  });
  return (
    <li style={style} className={classes}>
      {children}
    </li>
  );
};

export default MenuItem;
