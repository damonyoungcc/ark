import React, { FC } from 'react';

const Header: FC<HTMLDivElement> = (props) => {
  return <div className="ark-layout-header">{props.children}</div>;
};

export default Header;
