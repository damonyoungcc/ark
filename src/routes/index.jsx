import Button from './Button';
import Input from './Input';
import Layout from './Layout';
import { autoAddPathToChildren } from './routes_helper';

const routes = autoAddPathToChildren([].concat(Button, Input, Layout));

export default routes;
