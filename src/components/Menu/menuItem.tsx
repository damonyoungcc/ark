import React, { useContext } from 'react';
import classNames from 'classnames';
import { menuContext } from './menu';
type MenuMode = 'horizontal' | 'vertical';

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, disabled, style, index, children } = props;
  const context = useContext(menuContext);
  const classes = classNames('ark-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index);
    }
  };

  return (
    <li style={style} className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};

export default MenuItem;
