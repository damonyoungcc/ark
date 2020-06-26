import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

const App: React.FC = () => {
  return (
    <div>
      <Button disabled>按钮</Button>
      <Button onClick={() => console.log('111')} size={ButtonSize.Large} autoFocus>
        按钮
      </Button>
      <Button size={ButtonSize.Small}>按钮</Button>
      <Button btnType={ButtonType.Danger}>按钮</Button>
      <Button className="test" btnType={ButtonType.Primary} size={ButtonSize.Large}>
        按钮
      </Button>
      <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>
        Link Button
      </Button>
      <Button
        btnType={ButtonType.Link}
        href="http://www.baidu.com"
        size={ButtonSize.Small}
        target="_blank"
      >
        Link Button
      </Button>
      <div>---------</div>
      <Menu defaultIndex={0} onSelect={(index) => console.log(index)}>
        <MenuItem index={0}>menu1</MenuItem>
        <MenuItem index={1} disabled>
          menu2
        </MenuItem>
        <MenuItem index={2}>menu3</MenuItem>
      </Menu>
      <div>---------</div>
      <Menu defaultIndex={0} onSelect={(index) => console.log(index)} mode="vertical">
        <MenuItem index={0}>menu1</MenuItem>
        <MenuItem index={1} disabled>
          menu2
        </MenuItem>
        <MenuItem index={2}>menu3</MenuItem>
      </Menu>
    </div>
  );
};

export default App;
