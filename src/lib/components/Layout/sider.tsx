import React, { FC } from 'react';

const Sider: FC<HTMLDivElement> = (props) => {
  return <div className="ark-layout-sider">{props.children}</div>;
};

export default Sider;
