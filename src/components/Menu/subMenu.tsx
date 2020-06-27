import React, { useContext, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { menuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, children, title, className } = props;
  const context = useContext(menuContext);
  const classes = classNames('ark-menu-item submenu-item', className, {
    'is-active': context.index === index,
  });

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return childElement;
      } else {
        console.error('Warning: SubMenu has a child which is not a MenuItem Component');
      }
    });
    return <ul className="ark-submenu">{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = 'SubMenu';

export default SubMenu;
