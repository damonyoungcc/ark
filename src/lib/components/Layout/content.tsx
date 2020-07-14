import React, { FC } from 'react';

const Content: FC<HTMLDivElement> = (props) => {
  return <div className="ark-layout-content">{props.children}</div>;
};

export default Content;
