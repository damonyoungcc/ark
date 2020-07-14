import Button from './Button';
import Input from './Input';
import { autoAddPathToChildren } from './routes_helper';

const routes = autoAddPathToChildren([].concat(Button, Input));

export default routes;
