import { FC, HTMLAttributes } from 'react';
import Menu, { MenuProps } from './menu';
import SubMenu, { SubMenuProps } from './subMenu';
import MenuItem, { MenuItemProps } from './menuItem';

export type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps & HTMLAttributes<HTMLElement>>;
  SubMenu: FC<SubMenuProps>;
};

const TransMenu = Menu as IMenuComponent;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

export default TransMenu;
