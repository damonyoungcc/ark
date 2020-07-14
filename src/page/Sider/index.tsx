import React, { FC } from 'react';
import { Menu } from '../../lib';
import { useHistory } from 'react-router-dom';
import './style.scss';
import menusList from '../../routes';
const { SubMenu } = Menu;

const LayoutComponent: FC = () => {
  const history = useHistory();

  const handleSelct = (item: any) => {
    return () => {
      history.push(item.path);
    };
  };
  return (
    <Menu mode="vertical">
      {menusList.map((item) =>
        item.children ? (
          <SubMenu key={item.path} title={item.title}>
            {item.children.map((element: any) => (
              <Menu.Item key={element.path}>
                <span>{element.title}</span>
              </Menu.Item>
            ))}
          </SubMenu>
        ) : (
          <Menu.Item key={item.path} onClick={handleSelct(item)}>
            <span>{item.title}</span>
          </Menu.Item>
        ),
      )}
    </Menu>
  );
};

export default LayoutComponent;
