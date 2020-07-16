import { FC, HTMLAttributes } from 'react';
import Layout from './layout';
import Header from './header';
import Footer from './footer';
import Content from './content';
import Sider from './sider';

export type LayoutComponent = FC<HTMLAttributes<HTMLElement>> & {
  Header: FC<HTMLAttributes<HTMLElement>>;
  Footer: FC<HTMLAttributes<HTMLElement>>;
  Content: FC<HTMLAttributes<HTMLElement>>;
  Sider: FC<HTMLAttributes<HTMLElement>>;
};

const TransLayout = Layout as LayoutComponent;
TransLayout.Header = Header;
TransLayout.Footer = Footer;
TransLayout.Content = Content;
TransLayout.Sider = Sider;

export default TransLayout;
