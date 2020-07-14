import React, { ReactElement } from 'react';
import Sider from './sider';
import classNames from 'classnames';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
  const childrenAsArray = props.children as Array<ReactElement>;
  const hasSider =
    length in childrenAsArray &&
    childrenAsArray.some((node) => node.type === Sider);

  const classes = classNames('ark-layout', {
    'ark-layout-hasSider': hasSider,
  });

  return <div className={classes}>{props.children}</div>;
};
export default Layout;
export { Layout };
export { default as Header } from './header';
export { default as Footer } from './footer';
export { default as Content } from './content';
export { default as Sider } from './sider';
