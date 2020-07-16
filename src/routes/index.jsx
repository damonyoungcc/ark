import Button from './Button';
import Input from './Input';
import Layout from './Layout';
import Menu from './Menu';
import Rcode from './Rcode';
import { autoAddPathToChildren } from './routes_helper';

const routes = autoAddPathToChildren(
  [].concat(Button, Input, Layout, Menu, Rcode),
);

export default routes;
