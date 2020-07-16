import React from 'react';
import Menu from './menu';
import MenuItem from './menuItem';
export const MenuExample = () => (
  <Menu defaultIndex="0">
    <MenuItem>cool link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>cool link 2</MenuItem>
  </Menu>
);

export default MenuExample;
