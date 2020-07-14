import React, { useContext, HTMLAttributes } from 'react';
import classNames from 'classnames';
import { menuContext } from './menu';
type MenuMode = 'horizontal' | 'vertical';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps & HTMLAttributes<HTMLElement>> = (
  props,
) => {
  const { className, disabled, style, index, children, onClick } = props;
  const context = useContext(menuContext);
  const classes = classNames('ark-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
    if (onClick) {
      onClick(e);
    }
  };

  const clickEvents = { onClick: handleClick };

  return (
    <li style={style} className={classes} {...clickEvents}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
